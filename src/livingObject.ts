import { BoardObject } from "./boardObject";
import { BoardPosition } from "./boardPosition";
import { Board } from "./board";

export abstract class LivingObject extends BoardObject {

    protected position: BoardPosition;
    protected angle: number;
    protected speed: number;

    constructor(position: BoardPosition, radius: number, viewRadius?: number, angle?: number) {
        super(position, radius, viewRadius, angle);
        this.position = position;
        this.angle = angle;
        this.addCls('living-object');
    }

    go() {
        let tmpAngle = this.angle;
        if (Board.atTheEdge(this.position)) {
            tmpAngle = tmpAngle - 90;
        }
        let arc: number = Math.PI * tmpAngle / 180.0
        this.position.x = (Math.cos(arc) * this.speed) + this.position.x;
        this.position.y = (Math.sin(arc) * this.speed) + this.position.y;
        this.setPositionAndAngleOnBoard(this.position, tmpAngle);
    }

    protected turnAround(): void {
        this.angle = this.angle - 180;
        this.setPositionAndAngleOnBoard(this.position, this.angle);
    }

    protected goToTarget(boardObject: BoardObject): void {
        this.goToPosition(boardObject.getPosition());
    }

    protected goToPosition(position: BoardPosition): void {
        let newX = this.position.x - position.x;
        let newY = this.position.y - position.y;
        if (newX < 0) {
            newX = newX * -1
        }
        if (newY < 0) {
            newY = newY * -1;
        }
        let distance: number = Math.sqrt(newX * newX + newY * newY);
        let fraction: number = newY / distance;
        let direction: number = Math.asin(fraction) * 180 / Math.PI;

        if (this.getPosition().x < position.x && this.getPosition().y > position.y) {
            direction = 360 - direction;
        }

        if (this.getPosition().x > position.x && this.getPosition().y > position.y) {
            direction += 180;
        }

        if (this.getPosition().x > position.x && this.getPosition().y < position.y) {
            direction = 180 - direction;
        }
        this.rotate(direction);
    }

    abstract live(turn: number): void;

}
