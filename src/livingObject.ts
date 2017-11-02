import { BoardObject } from "./boardObject";
import { BoardPosition } from "./boardPosition";
import { Board } from "./board";

export abstract class LivingObject extends BoardObject {

    constructor(position: BoardPosition, radius: number) {
        super(position, radius);
        this.addCls('living-object');
    }

    abstract live(turn: number): void;

}