/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/* Javascript
Ha cinque tipi di dati primitivi:

  1. Numeri      assegna alla variabile un numero intero, positivo, negativo oppure decimale        Es: 5, 0, -3, 12.57
  2. Stringhe    assegna alla variabile un valore stringa si delimita con doppi o singoli apici     Es: 'Pippo'
  3. Booleani    assegna alla variabile esclusivamente due valore vero o falso       quindi:        Es: x = true; |  x = false;
  4. Null        assegna alla variabile un valore null cioè nullo da non confondere con 0 oppure  stringa vuota ("")
  5. Undefined   non assegna nessun valore alla variabile quindi indefinito   ad esempio quando dichiariamo una variabile senza darle valore
                                                                                                    Es: var x;

E un tipo di dato complesso:
 
  -Ogetto      si assegna agli oggetti valori o funzioni


*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var nome = "hachim";
console.log("il mio nome è: " +nome );

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var somma = 12 + 20;
console.log("La somma di 12 e 20 è: " +somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var nome= 'ennaji';
console.log("ora la variabile cognome è: " +nome)
const PIGRECO = 3.14;
console.log(" il valore di Pi Greco è :" +PIGRECO);
//PIGRECO = PIGRECO + 10; // errore
console.log(" il valore di Pi Greco è rimasto: " +PIGRECO+ " perchè è una costante");

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x -= 4;
console.log("ora x vale: " +x);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1= 'john';
var name2= 'John';
(name1 != name2) ? console.log("Le stringhe sono diverse") : console.log("Le stringhe sono uguali");
(name1 == name2.toLowerCase() ) ? console.log("Ora sono uguali") : console.log("Ops qualcosa è andato storto!");