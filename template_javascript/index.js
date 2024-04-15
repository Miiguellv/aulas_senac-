let nome = prompt("Digite seu nome")
let idade = prompt("Digite sua idade")
let horasTrabalho = prompt("Digite as horas que você trabalha")
let salarioDia = prompt("Digite o seu salario")
// vaerificando as variaveis 
console.log(typeof nome)
console.log(typeof HorasTrabalho)
console.log(typeof salarioDia)
//convertendo o que é necessário
let horasTrabNumber = Number(horasTrabalho)
let salDiaNumber = Number(salarioDia)
//processando valores
let valHoraNumber = horasTrabNumber/salDiaNumber
let valorHora = String(valHoraNumber) //conversão para não dar e
const mensagem = "Seu valor hora e " + valorHora + "!!!"
//Verificando variáveis
console.log(typeof valorHora)
console.log(typeof mensagem)
console.log(mensagem)
//Saida de valores para Front End
alert(mensagem)