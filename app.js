let nomeDosAmigos = [];

function adicionarAmigo() {
    let amigos = document.getElementById("amigo").value.trim();
    
    if (amigos === ""){
        alert('Por favor, insira um nome.');
        return;        
    }

    if (nomeDosAmigos.includes(amigos)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    nomeDosAmigos.push(amigos);
    console.log(nomeDosAmigos);
    document.getElementById("amigo").value = ""; //limpa o campo de entrada

    atualizarLista(); 
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); 

    lista.innerHTML = ""; // Limpar a lista antes de adicionar novos elementos

    for (let i = 0; i < nomeDosAmigos.length; i++) {
        let item = document.createElement("li"); // Criar um novo <li>
        item.textContent = nomeDosAmigos[i]; 
        lista.appendChild(item); 
    }
}

function sortearAmigo() {
    if (nomeDosAmigos.length === 0) { 
        alert("Nenhum amigo disponível para sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomeDosAmigos.length);
    let amigoSorteado = nomeDosAmigos[indiceSorteado];

    let resultado = document.getElementById("resultadoSorteio");
    if (!resultado) {
        resultado = document.createElement("p");
        resultado.id = "resultadoSorteio";
        document.body.appendChild(resultado);
    }

    resultado.innerHTML = `🎉 O amigo sorteado foi: <strong>${amigoSorteado}</strong>`; 
}