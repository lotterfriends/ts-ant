import { LivingObject } from "./livingObject";
import { BoardObject } from "./boardObject";
import { BoardPosition } from "./boardPosition";

export class Ant extends LivingObject {

    public static WIDTH: number = 10;
    public static HEIGHT: number = 10;
    public static ENERGY: number = 500;
    public static RANGE: number = 5000; x
    public static TURN_AROUND_SPEED: number = 5;

    private angle: number;
    private direction: number;
    private round: number;
    private currentRange: number = Ant.RANGE;
    private restDistance: number = 0;
    private cloud: number = 0;
    private currentEnergy: number = Ant.ENERGY;
    private target: BoardObject;
    private turn: number = 0;

    constructor(position: BoardPosition, radius: number) {
        super(position, radius);
    }

    live(turn: number): void {

        if (this.currentEnergy < Ant.ENERGY) {
            this.currentEnergy++;
        }

        if (this.currentEnergy <= 0) {
            this.destroy();
        }

        if (this.turn != turn) {
            console.log('something strange');
        }
        this.turn++;

        // if (this.position.x > Board.WIDTH / 2)

    }


}