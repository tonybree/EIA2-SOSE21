"use strict";
class Word {
    constructor(_word) {
        this.word = _word;
    }
}
class Subjects extends Word {
}
class Predicates extends Word {
}
class Objects extends Word {
    constructor() {
        super(...arguments);
        this.rhymeWords = [];
    }
    addRhymeWord(_rhymeWord) {
        this.rhymeWords[this.rhymeWords.length] = _rhymeWord;
    }
}
class Row {
    constructor(_subject, _predicate, _object) {
        this.subject = _subject;
        this.predicate = _predicate;
        this.object = _object;
    }
    rhymeMatch(_row) {
        for (let i = 0; i < this.object.rhymeWords.length; i++) {
            let rhymeWord = this.object.rhymeWords[i];
            if (rhymeWord === _row.object) {
                return true;
            }
        }
        return false;
    }
    toString() {
        return this.subject.word + " " + this.predicate.word + " " + this.object.word + ".";
    }
}
let subjects = [];
let predicates = [];
let objects = [];
let subjectStrings = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Voldemort"];
let predicateStrings = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
//let objektStrings: string[] = ["die Zaubertränke", "die Besenschränke", "Professor Dumbledore", "das Quiditschtor", "der Grimm", "Slytherin"];
function initialize() {
    for (let i = 0; i < subjectStrings.length; i++) {
        let subject = new Subjects(subjectStrings[i]);
        subjects[subjects.length] = subject;
    }
    for (let i = 0; i < predicateStrings.length; i++) {
        let predicate = new Predicates(predicateStrings[i]);
        predicates[predicates.length] = predicate;
    }
    let zaubertraenke = new Object("die Zaubertränke");
    objects[objects.length] = zaubertraenke;
    let besenschraenke = new Object("die Besenschränke");
    objects[objects.length] = besenschraenke;
    let dumbledore = new Object("Professor Dumbledore");
    objects[objects.length] = dumbledore;
    let quiditschtor = new Object("das Quiditschtor");
    objects[objects.length] = quiditschtor;
    let grimm = new Object("den Grimm");
    objects[objects.length] = grimm;
    let slytherin = new Object("Slytherin");
    objects[objects.length] = slytherin;
    zaubertraenke.addRhymeWord(besenschraenke);
    besenschraenke.addRhymeWord(zaubertraenke);
    dumbledore.addRhymeWord(quiditschtor);
    quiditschtor.addRhymeWord(dumbledore);
    grimm.addRhymeWord(slytherin);
    slytherin.addRhymeWord(grimm);
}
function createRow() {
    let subject = randomWord(subjects);
    let predicate = randomWord(predicates);
    let object = randomWord(objects);
    return new Row(subject, predicate, object);
}
function randomWord(array) {
    let index = Math.floor(Math.random() * Math.floor(array.length));
    return array[index];
}
initialize();
let verse = [];
while (verse.length != 6) {
    let verse1 = createRow();
    let verse2 = verse1;
    while (!verse1.rhymeMatch(verse2)) {
        verse2 = createRow();
    }
    verse[verse.length] = verse1;
    verse[verse.length] = verse2;
}
for (let i = 0; i < verse.length; i++) {
    console.log(verse[i].toString());
}
//# sourceMappingURL=PoemEN.js.map