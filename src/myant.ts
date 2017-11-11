import { Ant } from "./ant";
import { BoardPosition } from "./boardPosition";

export class MyAnt extends Ant {

    constructor(angle: number) {
        super(angle);
    }

    getTired() {
        this.goToAnthill();
    }

}