// > Laços Condicionais
console.clear()
const input = require('readline-sync')

const numeroSorteado = 5

let numero = Number(input.question('Qual numero voce escolhe?'))

while (numero !== numeroSorteado) {
    console.log('Você errou o número, Tente novamente...')

    numero = Number(input.question('Digite um novo numero:'))
}

console.log('Você acertou!!')

