import { Node } from "./node";
import { BoardPosition } from "./boardPosition";
import { Board } from "./board";

export class BoardObject extends Node {

    protected position: BoardPosition;
    protected viewRadius: number;
    protected radius: number;

    constructor(position: BoardPosition, radius?: number, viewRadius?: number) {
        super('div', 'board-object');
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
        this.node.style.transform = 'translate(' + this.position.x + 'px, ' + this.position.y + 'px)';

        if (radius) {
            this.node.style.width = radius * 2 + 'px';
            this.node.style.height = radius * 2 + 'px';
            this.radius = radius;
        }
        if (viewRadius) {
            this.viewRadius = viewRadius;
        }
    }

    public getRadius(): number {
        return this.radius;
    }

    public getViewRadius(): number {
        return this.viewRadius;
    }


}