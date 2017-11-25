import { Ant } from "./ant";
import { BoardPosition } from "./boardPosition";
import { Sugar } from "./sugar";
import { Apple } from "./apple";
import { Board } from "./board";

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
        if (this.getLoad() instanceof Apple) {
            this.rotate(Board.getRandomAngle());
        }
        this.drop();

    }

    reachApple(apple: Apple) {
        if (!this.getLoad() && apple.getCarrier().length < 5) {
            this.takeObject(apple);
            this.goToAnthill();
        }
    }

    seesApple(apple: Apple) {
        if (!this.getLoad() && apple.getCarrier().length < 5) {
            this.goToTarget(apple);
        }
    }

}
