"use strict";
var L08_Blumenwiese;
(function (L08_Blumenwiese) {
    class Moveables {
        constructor(_position, _velocity) {
            this.position = new L08_Blumenwiese.Vector(_position.x, _position.y);
            this.velocity = new L08_Blumenwiese.Vector(_position.x, _position.y);
        }
        move(_timeslice) {
            let offset = new L08_Blumenwiese.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x = L08_Blumenwiese.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y = L08_Blumenwiese.crc2.canvas.height;
            if (this.position.x > L08_Blumenwiese.crc2.canvas.width)
                this.position.x -= L08_Blumenwiese.crc2.canvas.width;
            if (this.position.y > L08_Blumenwiese.crc2.canvas.height)
                this.position.y -= L08_Blumenwiese.crc2.canvas.height;
        }
        draw() {
            console.log("I like to move it, move it...");
        }
    }
    L08_Blumenwiese.Moveables = Moveables;
})(L08_Blumenwiese || (L08_Blumenwiese = {}));
//# sourceMappingURL=moveables.js.map