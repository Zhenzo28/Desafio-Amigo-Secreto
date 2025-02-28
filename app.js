// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    // Capturar el input de la variable llamada nombre
    let nombre = document.getElementById('amigo').value;
    // Validar vacio
    if(nombre.trim() === ''){
        alert('Por favor, inserte un nombre');
        return;
    } else {
        // Validar que el nombre no se repita
        if(amigos.includes(nombre)){
            alert('Este nombre ya fue agregado');
            return;
        } else {
            // Validar que el nombre no sea un número
            if(!isNaN(nombre)){
                alert('Por favor, inserte un nombre válido, no se aceptan');
                return;
            }
        } // No recibir nombres con espacio al inicio y final
        if(nombre.charAt(0) === ' ' || nombre.charAt(nombre.length - 1) === ' '){
            alert('Por favor, inserte un nombre válido, sin espacios al inicio y al final');
            return;
        }
    }
    // añadir el nombre al array amigos
    amigos.push(nombre);
    // Limpiar el input
    document.getElementById('amigo').value = '';
    mostrarListaAmigo();
}

function mostrarListaAmigo(){
    // Validar que amigos no este vacio
    if (amigos.length === 0){
        alert('Por favor, agrega a tus amigos');
        return;
    }
    // Mostrar la lista de amigos
    actualizarLista();
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

function sortearAmigo(){
    // validar que amigos no este vacio
    if (amigos.length === 0){
        alert('Por favor, agrega a tus amigos');
        return;
    }
    // Generar un numero aleatorio
    let numeroAleatorio = Math.floor(Math.random()*amigos.length);
    // Obtener el nombre del amigo sorteado
    let amigoSorteado = amigos[numeroAleatorio];
    // Mostrar el nombre del amigo sorteado
    document.getElementById('resultado').textContent = amigoSorteado;
}