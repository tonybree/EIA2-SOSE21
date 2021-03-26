"use strict";
var Zufallsgedicht;
(function (Zufallsgedicht) {
    let subjekte;
    let paedikate;
    let objekte;
    let subjektStrings = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikatStrings = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objektStrings = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    function initialisieren() {
        let harry = new Subjekt();
        harry.wort = "Harry";
        subjekte[subjekte.length] = harry;
    }
    initialisieren();
    console.log(subjekte[0].wort);
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=Poem.js.map