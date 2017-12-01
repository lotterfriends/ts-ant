import { Node } from "./node";
import { Board } from "./board";
import { Anthill } from "./anthill";
import { Sugar } from "./sugar";
import { Ant } from "./ant";
import { Apple } from "./apple";
import { MyAnt } from "./myant";
import { BoardObject } from "./boardObject";
import { Keys } from "./keys";
import { Bug } from "./bug";

class Game extends Node {

    private currentAngle: number = 300.2;
    private board: Board = new Board();
    private anthill: Anthill = new Anthill();
    private sugar: Array<Sugar> = [];
    private apples: Array<Apple> = [];
    private ants: Array<Ant> = [];
    private bugs: Array<Bug> = [];
    private spawnDelay: number = 6;
    private maxAnts: number = 50;
    private turn: number = 0;
    private pause: boolean = false;

    constructor() {
        super('div', 'game');
        this.bootstrap();
    }

    public start(): void {
        this.run();
    }

    private bootstrap(): void {
        this.addItem(this.board.getNode());
        this.sugar.push(new Sugar({ x: Board.randomNegative(20), y: Board.randomPositive(20) }));
        this.sugar.push(new Sugar({ x: Board.randomPositive(20), y: Board.randomPositive(20) }));
        this.sugar.push(new Sugar({ x: Board.randomPositive(20), y: Board.randomNegative(20) }));
        this.sugar.push(new Sugar({ x: Board.randomNegative(20), y: Board.randomNegative(20) }));
        this.apples.push(new Apple({ x: Board.randomNegative(20), y: Board.randomNegative(50) }));
        this.bugs.push(new Bug());
        this.bugs.push(new Bug());
        this.bugs.push(new Bug());
        this.board.addItem(this.anthill.getNode());
        for (let sugar of this.sugar) {
            this.board.addItem(sugar.getNode());
        }
        for (let apple of this.apples) {
            this.board.addItem(apple.getNode());
        }
        for (let bug of this.bugs) {
            this.board.addItem(bug.getNode());
        }
        document.body.appendChild(this.getNode());
        this.initKeyboardListener();
    }

    private initKeyboardListener(): void {
        document.addEventListener('keydown', (event) => {
            if (event.which === Keys.P) {
                this.pause = !this.pause;
            }
            if (event.which === Keys.D) {
                this.getNode().classList.toggle('debug');
            }
        });
    }

    /**
     * main loop
     */
    private run(): void {

        if (!this.pause) {

            if (this.ants.length < this.maxAnts && this.turn % this.spawnDelay === 0) {
                var ant = new MyAnt(this.currentAngle);
                this.ants.push(ant);
                this.board.addItem(ant.getNode());
                this.currentAngle -= 7.2;
                if (this.currentAngle < 0) {
                    this.currentAngle += 360;
                }
            }

            for (let ant of this.ants) {

                if (ant.isDead()) {
                    continue;
                }

                // all sugar
                for (let sugar of this.sugar) {
                    if (ant.sees(sugar)) {
                        ant.seesSugar(sugar);
                    }
                    if (ant.collidesdWith(sugar)) {
                        ant.reachSugar(sugar);
                    }
                }

                // all apples
                for (let apple of this.apples) {
                    if (ant.sees(apple)) {
                        ant.seesApple(apple);
                    }
                    // one, so they have to reach the center
                    if (BoardObject.collision(ant.getPosition(), ant.getSize(), apple.getPosition(), 1)) {
                        ant.reachApple(apple);
                    }
                }

                for (let bug of this.bugs) {
                    if (ant.sees(bug)) {
                        ant.seesBug(bug);
                    }

                    if (ant.collidesdWith(bug)) {
                        ant.reachBug(bug);
                    }
                }

                let antLoad: BoardObject = ant.getLoad();
                if (antLoad instanceof Sugar) {
                    if (this.sugar.indexOf(antLoad) < 0) {
                        this.sugar.push(antLoad);
                        this.board.addItem(antLoad.getNode());
                    }
                }

                if (antLoad) {
                    if (antLoad instanceof Apple) {
                        if (antLoad.getCarrier()[0]) {
                            antLoad.setPositionOnBoard(antLoad.getCarrier()[0].getPosition());
                        }
                    } else {
                        antLoad.setPositionOnBoard(ant.getPosition());
                    }
                }

                if (ant.collidesdWith(this.anthill)) {

                    ant.rest();
                    ant.reachAnthill();
                    // dropt at anthill
                    if (antLoad) {
                        if (antLoad && !ant.getLoad()) {
                            if (antLoad instanceof Sugar) {
                                this.sugar.splice(this.sugar.indexOf(antLoad));
                                antLoad.destroy(ant);
                            }
                            if (antLoad instanceof Apple) {
                                this.apples.splice(this.apples.indexOf(antLoad));
                                antLoad.destroy(ant);
                            }
                            // TODO: add points;
                        }
                        if (antLoad instanceof Apple) {
                            antLoad.destroy();
                        }
                    }

                }

                ant.live(this.turn);
            }

            for (let bug of this.bugs) {

                for (let ant of this.ants) {
                    if (ant.isDead()) {
                        continue;
                    }
                    if (bug.sees(ant)) {
                        bug.seesAnt(ant);
                    }
                    if (bug.collidesdWith(ant)) {
                        ant.decreaseEngergy(10);
                        if (ant.getEngery() <= 0) {
                            ant.destroy();
                        }
                    }

                    if (bug.collidesdWith(this.anthill)) {
                        bug.destroy();
                    }
                }

                if (bug.sees(this.anthill)) {
                    bug.seesAnthill();
                }

                bug.live(this.turn);
            }

            this.turn++;
        }

        window.requestAnimationFrame(() => {
            this.run();
        });
    }
}

var game = new Game();
game.start();
