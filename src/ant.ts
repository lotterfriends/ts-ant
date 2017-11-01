import { Node } from "./node";


export class Ant extends Node {

    public static WIDTH: number = 10;
    public static HEIGHT: number = 10;

    constructor() {
        super('div', 'game');
        this.addCls('center');
    }

    protected go(): void {
        // this.node.style.transform = 'translate(' + this.left + 'px, ' + this.top + 'px)';
    }

}