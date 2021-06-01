namespace L08_Blumenwiese {
    interface Vector {
        x: number;
        y: number;
    }

    class Mountain {
        position: Vector;
        min: number;
        max: number;
        colorLow: string;
        colorHigh: string;

        constructor(_x: number, _y: number, _min: number, _max: number, _colorLow: string, _colorHigh: string) {
            this.position = {x: _x, y: _y};
            this.min = _min;
            this.max = _max;
            this.colorLow = _colorLow;
            this.colorHigh = _colorHigh;
        }

        draw (_crc2: CanvasRenderingContext2D) {
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

    class Pine {
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
        draw (_crc2: CanvasRenderingContext2D, _horizon: number) {
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

    class Flower {
        centerX: number;
        centerY: number;
        radius: number;
        numPetals: number;
        color: string;

        constructor (_centerX: number, _centerY: number, _radius: number, _numPetals: number, _color: string) {
            this.centerX = _centerX;
            this.centerY = _centerY;
            this.radius = _radius;
            this.numPetals = _numPetals;
            this.color = _color;
        }

        draw (_crc2: CanvasRenderingContext2D) {
            _crc2.beginPath();
            _crc2.moveTo(this.centerX, this.centerY);
            _crc2.lineTo(this.centerX, this.centerY + 80);
            _crc2.strokeStyle = "darkgreen";
            _crc2.lineWidth = 5;
            _crc2.stroke();
            _crc2.closePath();
            
            _crc2.beginPath();
            for (let i: number = 0; i < this.numPetals; i++) {
                let theta1: number = ((Math.PI * 2) / this.numPetals) * (i + 1);
                let theta2: number = ((Math.PI * 2) / this.numPetals) * (i);

                let x1: number = (this.radius * Math.sin(theta1)) + this.centerX;
                let y1: number = (this.radius * Math.cos(theta1)) + this.centerY;
                let x2: number = (this.radius * Math.sin(theta2)) + this.centerX;
                let y2: number = (this.radius * Math.cos(theta2)) + this.centerY;

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
        draw (_crc2: CanvasRenderingContext2D, _golden: number) {
            let gradient: CanvasGradient = _crc2.createLinearGradient(0, 0, 0, _crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(_golden, "white");
            gradient.addColorStop(0.6, "darkorange");
    
    
            _crc2.fillStyle = gradient;
            _crc2.fillRect(0, 0, _crc2.canvas.width, _crc2.canvas.height);
        }
    }

    class Sun {
        position: Vector;

        constructor (_position: Vector) {
            this.position = _position;
        }
        draw (_crc2: CanvasRenderingContext2D) {
            let r1:  number = 25;
            let r2: number = 80;
            let gradient: CanvasGradient = _crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
    
            gradient.addColorStop(0, "HSL(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
    
    
            _crc2.save();
            _crc2.translate(this.position.x, this.position.y);
            _crc2.fillStyle = gradient;
            _crc2.arc(0,0, r2, 0, 2 * Math.PI);
            _crc2.fill();
            _crc2.restore(); 
        }
    }
    

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;
        let background = new Background ();
        background.draw(crc2, golden);
        let sun = new Sun ({x: 90, y: 80});
        sun.draw(crc2);
        crc2.fillStyle = "HSL(105, 70%, 30%)";
        crc2.fillRect(0, 400, crc2.canvas.width, 200);
        let mountain1 = new Mountain (0, 400, 100, 400, "grey", "lightgrey");
        mountain1.draw(crc2);
        let mountain2 = new Mountain (0, 400, 100, 300, "grey", "grey");
        mountain2.draw(crc2);
        let pine1 = new Pine (-30, -50, .6, .9);
        pine1.draw(crc2, horizon);
        let pine2 = new Pine (-50, -90, .5, .7);
        pine2.draw(crc2, horizon);

        
        for (let i: number = 0; i < 10; i++) {
            let centerX: number = Math.random() * canvas.width + 0;
            let centerY: number = 560;
            let radius: number = 70;
            let color: string = generateRandomColor();
            let flower = new Flower (centerX, centerY, radius, 4, color);
            flower.draw(crc2);
        }
    }

    function generateRandomColor(): string {
        let r: number = Math.floor(Math.random() * 255);
        let g: number = Math.floor(Math.random() * 255);
        let b: number = Math.floor(Math.random() * 255);
        let color: string = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
        return color;
    }
}
