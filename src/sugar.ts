import { DeadObject } from "./deadObject";
import { BoardPosition } from "./boardPosition";

export class Sugar extends DeadObject {

    constructor(position: BoardPosition) {
        super(position, 10);
        this.addCls('sugar');
    }

}