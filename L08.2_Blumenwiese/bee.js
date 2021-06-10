"use strict";
var L08_Blumenwiese;
(function (L08_Blumenwiese) {
    class Bee {
        //coordinates: number[][];
        constructor(_positionX, _positionY, _velocityX, _velocityY /*_coordinates: number[][]*/) {
            this.position = new L08_Blumenwiese.Vector(_positionX, _positionY);
            this.velocity = new L08_Blumenwiese.Vector(_velocityX, _velocityY);
            //this.coordinates = _coordinates;
        }
        draw(_crc2) {
            _crc2.save();
            _crc2.translate(this.position.x, this.position.y);
            _crc2.beginPath();
            _crc2.fillStyle = "yellow";
            _crc2.ellipse(this.position.x, this.position.y, 15, 20, Math.PI / 2, 0, 2 * Math.PI);
            _crc2.arc(this.position.x + 20, this.position.y - 5, 10, 0, 2 * Math.PI);
            _crc2.fill();
            _crc2.closePath();
            //streifen
            _crc2.beginPath();
            _crc2.fillStyle = "black";
            _crc2.ellipse(this.position.x, this.position.y, 15, 10, Math.PI / 2, 0, 1 * Math.PI);
            _crc2.fill();
            _crc2.closePath();
            //Flügel Biene
            _crc2.beginPath();
            _crc2.fillStyle = "lightBlue";
            _crc2.ellipse(this.position.x - 10, this.position.y - 20, 8, 20, Math.PI / -5, 0, 2 * Math.PI);
            _crc2.fill();
            _crc2.closePath();
        }
        move(_crc2, _timeslice) {
            let offset = new L08_Blumenwiese.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x = _crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y = _crc2.canvas.height;
            if (this.position.x > _crc2.canvas.width)
                this.position.x = 0;
            if (this.position.y > _crc2.canvas.height)
                this.position.y = 0;
        }
    }
    L08_Blumenwiese.Bee = Bee;
})(L08_Blumenwiese || (L08_Blumenwiese = {}));
//# sourceMappingURL=bee.js.map