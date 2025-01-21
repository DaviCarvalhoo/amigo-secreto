//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
let amigos = [];

function adicionarAmigo() {
  const nome = inputAmigo.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome.");
  }
  amigos.push(nome);

  const itemLista = document.createElement("li");
  itemLista.textContent = nome;
  listaAmigos.appendChild(itemLista);

  inputAmigo.value = "";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia! Adicione nomes antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const nomeSorteado = amigos[indiceAleatorio];

  resultado.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
  
}