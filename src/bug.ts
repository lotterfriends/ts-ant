import { LivingObject } from './livingObject';
import { Board } from './board';

export class Bug extends LivingObject {
    protected speed: number = .25;

    constructor() {
        super(Board.randomPosition(20), 10, 20, Board.getRandomAngle());
        this.addCls('bug');
    }

    live(turn: number) {

        if (Math.random() * 1000 > 990) {
            this.rotate(Board.getRandomAngle());
        }

        this.go();
    }
}