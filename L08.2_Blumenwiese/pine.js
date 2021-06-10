"use strict";
var L08_Blumenwiese;
(function (L08_Blumenwiese) {
    class Pine {
        constructor(_min, _max, _minSize, _maxSize) {
            this.min = _min;
            this.max = _max;
            this.minSize = _minSize;
            this.maxSize = _maxSize;
        }
        draw(_crc2, _horizon) {
            let stepMin = 300;
            let stepMax = 100;
            let x = 0;
            do {
                let y = -this.min - Math.random() * (this.max - this.min);
                _crc2.save();
                _crc2.translate(x, y + (_horizon + 15));
                let yTree1 = -30;
                let yTree2 = -100;
                let treeColor = ["#154f31"];
                let treeSize = this.minSize + Math.random() * (this.maxSize - this.minSize);
                _crc2.scale(treeSize, treeSize);
                _crc2.fillStyle = "#544026";
                _crc2.fillRect(0, 0, 22, -40);
                for (let z = 0; z < 4; z++) {
                    _crc2.beginPath();
                    _crc2.moveTo(-80, yTree1);
                    _crc2.lineTo(92, yTree1);
                    _crc2.lineTo(5, yTree2);
                    _crc2.closePath();
                    _crc2.fillStyle = treeColor[z];
                    _crc2.fill();
                    yTree1 += -40;
                    yTree2 += -40;
                }
                x += stepMin + Math.random() * (stepMax - stepMin);
                _crc2.restore();
            } while (x < _crc2.canvas.width);
        }
    }
    L08_Blumenwiese.Pine = Pine;
})(L08_Blumenwiese || (L08_Blumenwiese = {}));
//# sourceMappingURL=pine.js.map