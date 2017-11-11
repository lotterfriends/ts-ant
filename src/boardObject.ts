import { Node } from "./node";
import { BoardPosition } from "./boardPosition";
import { Board } from "./board";

export class BoardObject extends Node {

    protected position: BoardPosition;
    protected viewRadius: number;
    protected radius: number;
    protected angle: number;

    constructor(position: BoardPosition, radius: number, viewRadius?: number, angle?: number) {
        super('div', 'board-object');
        this.node.style.width = radius * 2 + 'px';
        this.node.style.height = radius * 2 + 'px';
        this.radius = radius;
        if (viewRadius) {
            this.viewRadius = viewRadius;
        }
        if (angle) {
            this.setPositionAndAngleOnBoard(position, angle);
        } else {
            this.setPositionOnBoard(position);
        }
    }

    public collidesdWith(otherBoardObject: BoardObject): boolean {
        var rect1 = {
            x: this.position.x,
            y: this.position.y,
            width: this.getSize(),
            height: this.getSize()
        };

        var rect2 = {
            x: otherBoardObject.position.x,
            y: otherBoardObject.position.y,
            width: otherBoardObject.getSize(),
            height: otherBoardObject.getSize()
        };

        return rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y;
    }

    public setPositionAndAngleOnBoard(position: BoardPosition, angle: number) {
        this.angle = angle;
        this.position = position;
        var cords = Board.getCords(this.position, this.radius);
        this.getNode().style.transform = ['translate(' + cords.x + 'px, ' + cords.y + 'px)', 'rotate(' + this.angle + 'deg)'].join(' ');
    }

    public setPositionOnBoard(position: BoardPosition) {
        this.position = position;
        var cords = Board.getCords(this.position, this.radius);
        var transform = this.getNode().style.transform;
        var rotateMatches = transform.match(/(rotate\(.*?\))/g);
        if (transform && rotateMatches) {
            this.getNode().style.transform = ['translate(' + cords.x + 'px, ' + cords.y + 'px)', rotateMatches].join(' ');
        } else {
            this.getNode().style.transform = 'translate(' + cords.x + 'px, ' + cords.y + 'px)';
        }
    }

    public rotate(angle: number) {
        this.angle = angle;
        var transform = this.getNode().style.transform;
        var translateMatches = transform.match(/(translate\(.*?\))/g);
        if (transform && translateMatches) {
            this.getNode().style.transform = [translateMatches[0], 'rotate(' + this.angle + 'deg)'].join(' ');
        } else {
            this.getNode().style.transform = 'rotate(' + angle + 'deg)';
        }
    }

    public getPosition(): BoardPosition {
        return this.position;
    }

    public getRadius(): number {
        return this.radius;
    }

    public getViewRadius(): number {
        return this.viewRadius;
    }

    public getSize(): number {
        return this.radius * 2;
    }


}