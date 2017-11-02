import { DeadObject } from "./deadObject";
import { BoardPosition } from "./boardPosition";

export class Sugar extends DeadObject {

    private amount: number = 20;

    constructor(position: BoardPosition) {
        super(position, 10);
        this.addCls('sugar');
    }

    public reduce(): void {
        this.amount--;
    }

    public getAmount(): number {
        return this.amount;
    }

}