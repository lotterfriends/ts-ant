import { LivingObject } from './livingObject';
import { Board } from './board';
import { Ant } from './ant';

export class Bug extends LivingObject {
    protected speed: number = .45;

    constructor() {
        super(Board.randomPosition(20), 10, 30, Board.getRandomAngle());
        this.addCls('bug');
    }

    live(turn: number) {

        if (Math.random() * 1000 > 999) {
            this.rotate(Board.getRandomAngle());
        }

        this.go();
    }


    public seesAnthill() {
        this.turnAround();
    }

    public seesAnt(ant: Ant): void {
        this.goToTarget(ant);
    }


}
