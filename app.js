let nomeDosAmigos = [];

function adicionarAmigo() {
    let amigos = document.getElementById("amigo").value.trim();
    
    if (amigos === ""){
        alert('Por favor, insira um nome.');
        return;        
    }

    if (nomeDosAmigos.includes(amigos)) { // Verifica se o nome já existe no array
        alert('Este nome já foi adicionado!');
        return;
    }
    
    nomeDosAmigos.push(amigos);
    console.log(nomeDosAmigos);
    document.getElementById("amigo").value = ""; //limpa o campo de entrada

    atualizarLista(); //chama a função para atualizar a lista na tela
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Selecionar a lista <ul>

    lista.innerHTML = ""; // Limpar a lista antes de adicionar novos elementos

    for (let i = 0; i < nomeDosAmigos.length; i++) {
        let item = document.createElement("li"); // Criar um novo <li>
        item.textContent = nomeDosAmigos[i]; // Definir o nome como texto do <li>
        lista.appendChild(item); // Adicionar o <li> à <ul>
    }
}