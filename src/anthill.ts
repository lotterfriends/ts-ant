import { Node } from "./node";

export class Anthill extends Node {

    public static WIDTH: number = 20;
    public static HEIGHT: number = 20;

    constructor() {
        super('div', 'anthill');
        this.bootstrap();
    }

    private bootstrap(): void {
        this.addCls('center');
        this.node.style.width = Anthill.WIDTH + 'px';
        this.node.style.height = Anthill.HEIGHT + 'px';
    }

}