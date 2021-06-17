"use strict";
var L08_Blumenwiese;
(function (L08_Blumenwiese) {
    class Vector {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x = this.x * _factor;
            this.y = this.y * _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        fly(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    L08_Blumenwiese.Vector = Vector;
})(L08_Blumenwiese || (L08_Blumenwiese = {}));
//# sourceMappingURL=vector.js.map