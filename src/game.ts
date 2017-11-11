import { Node } from "./node";
import { Board } from "./board";
import { Anthill } from "./anthill";
import { Sugar } from "./sugar";
import { Ant } from "./ant";
import { MyAnt } from "./myant";

class Game extends Node {

    private currentAngle: number = 300.2;
    private board: Board = new Board();
    private anthill: Anthill = new Anthill();
    private sugar: Array<Sugar> = [];
    private ants: Array<Ant> = [];
    private spawnDelay: number = 6;
    private maxAnts: number = 100;
    private turn: number = 0;

    constructor() {
        super('div', 'game');
        this.bootstrap();
    }

    public start(): void {
        this.run();
    }

    private bootstrap(): void {
        this.addItem(this.board.getNode());
        this.board.addItem(this.anthill.getNode());
        this.board.addItem(new Sugar({ x: -200, y: 100 }).getNode());
        this.board.addItem(new Sugar({ x: 100, y: 30 }).getNode());
        this.board.addItem(new Sugar({ x: 90, y: -150 }).getNode());
        this.board.addItem(new Sugar({ x: -190, y: -190 }).getNode());
        // var angle: number = 300.2;
        // while (this.ants.length < this.maxAnts) {
        //     var ant = new MyAnt(angle);
        //     this.ants.push(ant);
        //     this.board.addItem(ant.getNode());
        //     angle -= 7.2;
        //     if (angle < 0) {
        //         angle += 360;
        //     }
        // }
        document.body.appendChild(this.getNode());
    }

    /**
     * main loop
     */
    private run(): void {

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
            ant.live(this.turn);
            if (ant.collidesdWith(this.anthill)) {
                ant.rest();
            }
        }

        this.turn++;

        window.requestAnimationFrame(() => {
            this.run();
        });
    }
}

var game = new Game();
game.start();