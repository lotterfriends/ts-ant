import { DeadObject } from './deadObject';
import { BoardPosition } from './boardPosition';
import { Ant } from './ant';

export class Apple extends DeadObject {
    private carrier: Array<Ant> = [];
    private delivered: boolean = false;

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

    public setDelivered(delivered: boolean) {
        this.delivered = delivered;
    }

    public isDelivered() {
        return this.delivered;
    }

    public destroy(ant?: Ant): void {
        if (this.carrier.length) {
            this.carrier.splice(this.carrier.indexOf(ant));
        }
        if (!this.carrier.length) {
            super.destroy();
        }
    }
}