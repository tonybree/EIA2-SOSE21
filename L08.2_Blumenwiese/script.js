"use strict";
var L08_Blumenwiese;
(function (L08_Blumenwiese) {
    class Mountain {
        constructor(_x, _y, _min, _max, _colorLow, _colorHigh) {
            this.position = { x: _x, y: _y };
            this.min = _min;
            this.max = _max;
            this.colorLow = _colorLow;
            this.colorHigh = _colorHigh;
        }
        draw(_crc2) {
            let stepMin = 30;
            let stepMax = 80;
            let x = 0;
            _crc2.save();
            _crc2.translate(this.position.x, this.position.y);
            _crc2.beginPath();
            _crc2.moveTo(0, 0);
            _crc2.lineTo(0, -this.max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -this.min - Math.random() * (this.max - this.min);
                _crc2.lineTo(x, y);
            } while (x < _crc2.canvas.width);
            _crc2.lineTo(x, 0);
            _crc2.closePath();
            let gradient = _crc2.createLinearGradient(0, 0, 0, -this.max);
            gradient.addColorStop(0, this.colorLow);
            gradient.addColorStop(1, this.colorHigh);
            _crc2.fillStyle = gradient;
            _crc2.fill();
            _crc2.restore();
        }
    }
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
    class Flower {
        constructor(_centerX, _centerY, _radius, _numPetals, _color) {
            this.centerX = _centerX;
            this.centerY = _centerY;
            this.radius = _radius;
            this.numPetals = _numPetals;
            this.color = _color;
        }
        draw(_crc2) {
            _crc2.beginPath();
            _crc2.moveTo(this.centerX, this.centerY);
            _crc2.lineTo(this.centerX, this.centerY + 80);
            _crc2.strokeStyle = "darkgreen";
            _crc2.lineWidth = 5;
            _crc2.stroke();
            _crc2.closePath();
            _crc2.beginPath();
            for (let i = 0; i < this.numPetals; i++) {
                let theta1 = ((Math.PI * 2) / this.numPetals) * (i + 1);
                let theta2 = ((Math.PI * 2) / this.numPetals) * (i);
                let x1 = (this.radius * Math.sin(theta1)) + this.centerX;
                let y1 = (this.radius * Math.cos(theta1)) + this.centerY;
                let x2 = (this.radius * Math.sin(theta2)) + this.centerX;
                let y2 = (this.radius * Math.cos(theta2)) + this.centerY;
                _crc2.moveTo(this.centerX, this.centerY);
                _crc2.bezierCurveTo(x1, y1, x2, y2, this.centerX, this.centerY);
            }
            _crc2.closePath();
            _crc2.fillStyle = this.color;
            _crc2.fill();
            _crc2.beginPath();
            _crc2.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
            _crc2.fillStyle = "#FFFF66";
            _crc2.fill();
            _crc2.strokeStyle = "white";
            _crc2.lineWidth = 1;
            _crc2.stroke();
        }
    }
    class Background {
        draw(_crc2, _golden) {
            let gradient = _crc2.createLinearGradient(0, 0, 0, _crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(_golden, "white");
            gradient.addColorStop(0.6, "darkorange");
            _crc2.fillStyle = gradient;
            _crc2.fillRect(0, 0, _crc2.canvas.width, _crc2.canvas.height);
        }
    }
    class Sun {
        constructor(_position) {
            this.position = _position;
        }
        draw(_crc2) {
            let r1 = 25;
            let r2 = 80;
            let gradient = _crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSL(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            _crc2.save();
            _crc2.translate(this.position.x, this.position.y);
            _crc2.fillStyle = gradient;
            _crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            _crc2.fill();
            _crc2.restore();
        }
    }
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        let background = new Background();
        background.draw(crc2, golden);
        let sun = new Sun({ x: 90, y: 80 });
        sun.draw(crc2);
        crc2.fillStyle = "HSL(105, 70%, 30%)";
        crc2.fillRect(0, 400, crc2.canvas.width, 200);
        let mountain1 = new Mountain(0, 400, 100, 400, "grey", "lightgrey");
        mountain1.draw(crc2);
        let mountain2 = new Mountain(0, 400, 100, 300, "grey", "grey");
        mountain2.draw(crc2);
        let pine1 = new Pine(-30, -50, .6, .9);
        pine1.draw(crc2, horizon);
        let pine2 = new Pine(-50, -90, .5, .7);
        pine2.draw(crc2, horizon);
        for (let i = 0; i < 10; i++) {
            let centerX = Math.random() * canvas.width + 0;
            let centerY = 560;
            let radius = 70;
            let color = generateRandomColor();
            let flower = new Flower(centerX, centerY, radius, 4, color);
            flower.draw(crc2);
        }
    }
    function generateRandomColor() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let color = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
        return color;
    }
})(L08_Blumenwiese || (L08_Blumenwiese = {}));
//# sourceMappingURL=script.js.map