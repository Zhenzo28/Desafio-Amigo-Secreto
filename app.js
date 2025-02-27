// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    // Capturar el input de la variable llamada nombre
    let nombre = document.getElementById('amigo').value;
    // Validar vacio
    if(nombre.trim() === ''){
        alert('Por favor, inserte un nombre');
        return;
    }
    // añadir el nombre al array amigos
    amigos.push(nombre);
    // Limpiar el input
    document.getElementById('amigo').value = '';
}

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
