namespace L08_Blumenwiese {

    export class Pine {
        min: number;
        max: number;
        minSize: number;
        maxSize: number;

        constructor (_min: number, _max: number, _minSize: number, _maxSize: number) {
            this.min = _min;
            this.max = _max;
            this.minSize = _minSize;
            this.maxSize = _maxSize;
        }
        draw (_crc2: CanvasRenderingContext2D, _horizon: number): void {
            let stepMin: number = 300;
            let stepMax: number = 100;
            let x: number = 0;


            do {
                let y: number = -this.min - Math.random() * (this.max - this.min);
                _crc2.save();
                _crc2.translate(x, y + (_horizon + 15));

                let yTree1: number = -30;
                let yTree2: number = -100;
                let treeColor: string[] = ["#154f31"];
                let treeSize: number = this.minSize + Math.random() * (this.maxSize - this.minSize);

                _crc2.scale(treeSize, treeSize);
                _crc2.fillStyle = "#544026";
                _crc2.fillRect(0, 0, 22, -40);

                for (let z: number = 0; z < 4; z++) {
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
}