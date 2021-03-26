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

class Satz {
    subjekt: Subjekt;
    praedikat: Praedikat;
    objekt: Objekt;

    constructor(_subjekt: Subjekt, _praedikat: Praedikat, _objekt: Objekt) {
        this.subjekt = _subjekt;
        this.praedikat = _praedikat;
        this.objekt = _objekt;
    }

    reimtSichAuf(_satz: Satz): boolean{
        for (let i: number = 0; i < this.objekt.reimwoerter.length; i++){
            let reimWort: Objekt = this.objekt.reimwoerter[i];
            if(reimWort === _satz.objekt) {
                return true;
            } 
        } 
        return false;
    }

    toString(){
        return this.subjekt.wort + " " + this.praedikat.wort + " " + this.objekt.wort + ".";
    }
}

let subjekte: Subjekt[] = [];
let praedikate: Praedikat[] = [];
let objekte: Objekt[] = [];

let subjektStrings: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Voldemort"];
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

    let grimm: Objekt = new Objekt("den Grimm");
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

function erstellSatz(): Satz {
    let subjekt: Subjekt = zufallsWort(subjekte);
    let praedikat: Praedikat = zufallsWort(praedikate);
    let objekt: Objekt = zufallsWort(objekte);
    return new Satz(subjekt, praedikat, objekt);
}

function zufallsWort(array: Wort[]): any {
    let index: number = Math.floor(Math.random() * Math.floor(array.length));
    return array[index];
}

initialisieren();

let saetze: Satz[] = [];
while (saetze.length != 6) {
    let satz1: Satz = erstellSatz();
    let satz2: Satz = satz1;
    while (!satz1.reimtSichAuf(satz2)) {
        satz2 = erstellSatz();
    } 
    saetze[saetze.length] = satz1;
    saetze[saetze.length] = satz2; 
}

for (let i: number = 0; i < saetze.length; i++) {
    console.log(saetze[i].toString());
}

