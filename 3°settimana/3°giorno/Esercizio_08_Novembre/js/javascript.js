const handleSubmit = function (e) {
    e.preventDefault()
    addTask()
    attachComplete()
    attachDelete()
}

const addTask = function () {
    let task = document.querySelector('#obj');
    let inputField = document.querySelector('#myDiv input');
    let newTask = `
    <div class="task">
        <span id="taskname">
            ${inputField.value}
        </span>
        <button class="delete">
            Delete
        </button>
    </div>
`
    task.style.cursor="pointer";
    task.innerHTML += newTask;
    inputField.value = '';
}







// let inputField = document.querySelector("#myDiv input");
// inputField.style.fontWeight= "bold";
// const button= document.createElement("button");
// button.innerHTML= "Rimuovi";
// const paragrafo = document.getElementById("demo");
//  paragrafo.innerHTML += `${inputField.value} <br>`;
//  paragrafo.appendChild()



// const addTask = function (){
// agganciare glielementi html come stamani
// stampare l'html necessario per aggiungere il valure nel mio campo input inputField.value
// ogni task che aggiungo aggiunge html -> +=
// }
 const attachComplete = function(){
    let allTasks= document.querySelectorAll('.task');
    for(let i=0; i<allTasks.length;i++){
        allTasks[i].addEventListener('click', function (){
            this.classList.toggle('completed');
        })
    }
 }
// //aggancia gli elementi html
// //li ciclo con for
// //all'elemento che seleziono aggiunge| toglie una classe (toggle)
// andare a vedere atributo this per leggere il contenuto
// }

const attachDelete = function(){
    let button = document.querySelectorAll('.delete');
    for(let i=0;i<button.length;i++){
        button[i].addEventListener('click', function(){
            this.parentNode.remove();
        })
    }
}
// // aggancia elementi html
// //ciclo for
// //remove per rimuovere qualcosa . remove
// // css text decoration:line-through;
// }
window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}
// andare a vedere atributo this per leggere il contenuto 