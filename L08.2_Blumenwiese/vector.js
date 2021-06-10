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
    }
    L08_Blumenwiese.Vector = Vector;
})(L08_Blumenwiese || (L08_Blumenwiese = {}));
//# sourceMappingURL=vector.js.map