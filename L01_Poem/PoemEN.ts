class Word {
    word: string;

    constructor(_word: string){
        this.word = _word;
    }
}
class Subjects extends Word {
}

class Predicates extends Word {
}

class Objects extends Word {

    rhymeWords: Object[] = [];
    addRhymeWord(_rhymeWord: Object): void {
        this.rhymeWords [this.rhymeWords.length] = _rhymeWord;
    }
}

class Row {
    subject: Subjects;
    predicate: Predicates;
    object: Objects;

    constructor(_subject: Subjects, _predicate: Predicates, _object: Objects) {
        this.subject = _subject;
        this.predicate = _predicate;
        this.object = _object;
    }

    rhymeMatch(_row: Row): boolean{
        for (let i: number = 0; i < this.object.rhymeWords.length; i++){
            let rhymeWord: Objects = this.object.rhymeWords[i];
            if(rhymeWord === _row.object) {
                return true;
            } 
        } 
        return false;
    }

    toString(){
        return this.subject.word + " " + this.predicate.word + " " + this.object.word + ".";
    }
}

let subjects: Subjects[] = [];
let predicates: Predicates[] = [];
let objects: Objects[] = [];

let subjectStrings: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Voldemort"];
let predicateStrings: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
//let objektStrings: string[] = ["die Zaubertränke", "die Besenschränke", "Professor Dumbledore", "das Quiditschtor", "der Grimm", "Slytherin"];


function initialize(){
    for (let i: number = 0; i < subjectStrings.length; i++){
        let subject: Subjects = new Subjects(subjectStrings[i]);
        subjects[subjects.length] = subject; 
    }
    
    for (let i: number = 0; i < predicateStrings.length; i++){
        let predicate: Predicates = new Predicates(predicateStrings[i]);
        predicates[predicates.length] = predicate; 
    }

    let zaubertraenke: Object = new Object("die Zaubertränke");
    objects[objects.length] = zaubertraenke;

    let besenschraenke: Object = new Object("die Besenschränke");
    objects[objects.length] = besenschraenke;

    let dumbledore: Object = new Object("Professor Dumbledore");
    objects[objects.length] = dumbledore;

    let quiditschtor: Object = new Object("das Quiditschtor");
    objects[objects.length] = quiditschtor;

    let grimm: Object = new Object("den Grimm");
    objects[objects.length] = grimm;

    let slytherin: Object = new Object("Slytherin");
    objects[objects.length] = slytherin;

    zaubertraenke.addRhymeWord(besenschraenke);
    besenschraenke.addRhymeWord(zaubertraenke);
    dumbledore.addRhymeWord(quiditschtor);
    quiditschtor.addRhymeWord(dumbledore);
    grimm.addRhymeWord(slytherin);
    slytherin.addRhymeWord(grimm);
}

function createRow(): Row {
    let subject: Subjects = randomWord(subjects);
    let predicate: Predicates = randomWord(predicates);
    let object: Objects = randomWord(objects);
    return new Row(subject, predicate, object);
}

function randomWord(array: Word[]): any {
    let index: number = Math.floor(Math.random() * Math.floor(array.length));
    return array[index];
}

initialize();

let verse: Row[] = [];
while (verse.length != 6) {
    let verse1: Row = createRow();
    let verse2: Row = verse1;
    while (!verse1.rhymeMatch(verse2)) {
        verse2 = createRow();
    } 
    verse[verse.length] = verse1;
    verse[verse.length] = verse2; 
}

for (let i: number = 0; i < verse.length; i++) {
    console.log(verse[i].toString());
}

