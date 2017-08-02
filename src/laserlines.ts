import Point from "./point";

export default class LaserLines {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    w: number;
    h: number;
    pointCount: number = 10;
    distanceThreshold: number = 400;
    points: Point[] = [];

    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.w = this.canvas.width = window.innerWidth;
        this.h = this.canvas.height = window.innerHeight;

        for (var i = 0; i < this.pointCount; i++) {
            this.points.push(new Point(this));
        }

        this.draw();
    }

    draw() {
        this.context.fillStyle = 'hsla(0, 0%, 0%, 0.1)';
        this.context.fillRect(0, 0, this.w, this.h);

        this.points.forEach(point => {
            point.draw();
        });

        this.drawLines();

        requestAnimationFrame(() => this.draw());
    }

    drawLines() {
        this.points.forEach(pointA => {
            this.points.forEach(pointB => {
                this.drawLine(pointA, pointB);
            });
        });
    }

    drawLine(pointA: Point, pointB: Point) {
        if (pointA === pointB) {
            return;
        }

        let distance = this.distance(pointA, pointB);

        if (distance < this.distanceThreshold) {
            let gradient = this.context.createLinearGradient(pointA.x, pointA.y, pointB.x, pointB.y);
            gradient.addColorStop(0, `hsl(${pointA.hue}, 75%, 50%)`);
            gradient.addColorStop(1, `hsl(${pointB.hue}, 75%, 50%)`);


            this.context.beginPath();
            this.context.moveTo(pointA.x, pointA.y);
            this.context.lineTo(pointB.x, pointB.y);
            this.context.strokeStyle = gradient;
            this.context.lineWidth = 4;
            this.context.stroke();
        }
    }

    distance(point1: Point, point2: Point): number {
        let a = point1.x - point2.x;
        let b = point1.y - point2.y;
        let c2 = (a * a) + (b * b);
        return Math.sqrt(c2);
    }
}