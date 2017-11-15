import { LivingObject } from "./livingObject";
import { BoardObject } from "./boardObject";
import { BoardPosition } from "./boardPosition";
import { Sugar } from "./sugar";
import { Anthill } from "./anthill";

export abstract class Ant extends LivingObject {

    public static WIDTH: number = 10;
    public static HEIGHT: number = 10;
    public static ENERGY: number = 500;
    public static RANGE: number = 5000;

    public static TURN_AROUND_SPEED: number = 5;

    protected speed: number = 5;
    private direction: number;
    private round: number;
    private currentRange: number = Ant.RANGE;
    private restDistance: number = 0;
    private cloud: number = 0;
    protected currentEnergy: number = Ant.ENERGY;
    private target: BoardObject;
    private turn: number = 0;
    private tired: boolean = false;
    private currentLoad: BoardObject;

    constructor(angle?: number) {
        super({ x: 0, y: 0 }, 5, 20, angle);
        this.addCls('ant');
    }

    private setSpeed() {
        if (!this.currentLoad) {
            this.speed = 1;
        }
        if (this.currentLoad instanceof Sugar) {
            this.speed = 0.5;
        }
    }

    live(turn: number): void {

        if (this.currentEnergy < Ant.ENERGY) {
            this.currentEnergy++;
        }

        if (this.currentEnergy <= 0) {
            this.destroy();
        }

        this.turn++;
        this.tired = this.currentRange <= Ant.RANGE / 3 * 2
        if (this.tired) {
            this.getTired();
            if (!this.getNode().classList.contains('tired')) {
                this.getNode().classList.add('tired');
            }
        } else {
            this.getNode().classList.remove('tired');
        }

        this.setSpeed();

        if (this.currentRange > 0) {
            this.go();
        }

    }

    rest() {
        this.currentRange = Ant.RANGE;
    };

    go() {
        super.go();
        this.currentRange -= this.speed;
    }

    isTired(): boolean {
        return this.tired;
    }

    goToAnthill() {
        this.goToPosition(Anthill.POSITION);
    }

    drop() {
        if (this.currentLoad) {
            // console.log(this.position, Anthill.POSITION, this.position == Anthill.POSITION);
            // if (this.position == Anthill.POSITION) {
            //     this.currentLoad.destroy();
            // }
            this.currentLoad = undefined;
        }
    }

    takeObject(boardObject: BoardObject) {
        if (!boardObject.collidesdWith(this)) {
            return;
        }
        if (this.currentLoad) {
            this.drop();
        }
        if (boardObject instanceof Sugar) {
            this.currentLoad = (boardObject as Sugar).reduce(this);
            // this.addItem(this.currentLoad.getNode());
        }
    }

    public getLoad(): BoardObject {
        return this.currentLoad;
    }

    abstract getTired(): void;
    abstract seesSugar(suger: Sugar): void;
    abstract reachSugar(suger: Sugar): void;
    abstract reachAnthill(): void;

}
