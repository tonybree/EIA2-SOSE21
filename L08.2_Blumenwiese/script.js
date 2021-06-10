"use strict";
var L08_Blumenwiese;
(function (L08_Blumenwiese) {
    window.addEventListener("load", handleLoad);
    L08_Blumenwiese.golden = 0.62;
    L08_Blumenwiese.bees = [];
    L08_Blumenwiese.flowers = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L08_Blumenwiese.crc2 = canvas.getContext("2d");
        let horizon = L08_Blumenwiese.crc2.canvas.height * L08_Blumenwiese.golden;
        drawBackground();
        let sun = new L08_Blumenwiese.Sun(90, 80);
        sun.draw(L08_Blumenwiese.crc2);
        L08_Blumenwiese.crc2.fillStyle = "HSL(105, 70%, 30%)";
        L08_Blumenwiese.crc2.fillRect(0, 400, L08_Blumenwiese.crc2.canvas.width, 200);
        let mountain1 = new L08_Blumenwiese.Mountain(0, 400, 100, 400, "grey", "lightgrey");
        mountain1.draw(L08_Blumenwiese.crc2);
        let mountain2 = new L08_Blumenwiese.Mountain(0, 400, 100, 300, "grey", "grey");
        mountain2.draw(L08_Blumenwiese.crc2);
        let pine1 = new L08_Blumenwiese.Pine(-30, -50, .6, .9);
        pine1.draw(L08_Blumenwiese.crc2, horizon);
        let pine2 = new L08_Blumenwiese.Pine(-50, -90, .5, .7);
        pine2.draw(L08_Blumenwiese.crc2, horizon);
        drawFlower();
        let bee = new L08_Blumenwiese.Bee(100, 100, 0.1, 0.1);
        bee.draw(L08_Blumenwiese.crc2);
        L08_Blumenwiese.bees.push(bee);
        L08_Blumenwiese.background = L08_Blumenwiese.crc2.getImageData(0, 0, L08_Blumenwiese.crc2.canvas.width, L08_Blumenwiese.crc2.canvas.height);
        window.setInterval(update, 20);
    }
    function update() {
        console.log("update");
        L08_Blumenwiese.crc2.clearRect(0, 0, L08_Blumenwiese.crc2.canvas.width, L08_Blumenwiese.crc2.canvas.height);
        L08_Blumenwiese.crc2.putImageData(L08_Blumenwiese.background, 0, 0);
        L08_Blumenwiese.bees.forEach(bee => {
            bee.move(L08_Blumenwiese.crc2, 1 / 50);
            bee.draw(L08_Blumenwiese.crc2);
        });
        /*for (let bee in bees) {
            bee.move(crc2, 1 / 50);
            bee.draw(crc2);
        }*/
        for (let flower of L08_Blumenwiese.flowers) {
            flower.draw(L08_Blumenwiese.crc2);
        }
    }
    function drawBackground() {
        let gradient = L08_Blumenwiese.crc2.createLinearGradient(0, 0, 0, L08_Blumenwiese.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L08_Blumenwiese.golden, "white");
        gradient.addColorStop(0.6, "darkorange");
        L08_Blumenwiese.crc2.fillStyle = gradient;
        L08_Blumenwiese.crc2.fillRect(0, 0, L08_Blumenwiese.crc2.canvas.width, L08_Blumenwiese.crc2.canvas.height);
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
})(L08_Blumenwiese || (L08_Blumenwiese = {}));
//# sourceMappingURL=script.js.map