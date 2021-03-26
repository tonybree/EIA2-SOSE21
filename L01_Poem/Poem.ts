class Subjekt {
    wort: string;
}

class Praedikat {
    wort: string;
}

class Objekt {
    wort: string;
    reimwoerter: Objekt[];
    addReimwort(_reimwort: Objekt): void {
        this.reimwoerter [this.reimwoerter.length] = _reimwort;
    }
}

let subjekte: Subjekt[] = [];
let paedikate: Praedikat[] = [];
let objekte: Objekt[] = [];

//let subjektStrings: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
//let praedikatStrings: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
//let objektStrings: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];


function initialisieren(){
    let harry: Subjekt = new Subjekt();
    harry.wort = "Harry";
    subjekte[subjekte.length] = harry;
}

initialisieren();

console.log(subjekte[0].wort);

console.log("wort");