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
        // console.log(this, this.amount);
        this.amount--;
        this.radius -= 0.5;
        this.setSize();
        return new Sugar(this.position, 4, 1, ant);
    }

    public getAmount(): number {
        return this.amount;
    }

    public destroy(ant?: Ant): void {
        if (ant) {
            this.ants.splice(this.ants.indexOf(ant));
        }
        super.destroy();
    }

}