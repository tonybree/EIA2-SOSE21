class Objekt {
    wort: string;
    reimwoerter: Objekt[];

    addReimwort(_reimwort: Objekt): void {
        this.reimwoerter [this.reimwoerter.length] = _reimwort;
    }

    
 
}