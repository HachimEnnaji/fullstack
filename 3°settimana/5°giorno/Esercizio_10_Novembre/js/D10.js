/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log(" ESERCIZIO A \nCrea una variabile chiamata sum e assegnaci il risultato della somma tra i valori 10 e 20 \t");
const sum = 10 + 20;
console.log(`il valore di sum è ${sum} `);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("ESERCIZIO B \nCrea una variabile chiamata random e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione)");

const random = Math.round(Math.random() * 20);
console.log(`il valore casuale generato è   ${random} `);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("ESERCIZIO C \n Crea una variabile chiamata me e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età")
let me = {
    name: 'Hachim',
    surname: 'Ennaji',
    age: '29',
}
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("ESERCIZIO D\nCrea del codice per rimuovere programmaticamente la proprietà age dall'oggetto precedentemente creato")
const alterEgo = { ...me }
delete alterEgo.age;
console.log(alterEgo)


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("ESERCIZIO E\n Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato skills,contenente i linguaggi di programmazione che conosci")
me.skills = ["Html", "Css", "JavaScript"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO F\nCrea un pezzo di codice per aggiungere un nuovo elemento all'array skills contenuto nell'oggetto me");
me.skills.push("C++");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO G\n Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array skills contenuto nell'oggetto me")
me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("ESERCIZIO 1\nCrea una funzione chiamata dice: deve generare un numero casuale tra 1 e 6.");
function dice() {
    const n = Math.floor(Math.random() * 6) + 1;
    return n;
}
console.log("Il numero generato è \t" + dice());


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("ESERCIZIO 2\nCrea una funzione chiamata whoIsBigger che riceve due numeri come parametri e ritorna il maggiore dei due.");
function whoIsBigger(n1, n2) {
    if (parseInt(n1) === parseInt(n2)) {
        return messsage = "I due numeri sono uguali";
    } else if (parseInt(n1) > parseInt(n2)) {
        return n1;
    } else if (parseInt(n1) < parseInt(n2)) {
        return n2;
    } else {
        return messsage = "Attenzione! \n uno dei valori o tutti e due non sono numeri!";
    }
}
const a = 3;
const b = 3;
console.log("Il numero più grande tra " + a + " e " + b + " è:\t" + whoIsBigger(a, b));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("ESERCIZIO 3\nCrea una funzione chiamata splitMe che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.")

function splitMe(string) {
    return string.split(/[-, ]/);
}
let valore = "Please,use this-function carefully";
console.log(splitMe(valore));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/ console.log("ESERCIZIO 4\n  Crea una funzione chiamata deleteOne che riceve una stringa e un booleano come parametri.\nSe il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.")

function deleteOne(string, bool) {
    if (bool) {
        return string.slice(1, string.length);
    } else {
        return string.slice(0, string.length - 1);
    }
}
const parola = "Ma che splendida giornata"
const yesOrNo = false;
console.log(deleteOne(parola, yesOrNo));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log(" ESERCIZIO 5\nCrea una funzione chiamata onlyLetters che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.")
// function onlyLetters (string){
//     return string.replace(/[0123456789]/g, '')
// }
const noNumbers = "I have 4 beatiful dogs, 1 of them hate the other 3. Anyway I would love to have at least 456 dogs and 32 cats"
const onlyLetters = (string) => { return string.replace(/[0123456789]/g, '') };
console.log(onlyLetters(noNumbers));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("ESERCIZIO 6\nCrea una funzione chiamata isThisAnEmail che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email")
const isThisAnEmail = (string) => {
    if (string.includes('@')) {  //controllo che nella stringa ci sia una chiocciola
        const arrayCheck = string.split('@'); // divido la stringa in un array composto da ["nome", "dominio"]
        if (arrayCheck[0].length < 1) { // controllo che prima della chiocciola ci fosse almento un carattere
            return false; // se non c'è restituisco false
        } if (arrayCheck[1].includes('.')) { //controllo il dominio se c'è un punto e splito in un secondo array
            const arrayDomain = arrayCheck[1].split('.'); //split
            if ((arrayDomain[0].length >= 1) && (arrayDomain[1].length >= 1)) { //controllo che prima e dopo il punto ci fosse almeno una lettere
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
    return false; // se supera tutti i controlli restituisco true
}
const email = "ashennaji@hotmail.it"
if (isThisAnEmail(email)) {
    console.log("La email:\t" + email + "\tè valida");
} else {
    console.warn("Prego reinserire la mail:\t" + email + " non valido");
}

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("ESERCIZIO 7\nScrivi una funzione chiamata whatDayIsIt che ritorna il giorno della settimana corrente.")
function whatDayIsIt() {
    const date = new Date();
    const today = new Array();
    today[0] = "Domenica";
    today[1] = "Lunedì";
    today[2] = "Martedì";
    today[3] = "Mercoledì";
    today[4] = "Giovedì";
    today[5] = "Venerdì";
    today[6] = "Sabato";
    return today[date.getDay()];
}
console.log("Oggi è :\t" + whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("ESERCIZIO 81\n Scrivi una funzione chiamata rollTheDices che riceve un numero come parametro.\nDeve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà sum:\nil suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().\nL'oggetto ritornato deve anche contenere una proprietà values, contenente un array con tutti i valori estratti dalle invocazioni di dice().")
function rollTheDices(number) {

    let obj = {
        sum: 0,
        values: [],
    }
    for (let i = 0; i < number; i++) {
        const container = dice();
        obj.values[i] = container;
        obj.sum += container;
    }
    return obj;
}
var launchOfDices = {};
console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(data) {
    const todaysDate = new Date();
    const anno = data.getTime();
    const todaysDateInMilliseconds = todaysDate.getTime();

    const risultato = anno - todaysDateInMilliseconds;
    return equivalenteInGiorni = Math.round(risultato / (1000 * 60 * 60 * 24));
}
const giornoPrescelto = new Date("2023-11-9");
const oggi = new Date();
console.log(oggi);
const conversione = Math.abs(howManyDays(giornoPrescelto)) - 1;
console.log("La differenza di giorni tra : " + oggi + " e " + giornoPrescelto + " è\n" + conversione + " giorni");

// const anno = new Date();
// console.log(anno.getTime());
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log(" ESERCIZIO 10\nScrivi una funzione chiamata isTodayMyBirthday che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.")
function isTodayMyBirthday(data) {
    const myBirthday = new Date(1993, 10, 15);
    var day, month;
    day = myBirthday.getDate();
    month = myBirthday.getMonth() + 1;
    var choosedDay = data.getDate();
    var choosedMonth = data.getMonth() + 1;
    if ((choosedDay - day === 0) && (choosedMonth - month === 0)) {
        return true;
    }
    else return false;
}

const compleanno = new Date();

if (isTodayMyBirthday(compleanno)) {
    console.log(" Tanti Auguri a tee!!");
} else {
    console.log("Mi dispiace oggi non è il tuo compleanno, ritorna domani");
}

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
const movies = [
    {
        Title: 'The Lord of the Rings: The Fellowship of the Ring',
        Year: '2001',
        imdbID: 'tt0120737',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },

    {
        Title: 'The Lord of the Rings: The Return of the King',
        Year: '2003',
        imdbID: 'tt0167260',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings: The Two Towers',
        Year: '2002',
        imdbID: 'tt0167261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of War',
        Year: '2005',
        imdbID: 'tt0399295',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'Lords of Dogtown',
        Year: '2005',
        imdbID: 'tt0355702',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings',
        Year: '1978',
        imdbID: 'tt0077869',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1990',
        imdbID: 'tt0100054',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
        Title: 'The Lords of Salem',
        Year: '2012',
        imdbID: 'tt1731697',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
        Year: '1984',
        imdbID: 'tt0087365',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1963',
        imdbID: 'tt0057261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Infinity War',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Age of Ultron',
        Year: '2015',
        imdbID: 'tt2395427',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Endgame',
        Year: '2019',
        imdbID: 'tt4154796',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("ESERCIZIO 11\nScrivi una funzione chiamata deleteProp che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la stringa passata come secondo parametro.")
function deleteProp(object, string) {
    delete object[string];
    return object;
}
var cancella = "nome";
const calciatore = {
    nome: "Alex",
    cognome: "Del Piero",
    numero: '10'
}

console.log(deleteProp(calciatore, cancella));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("ESERCIZIO 12\nScrivi una funzione chiamata newestMovie che trova il film più recente nell'array movies fornito.")
function newestMovie(array) {
    let recent = { Year: 0 }
    array.forEach((movie) => {
        let current = parseInt(movie.Year)
        if (current > recent.Year) {
            recent = movie;
        }
    })
    return recent
}
console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 13\nScrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array movies fornito.")
function countMovies(array) {
    let counter = 0;
    array.forEach((movie) => {
        counter++;
    })
    return counter;
}

console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 14\nScrivi una funzione chiamata onlyTheYears che crea un array con solamente gli anni di uscita dei film contenuti nell'array movies fornito.");

function onlyTheYears(array) {
    return array.map((movie) => movie.Year)
}
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log(" ESERCIZIO 15\nScrivi una funzione chiamata onlyInLastMillennium che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array movies fornito.")
function onlyInLastMillennium(array) {
    return array.filter((movie) => parseInt(movie.Year) < 2000);
}
console.log(onlyInLastMillennium(movies));


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 16\nScrivi una funzione chiamata sumAllTheYears che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array movies fornito.");
function sumAllTheYears(array) {
    return array.reduce((total, movie) => total += parseInt(movie.Year), 0);
}
console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("ESERCIZIO 17\nScrivi una funzione chiamata searchByTitle che riceve una stringa come parametro e ritorna i film nell'array movies fornito che la contengono nel titolo.")

function searchByTitle(array, titolo) {
    return array.find((movie) => titolo === movie.Title);
}
console.log(searchByTitle(movies, 'Avengers: Infinity War'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log(" ESERCIZIO 18\nScrivi una funzione chiamata searchAndDivide che riceve una stringa come parametro e ritorna un oggetto contenente due array: match e unmatch.\nmatch deve includere tutti i film dell'array movies fornito che contengono la stringa fornita all'interno del proprio titolo, mentre unmatch deve includere tutti i rimanenti.")

function searchAndDivide(string, array) {
    const dad = {
        match: [],
        unmatch: [],
    }
    array.forEach((movie) => {
        if (movie.Title.includes(string)) {
            dad.match.push(movie);
        } else {
            dad.unmatch.push(movie);
        }
    })
    return dad;
}

console.log(searchAndDivide('Aveng', movies));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("ESERCIZIO 19\nScrivi una funzione chiamata removeIndex che riceve un numero come parametro e ritorna l'array movies fornito privo dell'elemento nella posizione ricevuta come parametro.")

function removeIndex(index, array) {
    const remove = array.indexOf(index);
    array.splice(index, 1);
    return array;
}
console.log(removeIndex(0, movies));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
console.log("DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)");
/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectElement() {
    const element = document.getElementById("container");
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function allTablesDatas() {
    const allTd = document.getElementsByTagName("td");
    allTd.forEach((el) => {
        //...
    })
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function allTablesDatas() {
    const allTd = document.querySelectorAll("td");
    allTd.forEach((el) => {
        console.log(el.textContent);
    })
}
allTablesDatas()

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/ function backgroundLink() {
    const a = document.querySelectorAll("a");
    a.forEach((el) => {
        el.style.backgroundColor = "red";
    })
}
backgroundLink();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function insertANewElement() {
    const li = document.createElement("li");
    const lista = document.getElementById("myList");
    lista.appendChild(li);
}
insertANewElement();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function remove() {
    const lista = document.getElementById("myList");
    const li = document.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        lista.removeChild(li[i]);
    }
}
remove();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/ function addClass() {
    const tr = document.querySelectorAll("tr");
    for (let i = 0; i < tr.length; i++) {
        // tr.classList.add('test')
    }
}
addClass();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***
  */
console.log("ESERCIZIO 27\nCrea una funzione chiamata halfTree che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.");

function halfTree(number) {
    for (let i = 0; i <= number; i++) {
        let asterisco = "";
        for (let j = 0; j < i; j++) {
            asterisco += "*";
        }
        console.log(asterisco+"\n");
    }
}
halfTree(8);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log("ESERCIZIO 28\nCrea una funzione chiamata tree che riceve un numero come parametro e costruisce un albero di " * " (asterischi) dell'altezza fornita.")

function tree(number) {
    for (let i = 0; i < number; i++) {
        let value = "";
        for (let j = 0; j < number; j++) {
            value += " ";
            for (let k = 0; k < 2 * i; k++) {
                value += "*";
            }
        }
        console.log(value + "\n");
        console.log("\n")
    }
}
tree(5);



/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("ESERCIZIO 29\nCrea una funzione chiamata isItPrime che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.");

function isItPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

console.log(isItPrime(7));

/* Questo array viene usato per gli esercizi. Non modificarlo. */



