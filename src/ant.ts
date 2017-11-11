import { LivingObject } from "./livingObject";
import { BoardObject } from "./boardObject";
import { BoardPosition } from "./boardPosition";

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

    constructor(angle?: number) {
        super({ x: 0, y: 0 }, 5, 20, angle);
        this.addCls('ant');
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
        }

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
        this.goToPosition({ x: 0, y: 0 });
    }

    abstract getTired(): void;

}