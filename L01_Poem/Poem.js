"use strict";
let subjekte;
let paedikate;
let objekte;
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
//# sourceMappingURL=Poem.js.map