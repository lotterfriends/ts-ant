import { Ant } from "./ant";
import { BoardPosition } from "./boardPosition";

export class MyAnt extends Ant {

    constructor(position: BoardPosition, radius: number) {
        super(position, radius);
    }

}