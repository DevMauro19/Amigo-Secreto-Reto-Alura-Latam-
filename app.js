// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // quitamos espacios en blanco

    // Validar entradas vacias
    if (nombre === "") {
        alert(" Por favor, ingresa un nombre válido.");
        return;
    }
    
    const existe = amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());
    if (existe) {
        alert(`⚠️ El nombre "${nombre}" ya está en la lista.`);
        input.value = "";
        return;
    }

    // Agregar nombres a la lista
    amigos.push(nombre);

    // Limpiar el input
    input.value = "";

    // Mostrar la lista actualizada
    mostrarLista();
}

// Función para mostrar la lista en la página
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar antes de volver a mostrar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert(" No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
