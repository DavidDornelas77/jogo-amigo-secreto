let nomeDosAmigos = [];

function adicionarAmigo() {
    let amigos = document.getElementById("amigo").value.trim();
    if (amigos === ""){
        alert('Por favor, insira um nome.');
        return;        
    }
    nomeDosAmigos.push(amigos);
    console.log(nomeDosAmigos);
    document.getElementById("amigo").value = "";
}