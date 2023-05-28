// > Estruturas Condicionais

console.clear()
const idade = 20

if (idade >= 18) {
    console.log('Você é maior de idade')
} else {
    console.log('Você é menor de idade')
}

// Se média >= 7, aprovado
// Se média < 7 e média >= 5, recuperação
// Se média < 5, reprovado

console.clear()

let media = 5

if (media >= 7) {
    console.log('Aprovado(a)')
} else if (media >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado(a)')
}