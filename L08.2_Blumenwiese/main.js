"use strict";
var L08_Blumenwiese;
(function (L08_Blumenwiese) {
    window.addEventListener("load", handleLoad);
    let background;
    L08_Blumenwiese.golden = 0.62;
    L08_Blumenwiese.bees = [];
    L08_Blumenwiese.flowers = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L08_Blumenwiese.crc2 = canvas.getContext("2d");
        L08_Blumenwiese.crc2.fillStyle = "white";
        L08_Blumenwiese.crc2.strokeStyle = "grey";
        L08_Blumenwiese.crc2.fillRect(0, 0, L08_Blumenwiese.crc2.canvas.width, L08_Blumenwiese.crc2.canvas.height);
        L08_Blumenwiese.horizon = L08_Blumenwiese.crc2.canvas.height * L08_Blumenwiese.golden;
        //createBees(10);
        window.setInterval(update, 100);
        drawBackground();
        drawSun(new L08_Blumenwiese.Vector(100, 50));
        let mountain1 = new L08_Blumenwiese.Mountain(0, 400, 100, 400, "grey", "lightgrey");
        mountain1.draw(L08_Blumenwiese.crc2);
        let mountain2 = new L08_Blumenwiese.Mountain(0, 400, 100, 300, "grey", "grey");
        mountain2.draw(L08_Blumenwiese.crc2);
        let pine1 = new L08_Blumenwiese.Pine(-30, -50, .6, .9);
        pine1.draw(L08_Blumenwiese.crc2, L08_Blumenwiese.horizon);
        let pine2 = new L08_Blumenwiese.Pine(-50, -90, .5, .7);
        pine2.draw(L08_Blumenwiese.crc2, L08_Blumenwiese.horizon);
        drawFlower();
        background = L08_Blumenwiese.crc2.getImageData(0, 0, L08_Blumenwiese.crc2.canvas.width, L08_Blumenwiese.crc2.canvas.height);
    }
    function createBees(_nBees) {
        let x = (0);
        let y = (100);
        let position = new L08_Blumenwiese.Vector(x, y);
        let velocity = new L08_Blumenwiese.Vector(x, y);
        for (let i = 0; i < Math.random() * 100; i++) {
            let bee = new L08_Blumenwiese.Bee(position, velocity);
            L08_Blumenwiese.bees.push(bee);
        }
    }
    function update() {
        console.log("x wurde das Bild schon gemalt!");
        L08_Blumenwiese.crc2.fillRect(0, 0, L08_Blumenwiese.crc2.canvas.width, L08_Blumenwiese.crc2.canvas.height);
        L08_Blumenwiese.crc2.putImageData(background, 0, 0);
        /*for (let bee of bees) {
            bee.move(1 / 50);
            bee.draw();
        }*/
    }
    function generateRandomColor() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let color = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
        return color;
    }
    function drawFlower() {
        for (let i = 0; i < 10; i++) {
            let flower = new L08_Blumenwiese.Flower(generateRandomColor());
            L08_Blumenwiese.flowers.push(flower);
        }
    }
    function drawBackground() {
        let gradient = L08_Blumenwiese.crc2.createLinearGradient(0, 0, 0, L08_Blumenwiese.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L08_Blumenwiese.golden, "white");
        gradient.addColorStop(0.6, "darkorange");
        L08_Blumenwiese.crc2.fillStyle = gradient;
        L08_Blumenwiese.crc2.fillRect(0, 0, L08_Blumenwiese.crc2.canvas.width, L08_Blumenwiese.crc2.canvas.height);
        L08_Blumenwiese.crc2.fillStyle = "HSL(105, 70%, 30%)";
        L08_Blumenwiese.crc2.fillRect(0, 400, L08_Blumenwiese.crc2.canvas.width, 200);
    }
    function drawSun(_position) {
        let r1 = 25;
        let r2 = 80;
        let gradient = L08_Blumenwiese.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSL(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L08_Blumenwiese.crc2.save();
        L08_Blumenwiese.crc2.translate(_position.x, _position.y);
        L08_Blumenwiese.crc2.fillStyle = gradient;
        L08_Blumenwiese.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L08_Blumenwiese.crc2.fill();
        L08_Blumenwiese.crc2.restore();
    }
})(L08_Blumenwiese || (L08_Blumenwiese = {}));
//# sourceMappingURL=main.js.map