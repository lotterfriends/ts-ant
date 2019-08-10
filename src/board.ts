import { Node } from "./node";
import { BoardPosition } from "./boardPosition";

export class Board extends Node {

    public static WIDTH: number = 500;
    public static HEIGHT: number = 500;

    constructor() {
        super('div', 'board');
        this.bootstrap();
    }

    private bootstrap(): void {
        this.addCls('center');
        this.node.style.width = Board.WIDTH + 'px';
        this.node.style.height = Board.HEIGHT + 'px';
    }

    public static getCords(position: BoardPosition, radius: number) {
        var cords = {
            x: 0,
            y: 0
        };
        var halfBoardWidth = Board.WIDTH / 2;
        var halfBoardHeight = Board.HEIGHT / 2;
        if (position.x < halfBoardWidth * -1) {
            position.x = halfBoardWidth * -1;
        }
        if (position.x > halfBoardWidth) {
            position.x = halfBoardWidth;
        }
        if (position.y < halfBoardHeight * -1) {
            position.y = halfBoardHeight * -1;
        }
        if (position.y > halfBoardHeight) {
            position.y = halfBoardHeight;
        }
        cords.x = (halfBoardWidth + position.x) - radius;
        cords.y = (halfBoardWidth + position.y) - radius;
        return cords;
    }

    public static atTheEdge(position: BoardPosition): boolean {
        var halfBoardWidth = Board.WIDTH / 2;
        var halfBoardHeight = Board.HEIGHT / 2;
        return position.x === halfBoardWidth * -1 || position.x === halfBoardWidth ||
            position.y === halfBoardHeight * -1 || position.y === halfBoardHeight;
    }

    public static randomNegative(padding: number = 0): number {
        return 0 - this.randomPositive(padding);
    }

    public static randomPositive(padding: number = 0): number {
        return Math.floor(Math.random() * (Board.WIDTH / 2 - padding)) + 0;
    }

    public static randomPosition(padding: number = 0): BoardPosition {
        return {
            x: ((Math.random() * 1) > .5) ? Board.randomPositive(padding) : Board.randomNegative(padding),
            y: ((Math.random() * 1) > .5) ? Board.randomPositive(padding) : Board.randomNegative(padding),
        }
    }

    public static getDistanceBetweenPositions(object1: BoardPosition, object2: BoardPosition): number {
        var a = object1.x - object2.x
        var b = object1.y - object2.y
        return Math.sqrt(a * a + b * b);
    }

    public static getRandomAngle(): number {
        return Math.floor(Math.random() * 360);
    }

}