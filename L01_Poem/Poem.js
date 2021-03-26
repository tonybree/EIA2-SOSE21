"use strict";
class Subjekt {
}
class Praedikat {
}
class Objekt {
    addReimwort(_reimwort) {
        this.reimwoerter[this.reimwoerter.length] = _reimwort;
    }
}
let subjekte = [];
let paedikate = [];
let objekte = [];
//let subjektStrings: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
//let praedikatStrings: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
//let objektStrings: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
function initialisieren() {
    let harry = new Subjekt();
    harry.wort = "Harry";
    subjekte[subjekte.length] = harry;
}
initialisieren();
console.log(subjekte[0].wort);
console.log("wort");
//# sourceMappingURL=Poem.js.map