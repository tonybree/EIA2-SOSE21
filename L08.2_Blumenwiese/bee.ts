namespace L08_Blumenwiese {

    export class Bee extends Moveables {

        constructor (_position: Vector, _velocity: Vector) {
            super (_position, new Vector (0, 0));
            this.velocity.fly(100, 200);

        }
        draw (): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.fillStyle = "yellow";
            crc2.ellipse(this.position.x, this.position.y, 15, 20, Math.PI / 2, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 20, this.position.y - 5, 10, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //streifen
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.ellipse(this.position.x, this.position.y, 15, 10, Math.PI / 2, 0, 1 * Math.PI);
            crc2.fill();
            crc2.closePath();
            //Flügel Biene
            crc2.beginPath();
            crc2.fillStyle = "lightBlue";
            crc2.ellipse(this.position.x - 10, this.position.y - 20, 8, 20, Math.PI / -5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }
    } 
}