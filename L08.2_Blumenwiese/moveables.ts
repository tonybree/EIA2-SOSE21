namespace L08_Blumenwiese {

    export class Moveables {
        position: Vector;
        velocity: Vector;

        constructor (_position: Vector, _velocity: Vector) {
            this.position = new Vector(_position.x, _position.y);
            this.velocity = new Vector(_position.x, _position.y);
        }

        move(_timeslice: number): void {
            
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
            this.position.x = crc2.canvas.width;

            if (this.position.y < 0)
            this.position.y = crc2.canvas.height;

            if (this.position.x > crc2.canvas.width / golden)
            this.position.x -=  crc2.canvas.width;

            if (this.position.y > crc2.canvas.height / golden)
            this.position.y -= crc2.canvas.width;

        }
        draw(): void {
            console.log("I like to move it, move it...");
        }
    }
}