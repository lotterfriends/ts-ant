import { Node } from "./node";
import { BoardPosition } from "./boardPosition";
import { Board } from "./board";

export class BoardObject extends Node {

    protected position: BoardPosition;
    protected viewRadius: number;
    protected radius: number;
    protected angle: number;

    constructor(position?: BoardPosition, radius?: number, viewRadius?: number, angle?: number) {
        super('div', 'board-object');
        this.radius = radius;
        this.setSize();
        if (typeof viewRadius === 'number') {
            this.viewRadius = viewRadius;
        }
        if (position) {
            if (typeof angle === 'number') {
                this.setPositionAndAngleOnBoard(position, angle);
            } else {
                this.setPositionOnBoard(position);
            }
        }
        if (typeof viewRadius === 'number') {
            let viewRadiusObj: Node = new Node('span', 'viewRadius');
            viewRadiusObj.addCls('center');
            viewRadiusObj.getNode().style.width = viewRadius * 2 + 'px';
            viewRadiusObj.getNode().style.height = viewRadius * 2 + 'px';
            this.addItem(viewRadiusObj.getNode());
        }
    }

    public setSize() {
        if (typeof this.radius === 'number') {
            this.node.style.width = this.radius * 2 + 'px';
            this.node.style.height = this.radius * 2 + 'px';
        }
    }

    public collidesdWith(otherBoardObject: BoardObject): boolean {
        return BoardObject.collision(this.position, this.getSize(), otherBoardObject.position, otherBoardObject.getSize());
    }

    public sees(otherBoardObject: BoardObject): boolean {
        return BoardObject.collision(this.position, this.viewRadius, otherBoardObject.position, otherBoardObject.getSize());
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

    public static collision(positionA: BoardPosition, sizeA: number, positionB: BoardPosition, sizeB: number): boolean {
        var rect1 = {
            x: positionA.x,
            y: positionA.y,
            width: sizeA,
            height: sizeA
        };

        var rect2 = {
            x: positionB.x,
            y: positionB.y,
            width: sizeB,
            height: sizeB
        };

        return rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y;
    }
}