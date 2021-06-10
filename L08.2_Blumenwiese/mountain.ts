namespace L08_Blumenwiese {

    export class Mountain {
        position: Vector;
        min: number;
        max: number;
        colorLow: string;
        colorHigh: string;

        constructor(_x: number, _y: number, _min: number, _max: number, _colorLow: string, _colorHigh: string) {
            this.position = new Vector (_x, _y);
            this.min = _min;
            this.max = _max;
            this.colorLow = _colorLow;
            this.colorHigh = _colorHigh;
        }

        draw (_crc2: CanvasRenderingContext2D): void {
                let stepMin: number = 30;
                let stepMax: number = 80;
                let x: number = 0;

                _crc2.save();
                _crc2.translate(this.position.x, this.position.y);

                _crc2.beginPath();
                _crc2.moveTo(0, 0);
                _crc2.lineTo(0, -this.max);
                
                do {
                    x += stepMin + Math.random() * (stepMax - stepMin);
                    let y: number = -this.min - Math.random() * (this.max - this.min);

                    _crc2.lineTo(x, y);
                } while (x < _crc2.canvas.width);

                _crc2.lineTo(x, 0);
                _crc2.closePath();

                let gradient: CanvasGradient = _crc2.createLinearGradient(0, 0, 0, -this.max);
                gradient.addColorStop(0, this.colorLow);
                gradient.addColorStop(1, this.colorHigh);

                _crc2.fillStyle = gradient;
                _crc2.fill();

                _crc2.restore();

        }
    }
}