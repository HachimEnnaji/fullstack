// tombola
// inload carico l'array della tombola 
// // 1. funzione che genera la tabella con tutti i numeri
// // 2. funzione che scrive i numeri (push in un array)
// // 3. funzione (associata al bottone) che genera dei numeri randomi
// // 4. funzione che aggiunge una class classList.add('highlight')
// // 5. funzione che generale delle tabelline da 24
// // funzioni vanno dichiarate e invocatel
// funzione genera tabella
// funzione genera numero
const numeri = []
const createNumber = function () {
    const place = document.getElementById('tabella')
    for (let i = 0; i < 90; i++) {
        const numero = document.createElement("span")
        numero.classList.add('numeration')
        const indexNumber = i +1;
        numero.innerText = indexNumber;
        numeri.push(indexNumber);
        place.appendChild(numero)
    }
    
}

const generateNumber = function () {
    const button = document.getElementById("generateNumber");
    var confronta =[];
        for(let i=0;i<90;i++){
            confronta[i]= i+1;
        }
    button.addEventListener('click', function(e){
        const printNumber = document.getElementById("showNumber");
        var valore= Math.floor(Math.random()*90+1);
        printNumber.value= valore;
        console.log(valore+"è uguale a" +confronta[valore-1])
        if(valore===confronta[valore-1]){
            const busted = document.querySelectorAll('.numeration')
            busted[valore-1].classList.add('highlight')}
        }
        )
        // if(valore===confronta[valore]){

        // }
        // console.log(confronta);
    }
        // if(valore=== numeri[valore]){
        //     console.log(valore+"è uguale a" +numeri[valore]);
        //     const busted = document.querySelectorAll('.numeration')
        //     busted[i].classList.add('highlight');}



createNumber()
generateNumber()
