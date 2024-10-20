// this to jest słówko, które pozwala się odwołać do konkretnego obiektu

const pies =  {
    rasa: 'pekinczyk',
    wiek: 4,
    getRasa() {
        return this.rasa; // przykład wykorzystania this
    }
}

console.log(pies.getRasa());

const ksiazka = {
    autor: 'Katarzyna Grochola',
    getAutor() {
        return this.autor; // przykład wykorzystania this
    }
}

console.log(ksiazka.getAutor());


const osoba = {
    username: 'Maciej',
    showName() {
        return this.username; // przykład wykorzystania this
    }
}

console.log(osoba.showName());

console.log('');



const polkaNaKsiazki = {
    authors: [],
    getAuthors() {
        return this.authors;
    },
    addAuthor(newAuthor) {
        this.authors.push(newAuthor);
    }
}   
        
polkaNaKsiazki.addAuthor('gosia')
console.log(polkaNaKsiazki.getAuthors())







