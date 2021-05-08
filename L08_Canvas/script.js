"use strict";
var L08_Canvas;
(function (L08_Canvas) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        let colors = ["#d2d2d2", "#bdbdbd", "#a8a8a8", "#787878", "#4b4b4b", "#000000"];
        let pickColor = Math.floor(Math.random() * Math.floor(5));
        for (let index = 0; index < 150; index++) {
            let x = Math.floor(Math.random() * Math.floor(canvas.width));
            let y = Math.floor(Math.random() * Math.floor(canvas.height));
            let x2 = Math.floor(Math.random() * Math.floor(canvas.width));
            let y2 = Math.floor(Math.random() * Math.floor(canvas.height));
            let x3 = Math.floor(Math.random() * Math.floor(canvas.width));
            let y3 = Math.floor(Math.random() * Math.floor(canvas.height));
            crc2.beginPath();
            crc2.arc(x, y, 100, 0, 2 * Math.PI, false);
            crc2.fillStyle = colors[pickColor];
            crc2.strokeStyle = colors[pickColor];
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.lineTo(x2, y2);
            crc2.lineTo(x3, x3);
            crc2.closePath();
            crc2.strokeStyle = "#ffffff";
            crc2.stroke();
        }
    }
})(L08_Canvas || (L08_Canvas = {}));
/*let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
crc2.strokeRect(0, 0, crc2.canvas.width, crc2.canvas.height);
crc2.strokeStyle = "#ffffff";


crc2.beginPath();
crc2.arc(200, 200, 50, 0,  2 * Math.PI);
crc2.closePath();
crc2.strokeStyle = "#ffffff";
crc2.stroke();



/*let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);

gradient.addColorStop(0, "black");
gradient.addColorStop(.5, "red");
gradient.addColorStop(1, "gold");

crc2.fillStyle = gradient;
crc2.fillRect(0, 0, 200, 100);*/
//# sourceMappingURL=script.js.map