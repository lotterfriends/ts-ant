import { Ant } from "./ant";
import { BoardPosition } from "./boardPosition";
import { Sugar } from "./sugar";

export class MyAnt extends Ant {

    constructor(angle: number) {
        super(angle);
    }

    getTired() {
        this.goToAnthill();
    }

    seesSugar(sugar: Sugar) {
        if (!this.getLoad() && sugar.getAmount() > 0 && sugar.ants.length < 1) {
            this.goToTarget(sugar);
        }
    }

    reachSugar(sugar: Sugar) {
        if (!this.getLoad() && sugar.getAmount() > 0 && sugar.ants.length < 1) {
            this.takeObject(sugar);
            this.goToAnthill();
        }
    }

    reachAnthill() {
        if (this.getLoad() instanceof Sugar) {
            this.turnAround();
        }
        this.drop();

    }

}
