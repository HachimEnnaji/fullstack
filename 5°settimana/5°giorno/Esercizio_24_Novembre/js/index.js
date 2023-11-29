window.onscroll = function () {
  colorIt();
};
let change = document.querySelector(".container");
let button = document.querySelector("ul li:last-child a");
// function per controllare scroll verticale e modificare navbar in base alla posizione
function colorIt() {
  if (document.documentElement.scrollTop > 400) {
    change.classList.add("changeColorway");
    button.style.backgroundColor = "#1a8917";
    button.style.transition = "650ms";
  } else {
    change.classList.remove("changeColorway");
    button.style.backgroundColor = "#000000";
    button.style.transition = "650ms";
  }
}

var start = setInterval(fadeAway, 1000); // dichiaro variabile su cui far partire funzione ogni secondo
let mLetter = document.querySelectorAll("g"); //assegno alla variabile la html collection di g che è il tag che contiene le M
function fadeAway() {
  mLetter.forEach((el, index) => {
    // ciclo le variabili e passo sia el che indice per fare controllo in modo che non agganci le prime due g che probabilmente controllano l'intera matrice di M
    var random = Math.round(Math.random() * 50); // valore casuale per cancellare periodicamente in maniera randomica le M
    if (random == 11 && index !== 0 && index !== 1) {
      // entro randomicamente e cancello valore
      el.classList.add("disappear"); // aggiungo classe che mi controlla opacità e transizione
      setInterval(function () {
        el.style.transition = "400ms"; // setto un intervallo affinchè mi riappaiano le M dopo 3 secondi sempre con transizione all'opacità
        el.classList.remove("disappear");
      }, 3000);
    }
  });
}
// setTimeout(function () {
//   clearInterval(start);
// }, 20000);
