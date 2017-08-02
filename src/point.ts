import LaserLines from './laserlines';
import * as _ from "lodash";

export default class Point {
    x: number;
    y: number;
    velX: number;
    velY: number;
    hue: number;

    constructor(public laserLines: LaserLines) {
        this.x = _.random(0, laserLines.w);
        this.y = _.random(0, laserLines.h);
        this.velX = _.random(1, 3) * (_.random() > 0.5 ? 1 : -1);
        this.velY = _.random(1, 3) * (_.random() > 0.5 ? 1 : -1);
        this.hue = _.random(0, 360);
    }

    draw() {
        this.x += this.velX;
        this.y += this.velY;

        if (this.x < 0) {
            this.x = 0;
            this.velX *= -1;
        }
        if (this.x > this.laserLines.w) {
            this.x = this.laserLines.w;
            this.velX *= -1;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velY *= -1;
        }
        if (this.y > this.laserLines.h) {
            this.y = this.laserLines.h;
            this.velY *= -1;
        }

        // uncomment if you want to see the points
        // this.laserLines.context.fillStyle = `hsl(${this.hue}, 75%, 50%)`;
        // this.laserLines.context.beginPath();
        // this.laserLines.context.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        // this.laserLines.context.closePath();
        // this.laserLines.context.fill();
    }
}