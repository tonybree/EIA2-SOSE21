class Wort {
    wort: string;

    constructor(_wort: string){
        this.wort = _wort;
    }
}
class Subjekt extends Wort {
}

class Praedikat extends Wort {
}

class Objekt extends Wort {

    reimwoerter: Objekt[] = [];
    addReimwort(_reimwort: Objekt): void {
        this.reimwoerter [this.reimwoerter.length] = _reimwort;
    }
}

let subjekte: Subjekt[] = [];
let praedikate: Praedikat[] = [];
let objekte: Objekt[] = [];

let subjektStrings: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let praedikatStrings: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
//let objektStrings: string[] = ["die Zaubertränke", "die Besenschränke", "Professor Dumbledore", "das Quiditschtor", "der Grimm", "Slytherin"];


function initialisieren(){
    for (let i: number = 0; i < subjektStrings.length; i++){
        let subjekt: Subjekt = new Subjekt(subjektStrings[i]);
        subjekte[subjekte.length] = subjekt; 
    }
    
    for (let i: number = 0; i < praedikatStrings.length; i++){
        let praedikat: Praedikat = new Praedikat(praedikatStrings[i]);
        praedikate[praedikate.length] = praedikat; 
    }

    let zaubertraenke: Objekt = new Objekt("die Zaubertränke");
    objekte[objekte.length] = zaubertraenke;

    let besenschraenke: Objekt = new Objekt("die Besenschränke");
    objekte[objekte.length] = besenschraenke;

    let dumbledore: Objekt = new Objekt("Professor Dumbledore");
    objekte[objekte.length] = dumbledore;

    let quiditschtor: Objekt = new Objekt("das Quiditschtor");
    objekte[objekte.length] = quiditschtor;

    let grimm: Objekt = new Objekt("der Grimm");
    objekte[objekte.length] = grimm;

    let slytherin: Objekt = new Objekt("Slytherin");
    objekte[objekte.length] = slytherin;

    zaubertraenke.addReimwort(besenschraenke);
    besenschraenke.addReimwort(zaubertraenke);
    dumbledore.addReimwort(quiditschtor);
    quiditschtor.addReimwort(dumbledore);
    grimm.addReimwort(slytherin);
    slytherin.addReimwort(grimm);
}

function erstellReim() {
    let subjekt: Wort = zufallsWort(subjekte);
    let praedikat: Wort = zufallsWort(praedikate);
    let objekt: Wort = zufallsWort(objekte);
    return [subjekt, praedikat, objekt];
}

function zufallsWort(array: Wort[]): Wort {
    let index: number = Math.floor(Math.random() * Math.floor(array.length));
    return array[index];
}

initialisieren();
let reim: Wort[] = erstellReim();

console.log(reim[0].wort + " " + reim[1].wort + " " + reim[2].wort + ".");