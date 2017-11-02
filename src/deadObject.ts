import { BoardObject } from "./boardObject";
import { BoardPosition } from "./boardPosition";
import { Board } from "./board";

export class DeadObject extends BoardObject {

    constructor(position: BoardPosition, radius: number) {
        super(position, radius);
        this.addCls('dead-object');
    }

}