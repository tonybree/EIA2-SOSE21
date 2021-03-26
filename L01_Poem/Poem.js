"use strict";
class Wort {
    constructor(_wort) {
        this.wort = _wort;
    }
}
class Subjekt extends Wort {
}
class Praedikat extends Wort {
}
class Objekt extends Wort {
    constructor() {
        super(...arguments);
        this.reimwoerter = [];
    }
    addReimwort(_reimwort) {
        this.reimwoerter[this.reimwoerter.length] = _reimwort;
    }
}
class Satz {
    constructor(_subjekt, _praedikat, _objekt) {
        this.subjekt = _subjekt;
        this.praedikat = _praedikat;
        this.objekt = _objekt;
    }
    toString() {
        return this.subjekt.wort + " " + this.praedikat.wort + " " + this.objekt.wort + ".";
    }
}
let subjekte = [];
let praedikate = [];
let objekte = [];
let subjektStrings = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let praedikatStrings = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
//let objektStrings: string[] = ["die Zaubertränke", "die Besenschränke", "Professor Dumbledore", "das Quiditschtor", "der Grimm", "Slytherin"];
function initialisieren() {
    for (let i = 0; i < subjektStrings.length; i++) {
        let subjekt = new Subjekt(subjektStrings[i]);
        subjekte[subjekte.length] = subjekt;
    }
    for (let i = 0; i < praedikatStrings.length; i++) {
        let praedikat = new Praedikat(praedikatStrings[i]);
        praedikate[praedikate.length] = praedikat;
    }
    let zaubertraenke = new Objekt("die Zaubertränke");
    objekte[objekte.length] = zaubertraenke;
    let besenschraenke = new Objekt("die Besenschränke");
    objekte[objekte.length] = besenschraenke;
    let dumbledore = new Objekt("Professor Dumbledore");
    objekte[objekte.length] = dumbledore;
    let quiditschtor = new Objekt("das Quiditschtor");
    objekte[objekte.length] = quiditschtor;
    let grimm = new Objekt("den Grimm");
    objekte[objekte.length] = grimm;
    let slytherin = new Objekt("Slytherin");
    objekte[objekte.length] = slytherin;
    zaubertraenke.addReimwort(besenschraenke);
    besenschraenke.addReimwort(zaubertraenke);
    dumbledore.addReimwort(quiditschtor);
    quiditschtor.addReimwort(dumbledore);
    grimm.addReimwort(slytherin);
    slytherin.addReimwort(grimm);
}
function erstellSatz() {
    let subjekt = zufallsWort(subjekte);
    let praedikat = zufallsWort(praedikate);
    let objekt = zufallsWort(objekte);
    return new Satz(subjekt, praedikat, objekt);
}
function zufallsWort(array) {
    let index = Math.floor(Math.random() * Math.floor(array.length));
    return array[index];
}
initialisieren();
let satz1 = erstellSatz();
console.log(satz1.toString());
let satz2 = erstellSatz();
console.log(satz2.toString());
let satz3 = erstellSatz();
console.log(satz3.toString());
//# sourceMappingURL=Poem.js.map