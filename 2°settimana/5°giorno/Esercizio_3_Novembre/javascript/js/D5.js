/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets);

for (var i = 0; i < pets.length; i++) {
  const animale = pets[i];
  console.log(animale);
}
console.log("Gli animali sono: \t" + i);


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const arrayOrdinato = pets.sort();

console.log(arrayOrdinato);


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
var index = 0;
for (let j = pets.length - 1; j >= 0; j--) {
  const animal = pets[j];
  console.log(animal);
  index++;
}
console.log("Gli animali sono: \t" + index);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
var test = pets;
const element = test.shift();
console.log("L'elemento rimosso è: \t" + element);
console.log("Ora l'array è lungo:\t" + test.length + "\nEd è composto da: \t" + test);
test.push(element);
console.log("Congratulazioni, abbiamo aggiunto " + element + " con successo");
console.log("Ora l'array è lungo:\t" + test.length + "\nEd è composto da: \t" + test);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

// Funzione per generare una stringa casuale per targa
function generatelicensePlate(length) {
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let risultato = '';
  const charlength = char.length;
  for (let i = 0; i < length; i++) {
    const randomJ = Math.floor(Math.random() * charlength);
    risultato += char.charAt(randomJ);
  }
  return risultato;
}

for (let y = 0; y < cars.length; y++) {
  var casuale = generatelicensePlate(7);
  cars[y].licensePlate = casuale;
}
console.log(cars);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
// brand: 'Volkswagen',
//     model: 'Polo',
//     color: 'black',
//     trims:
//     licensePlate;
cars.push({
  brand: 'Mercedes',
  model: 'Class A',
  color: 'yellow',
  licensePlate: generatelicensePlate(7),
  trims: ['Benz', 'AMG']
})
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (i = 0; i < cars.length; i++) {
  const risorsa = cars[i];
  justTrims.push(risorsa.trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  const value = cars[i];
  if (value.color.charAt(0) === 'b') {
    console.log("Fizz \n");
  } else {
    console.log("Buzz\n");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let p = 0;
while (numericArray[p] !== 32) {
  console.log(numericArray[p]);
  p++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
var nuovoArray = [];
for (let i = 0; i < charactersArray.length; i++) {
  let number = 0;
  number=charactersArray[i];
  switch (number) {
    case 'a':
      numero = 1;
      break;
    case 'b':
      numero = 2;
      break;
    case 'c':
      numero = 3;
      break;
    case 'd':
      numero = 4;
      break;
    case 'e':
      numero = 5;
      break;
    case 'f':
      numero = 6;
      break;
    case 'g':
      numero = 6;
      break;
    case 'h':
      numero = 8;
      break;
    case 'i':
      numero = 9;
      break;
    case 'l':
      numero = 10;
      break;
    case 'm':
      numero = 11;
      break;
    case 'n':
      numero = 12;
      break;
    case 'o':
      numero = 13;
      break;
    case 'p':
      numero = 14;
      break;
    case 'q':
      numero = 15;
      break;
    case 'r':
      numero = 16;
      break;
    case 's':
      numero = 17;
      break;
    case 't':
      numero = 18;
      break;
    case 'u':
      numero = 19;
      break;
    case 'v':
      numero = 20;
      break;
    case 'z':
      numero = 21;
      break;
    default:
      console.log("E una lettera straniera");
  }
  console.log("La lettera selezionata è:\t" + charactersArray[i]+ "\te corrisponde al numero:\t" +numero+ " nell'alfabeto italiano" );
  nuovoArray.push(numero);
}
console.log(nuovoArray);