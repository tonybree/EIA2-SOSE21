namespace L08_Blumenwiese {
    
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    export let bees: Bee [] = [];
    export let flowers: Flower [] = [];
    export let background: ImageData;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;
        drawBackground();
        let sun: Sun = new Sun (90, 80);
        sun.draw(crc2);
        crc2.fillStyle = "HSL(105, 70%, 30%)";
        crc2.fillRect(0, 400, crc2.canvas.width, 200);
        let mountain1: Mountain = new Mountain (0, 400, 100, 400, "grey", "lightgrey");
        mountain1.draw(crc2);
        let mountain2: Mountain = new Mountain (0, 400, 100, 300, "grey", "grey");
        mountain2.draw(crc2);
        let pine1: Pine = new Pine (-30, -50, .6, .9);
        pine1.draw(crc2, horizon);
        let pine2: Pine = new Pine (-50, -90, .5, .7);
        pine2.draw(crc2, horizon);
        drawFlower();
        let bee: Bee = new Bee(100, 100, 0.1, 0.1);
        bee.draw(crc2);
        bees.push(bee); 

        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        window.setInterval(update, 20);

    }

    function update(): void {
        console.log("update");
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(background, 0, 0);
        bees.forEach(bee => {
            bee.move(crc2, 1 / 50);
            bee.draw(crc2);
        });
        /*for (let bee in bees) {
            bee.move(crc2, 1 / 50);
            bee.draw(crc2);
        }*/
        for (let flower of flowers) {
            flower.draw(crc2);
        }
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(0.6, "darkorange");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function generateRandomColor(): string {
        let r: number = Math.floor(Math.random() * 255);
        let g: number = Math.floor(Math.random() * 255);
        let b: number = Math.floor(Math.random() * 255);
        let color: string = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
        return color;
    }

    function drawFlower(): void {
        for (let i: number = 0; i < 10; i++) {
            let flower: Flower = new Flower (generateRandomColor());
            flowers.push(flower);
        }
    }
}
