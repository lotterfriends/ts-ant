import { Board } from "./board";
import { DeadObject } from "./deadObject";

export class Anthill extends DeadObject {

    public static WIDTH: number = 20;
    public static HEIGHT: number = 20;
    public static RADIUS: number = 10;

    constructor() {
        super({ x: 0, y: 0 }, Anthill.RADIUS)
        this.addCls('anthill');
    }

    private bootstrap(): void {
    }

}