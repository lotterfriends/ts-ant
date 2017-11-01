import { Node } from "./node";
import { BoardPosition } from "./boardPosition";
import { Board } from "./board";

export class DeadObject extends Node {

    private position: BoardPosition;

    constructor(position: BoardPosition, radius: number) {
        super('div', 'dead-object');
        if (position.x < 0) {
            position.x = 0;
        }
        if (position.x > Board.WIDTH) {
            position.x = Board.WIDTH;
        }
        if (position.y < 0) {
            position.y = 0;
        }
        if (position.y > Board.HEIGHT) {
            position.y = Board.HEIGHT;
        }
        this.position = position;
        this.node.style.width = radius * 2 + 'px';
        this.node.style.height = radius * 2 + 'px';
        this.node.style.transform = 'translate(' + this.position.x + 'px, ' + this.position.y + 'px)';
        // 10x20

    }

}