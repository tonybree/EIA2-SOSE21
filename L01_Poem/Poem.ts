namespace Zufallsgedicht{
let subjekte: Subjekt[];
let paedikate: Praedikat[];
let objekte: Objekt[];

let subjektStrings: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let praedikatStrings: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objektStrings: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];


    let initialisieren() {
        let harry: Subjekt = new Subjekt();
        harry.wort = "Harry";
        subjekte[subjekte.size()] = harry;
    }

console.log(subjekte[0].wort);
console.log(praedikatStrings);
console.log(objektStrings);

}