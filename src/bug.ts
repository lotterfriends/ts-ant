import { LivingObject } from './livingObject';
import { Board } from './board';

export class Bug extends LivingObject {
    constructor() {
        super(Board.randomPosition(20), 10, 20, Board.getRandomAngle());
        this.addCls('bug');
    }

    live(turn: number) {
        this.go();
    }
}