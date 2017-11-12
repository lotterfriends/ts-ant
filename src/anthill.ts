import { Board } from "./board";
import { DeadObject } from "./deadObject";
import { BoardObject } from "./boardObject";
import { BoardPosition } from "./boardPosition";

export class Anthill extends DeadObject {

    public static WIDTH: number = 20;
    public static HEIGHT: number = 20;
    public static RADIUS: number = 10;
    public static POSITION: BoardPosition = { x: 0, y: 0 };

    constructor() {
        super(Anthill.POSITION, Anthill.RADIUS);
        this.addCls('anthill');
    }

    private bootstrap(): void {
    }

}