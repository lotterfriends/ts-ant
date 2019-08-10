import { BoardObject } from "./boardObject";
import { BoardPosition } from "./boardPosition";

export class DeadObject extends BoardObject {

    constructor(position: BoardPosition, radius: number) {
        super(position, radius);
        this.addCls('dead-object');
    }

}