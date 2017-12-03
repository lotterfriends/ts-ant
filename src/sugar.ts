import { DeadObject } from "./deadObject";
import { BoardPosition } from "./boardPosition";
import { Ant } from "./ant";

export class Sugar extends DeadObject {

    amount: number;
    ants: Array<Ant> = [];


    constructor(position: BoardPosition, radius: number = 10, amount: number = 20, ant?: Ant) {
        super(position, radius);
        this.addCls('sugar');
        this.amount = amount;
        if (ant) {
            this.ants.push(ant);
        }
    }

    public reduce(ant: Ant): Sugar {
        if (this.amount === 1 && this.ants.length) {
            return;
        }
        this.amount--;
        if (this.radius <= 1 && !this.amount) {
            this.radius = 0;
        } else {
            this.radius -= 0.5;
        }
        if (!this.amount) {
            this.destroy();
        } else {
            this.setSize();
        }
        return new Sugar(this.position, 1, 1, ant);
    }

    public stopCarrying(ant?: Ant): void {
        if (ant) {
            this.ants.splice(this.ants.indexOf(ant));
        }
    }

    public getAmount(): number {
        return this.amount;
    }

    public destroy(ant?: Ant): void {
        if (ant) {
            this.ants.splice(this.ants.indexOf(ant));
        }
        this.amount = 0;
        super.destroy();
    }

}