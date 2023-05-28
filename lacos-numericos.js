// > Laço Númerico: FOR
console.clear()
const input = require('readline-sync')

// O problema

// let nota1 = Number(input.question('Informe a nota1: '))
// let nota2 = Number(input.question('Informe a nota2: '))
// let nota3 = Number(input.question('Informe a nota3: '))

// let media = (nota1 + nota2 + nota3) / 3

// Acumulador

let acumulador = 0

acumulador += 10

acumulador -= 2

acumulador++ // Soma uma unidade á variável

console.log(acumulador)
console.clear()

// Estrutura for

for (let i = 0; i <= 4; i++) {
    console.log('Repetição', i)
}

console.clear()

for (let i = 10; i <= 12; i++) {
    console.log('Repetição', i)
}

console.clear

for (let i = 12; i > 8; i--) {
    console.log('Repetição', i)
}

console.clear()

// Resolvendo o problema inicial

let nota = 0
let media = 0

for (let i = 1; i <= 3; i++) {
    nota += Number(input.question(`Informe a nota ${i} do aluno: `))
    media = nota / i
}

console.log(`A média do aluno é: ${media}`)