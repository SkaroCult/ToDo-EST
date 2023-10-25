let qua = 2

function add(){
    let task = document.getElementById("new").value
    let sec = document.getElementById("task")

    sec.innerHTML += `<div>
    <h3 id="${qua}">${task}</h3>
    <i class="fa-solid fa-book" onclick="feito(${qua})"></i>
    </div>`

    qua += 1
}

function feito (n){
    let riscar = document.getElementById(n)

    riscar.style.textDecoration = "line-through"
}