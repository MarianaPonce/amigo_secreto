// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo == ''){
        alert("Por favor, inserte un nombre")
    }else{
        amigos.push(amigo);
        actualizaLista();
        console.log(amigos)
    }
    limpiarCaja();
    return amigos;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    let tamanoAmigos= amigos.length
    if (tamanoAmigos === 0){
        alert('Agrega a tus amigos');
    }else{
        let numeroGenerado= Math.floor(Math.random()*tamanoAmigos);
        document.getElementById('resultado').innerHTML = amigos[numeroGenerado];
    } 
}

function actualizaLista(){
    let lista= document.getElementById('listaAmigos')
    lista.innerHTML=""
    for (let i = 0; i < amigos.length; i++) {
        console.log(amigos[i]);
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent=amigos[i];
        lista.appendChild(nuevoAmigo);
    }
}