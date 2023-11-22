/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

var num1 = 5;
var num2 = 7;

if (num1 > num2) {
  console.log("num1 è più grande di num2");
} else if (num1 === num2) {
  console.log("i due numeri sono uguali");
} else if (num1 < num2) {
  console.log("num1 è più piccolo di num2");
} else {
  console.log("Errore");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

var int = 4;

if (int !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
var divisibile = 6;

if (divisibile % 5 === 0) {
  console.log("il numero è divisibile per 5");
} else {
  console.log("il numero non è divisibile per 5");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

var n1 = 11;
var n2 = 3;

if ((n1 === 8) || (n2 === 8)) {
  console.log("uno dei due numeri è uguale a 8");
} else if (n1 + n2 === 8) {
  console.log("la loro somma è uguale a 8");
} else if (n1 - n2 === 8) {
  console.log("la loro sottrazione è uguale a 8");
} else {
  console.log("Mi dispiace ma i numeri assegnati le loro addizioni o sottrazioni non hanno nulla a che vedere con il numero 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
var saldo = 50;
var totalShoppingCart = saldo;
var spedizione = 10;

if (totalShoppingCart <= 50) {
  var checkout = totalShoppingCart + spedizione;
  console.log("Il costo totale è di: " + checkout);
} else {
  console.log("Congratulazioni la spedizione è gratuita \nIl costo totale è di: " + checkout);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
if (totalShoppingCart <= 50) {
  var checkout = totalShoppingCart + spedizione;
  console.log("Il costo totale è di: " + checkout);
  console.log("Ma oggi è il BlackFriday e il tuo carrello è scontato del 20%, ora pagherai solo:" + (checkout * 0.8));
} else {
  console.log("Congratulazioni la spedizione è gratuita \nIl costo totale è di: " + checkout);
  console.log("Inoltre oggi è il BlackFriday e il tuo carrello è scontato del 20%, ora pagherai solo:" + (checkout * 0.8));
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

var x = 6, y = 4, z = 5;

if (x > y && x > z) {
  if (y > z) {
    console.log("I numeri sono in ordine decrescente:\n" + x + "\n" + y + "\n" + z);
  } else {
    console.log("I numeri sono in ordine decrescente:\n" + x + "\n" + z + "\n" + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log("I numeri sono in ordine decrescente:\n" + y + "\n" + x + "\n" + z);
  } else {
    console.log("I numeri sono in ordine decrescente:\n" + y + "\n" + z + "\n" + x);
  }
} else {
  if (x > y) {
    console.log("I numeri sono ordine decrescente:\n" + z + "\n" + x + "\n" + y);
  } else {
    console.log("I numeri sono ordine decrescente:\n" + z + "\n" + y + "\n" + x);
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

var valore = 7;
if (typeof valore === "number") {
  console.log(valore + " è un numero");
} else {
  console.log(valore + " non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var fornito = 6;
if (fornito % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
let val = 7
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
console.log(me);
me.city = "Toronto";

console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log("Ho cancellato il cognome \n");
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
delete me.skills[2];
console.log("Ho cancellato l'ultima skills\n" );
console.log(me);

 

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
var myArray = [];
myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray);



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
myArray[9]= 100;
console.log(myArray);


