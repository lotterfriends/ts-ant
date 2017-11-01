import { Node } from "./node";
import { Board } from "./board";
import { Anthill } from "./anthill";
import { Sugar } from "./sugar";

class Game extends Node {

    private board: Board = new Board();
    private anthill: Anthill = new Anthill();
    private sugar: Array<Sugar>;

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
        this.board.addItem(new Sugar({ x: 40, y: 350 }).getNode());
        this.board.addItem(new Sugar({ x: 100, y: 30 }).getNode());
        this.board.addItem(new Sugar({ x: 488, y: 45 }).getNode());
        this.board.addItem(new Sugar({ x: 330, y: 480 }).getNode());
        document.body.appendChild(this.getNode());
    }

    /**
     * main loop
     */
    private run(): void {
        window.requestAnimationFrame(() => {
            this.run();
        });
    }
}

var game = new Game();
game.start();