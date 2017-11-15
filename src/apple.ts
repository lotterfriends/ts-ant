import { DeadObject } from './deadObject';
import { BoardPosition } from './boardPosition';
import { Ant } from './ant';

export class Apple extends DeadObject {
    private carrier: Array<Ant> = [];

    constructor(position: BoardPosition) {
        super(position, 20);
        this.addCls('apple');
    }

    public carry(ant: Ant): void {
        this.carrier.push(ant);
    }

    public stopCarrying(ant: Ant): void {
        this.carrier.splice(this.carrier.indexOf(ant), 1);
    }

    public getCarrier(): Array<Ant> {
        return this.carrier;
    }
}