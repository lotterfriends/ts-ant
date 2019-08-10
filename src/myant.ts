import { Ant } from "./ant";
import { Sugar } from "./sugar";
import { Apple } from "./apple";
import { Board } from "./board";
import { Bug } from "./bug";

export class MyAnt extends Ant {

    oldBugDistance: number;

    constructor(angle: number) {
        super(angle);
    }

    getTired() {
        this.goToAnthill();
    }

    seesSugar(sugar: Sugar) {
        console.log(sugar, this);
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

    private toDegrees(radians): number {
        return radians * 180 / Math.PI;
    };

    seesBug(bug: Bug) {

        let currentDistance = Board.getDistanceBetweenPositions(this.position, bug.getPosition());
        if (this.oldBugDistance > currentDistance) {
            let angle = this.toDegrees(Math.atan2(bug.getPosition().y - this.position.y, bug.getPosition().x - this.position.x));
            this.rotate(angle);
            this.getPosition()
        }
        this.oldBugDistance = currentDistance;
        if (this.getLoad()) {
            this.drop();
        }

    }

    reachBug(bug: Bug) {
        this.turnAround();
    }

}
