let listaDePaticipante = {
  Evento01:['Thiago', 'Gabrielle', 'Gabriel', 'Paulo', 'Maria', 'Fernanda', 'Madalena', 'Marcio'],
  Evento02:['Daniel', 'Flavio', 'Fabio', 'Jonathan', 'Alex', 'Thomas', 'Matheus', 'Felipe', 'João', 'Jessé', 'Marcus Vinicius', 'Alvaro', 'Juan'],
}

let anoAtual = 2021
var anoEvento = 2022
var anoNascParticipante = 2002
var calcIdade = anoAtual - anoNascParticipante

//Valida cadastro dos Eventos

function cadastraEvento() {
  if (anoAtual == anoEvento) {
    console.log('Evento cadastrado com sucesso.');
  }else {
    console.log('Dava inválida para cadastrar evento.');
  }

  
}
cadastraEvento()

//Valida idade dos participantes

function cadastraParticipante() {
  if(calcIdade >= 18){
    console.log('Cadastro do participante efetuado com sucesso.');
  } else {
    console.log('Idade insifuciente para cadastro.');
  }
}
cadastraParticipante()

console.log(listaDePaticipante.Evento01)
console.log(listaDePaticipante.Evento02)

//Validar quantidade de participantes no evento

var numParticipantes = listaDePaticipante.Evento01.length

function qntParticipante(){
  if (numParticipantes < 100){
    console.log('Cadastro permitido.');
  } else {
    console.log('Evento já possiu o número máximo de participantes.');
  }
}
qntParticipante()