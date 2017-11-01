import { Node } from "./node";
import { BoardPosition } from "./boardPosition";

export class Board extends Node {

    public static WIDTH: number = 600;
    public static HEIGHT: number = 600;

    constructor() {
        super('div', 'board');
        this.bootstrap();
    }

    private bootstrap(): void {
        this.addCls('center');
        this.node.style.width = Board.WIDTH + 'px';
        this.node.style.height = Board.HEIGHT + 'px';
    }

    public static getCords(position: BoardPosition) {
        if (position.x < 0) {

        }

    }
}