namespace L08_Blumenwiese {
    interface Vector {
        x: number;
        y: number;
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
        drawBackground();
        drawSun({x: 90, y: 80});
        crc2.fillStyle = "HSL(105, 70%, 30%)";
        crc2.fillRect(0, 400, crc2.canvas.width, 200);
        drawMountains({x: 0, y: 400}, 100, 400, "grey", "lightgrey");
        drawMountains1({x: 0, y: 400}, 100, 300, "grey", "grey");
        drawPine(-30, -50, .6, .9);
        drawPine(-50, -90, .5, .7);


        function drawBackground(): void {
            
            let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0,crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(golden, "white");
            gradient.addColorStop(0.6, "darkorange");


            crc2.fillStyle = gradient;
            crc2.fillRect(0,0,crc2.canvas.width, crc2.canvas.height);
    }
        function drawSun(_position: Vector): void {
            let r1:  number = 25;
            let r2: number = 80;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

            gradient.addColorStop(0, "HSL(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");


            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0,0, r2, 0, 2*Math.PI);
            crc2.fill();
            crc2.restore(); 
    }

        function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
                let stepMin: number = 30;
                let stepMax: number = 80;
                let x: number = 0;

                crc2.save();
                crc2.translate(_position.x, _position.y);

                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(0, -_max);
                
                do {
                    x += stepMin + Math.random() * (stepMax - stepMin);
                    let y: number = -_min - Math.random() * (_max - _min);

                    crc2.lineTo(x, y);
                } while (x < crc2.canvas.width);

                crc2.lineTo(x, 0);
                crc2.closePath();

                let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
                gradient.addColorStop(0, _colorLow);
                gradient.addColorStop(1, _colorHigh);

                crc2.fillStyle = gradient;
                crc2.fill();

                crc2.restore();

        }
        function drawMountains1(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
            let stepMin: number = 30;
            let stepMax: number = 80;
            let x: number = 0;

            crc2.save();
            crc2.translate(_position.x, _position.y);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -_max);
            
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y: number = -_min - Math.random() * (_max - _min);

                crc2.lineTo(x, y);
            } while (x < crc2.canvas.width);

            crc2.lineTo(x, 0);
            crc2.closePath();

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(1, _colorHigh);

            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.restore();

    }


        function drawPine(_min: number, _max: number, _minSize: number, _maxSize: number): void {
            let stepMin: number = 300;
            let stepMax: number = 100;
            let x: number = 0;

    
            do {
                let y: number = -_min - Math.random() * (_max - _min);
                crc2.save();
                crc2.translate(x, y + (horizon + 15));
    
                let yTree1: number = -30;
                let yTree2: number = -100;
                let treeColor: string[] = ["#154f31"];
                let treeSize: number = _minSize + Math.random() * (_maxSize - _minSize);
    
                crc2.scale(treeSize, treeSize);
                crc2.fillStyle = "#544026";
                crc2.fillRect(0, 0, 22, -40);
    
                for (let z: number = 0; z < 4; z++) {
                    crc2.beginPath();
                    crc2.moveTo(-80, yTree1);
                    crc2.lineTo(92, yTree1);
                    crc2.lineTo(5, yTree2);
                    crc2.closePath();
                    crc2.fillStyle = treeColor[z];
                    crc2.fill();
    
                    yTree1 += -40;
                    yTree2 += -40;
                }
                x += stepMin + Math.random() * (stepMax - stepMin);
                crc2.restore();
            } while (x < crc2.canvas.width);
        }

        for (let i: number = 0; i < 10; i++) {
            let centerX: number = Math.random() * canvas.width + 0;
            let centerY: number = 560;
            let radius: number = 70;
            let color: string = generateRandomColor();
            drawFlower(centerX, centerY, radius, 4, color);
    }

        function drawFlower(centerX: number, centerY: number, radius: number, numPetals: number, color: string): void {
                
            crc2.beginPath();
            crc2.moveTo(centerX, centerY);
            crc2.lineTo(centerX, centerY + 80);
            crc2.strokeStyle = "darkgreen";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            for (let i: number = 0; i < numPetals; i++) {
                let theta1: number = ((Math.PI * 2) / numPetals) * (i + 1);
                let theta2: number = ((Math.PI * 2) / numPetals) * (i);

                let x1: number = (radius * Math.sin(theta1)) + centerX;
                let y1: number = (radius * Math.cos(theta1)) + centerY;
                let x2: number = (radius * Math.sin(theta2)) + centerX;
                let y2: number = (radius * Math.cos(theta2)) + centerY;

                crc2.moveTo(centerX, centerY);
                crc2.bezierCurveTo(x1, y1, x2, y2, centerX, centerY);
            }

            crc2.closePath();
            crc2.fillStyle = color;
            crc2.fill();
            crc2.beginPath();
            crc2.arc(centerX, centerY, radius / 5, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#FFFF66";
            crc2.fill();
            crc2.strokeStyle = "white";
            crc2.lineWidth = 1;
            crc2.stroke();
        }

        function generateRandomColor(): string {
            let r: number = Math.floor(Math.random() * 255);
            let g: number = Math.floor(Math.random() * 255);
            let b: number = Math.floor(Math.random() * 255);
            let color: string = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
            return color;
        }
    }
}