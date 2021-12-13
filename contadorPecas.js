let peso = 50;
let nomePeca = 'Freio'
var listaDePeca = [
  "Filtro de ar",
  "Motor",
  "Armotecedor",
  "Freio a disco",
  "Filtro de água",
  "Cabeçote"
]


for (let i = 0; i < listaDePeca.length; i++) {
  let contador = listaDePeca[i]
  console.log(`${i}: ${contador}`);
}