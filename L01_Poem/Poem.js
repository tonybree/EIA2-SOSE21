"use strict";
var Zufallsgedicht;
(function (Zufallsgedicht) {
    let subjekte;
    let paedikate;
    let objekte;
    let subjektStrings = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikatStrings = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objektStrings = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    let initialisieren;
    () => {
        let harry = new Subjekt();
        harry.wort = "Harry";
        subjekte[subjekte.size()] = harry;
    };
    console.log(subjekte[0].wort);
    console.log(praedikatStrings);
    console.log(objektStrings);
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=Poem.js.map