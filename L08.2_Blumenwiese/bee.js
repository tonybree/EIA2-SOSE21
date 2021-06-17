"use strict";
var L08_Blumenwiese;
(function (L08_Blumenwiese) {
    class Bee extends L08_Blumenwiese.Moveables {
        constructor(_position, _velocity) {
            super(_position, new L08_Blumenwiese.Vector(0, 0));
            this.velocity.fly(100, 200);
        }
        draw() {
            L08_Blumenwiese.crc2.save();
            L08_Blumenwiese.crc2.translate(this.position.x, this.position.y);
            L08_Blumenwiese.crc2.beginPath();
            L08_Blumenwiese.crc2.fillStyle = "yellow";
            L08_Blumenwiese.crc2.ellipse(this.position.x, this.position.y, 15, 20, Math.PI / 2, 0, 2 * Math.PI);
            L08_Blumenwiese.crc2.arc(this.position.x + 20, this.position.y - 5, 10, 0, 2 * Math.PI);
            L08_Blumenwiese.crc2.fill();
            L08_Blumenwiese.crc2.closePath();
            //streifen
            L08_Blumenwiese.crc2.beginPath();
            L08_Blumenwiese.crc2.fillStyle = "black";
            L08_Blumenwiese.crc2.ellipse(this.position.x, this.position.y, 15, 10, Math.PI / 2, 0, 1 * Math.PI);
            L08_Blumenwiese.crc2.fill();
            L08_Blumenwiese.crc2.closePath();
            //Flügel Biene
            L08_Blumenwiese.crc2.beginPath();
            L08_Blumenwiese.crc2.fillStyle = "lightBlue";
            L08_Blumenwiese.crc2.ellipse(this.position.x - 10, this.position.y - 20, 8, 20, Math.PI / -5, 0, 2 * Math.PI);
            L08_Blumenwiese.crc2.fill();
            L08_Blumenwiese.crc2.closePath();
            L08_Blumenwiese.crc2.restore();
        }
    }
    L08_Blumenwiese.Bee = Bee;
})(L08_Blumenwiese || (L08_Blumenwiese = {}));
//# sourceMappingURL=bee.js.map