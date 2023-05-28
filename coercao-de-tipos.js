// > Coerção (Conversão) de Tipos

// - 1. Coerção Explícita (Manual)
const numero = 10

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('1231848'))
console.log(Number('5454.321'))
console.log(parseInt('5454.321'))
console.log(Boolean(1))
console.log(Boolean(0))

console.clear()

// - 2. Coerção Implícita (Automática)

console.log(10 + '1') // O + tambêm é o operador de concatenação
console.log('10' - 1)
console.log(10 * '3')
console.log(10 - 'asdfa')

console.clear()

// Outros Exemplos

// Qual será a saída desse código?
let n = 1 + '1' // "11"

n = n - 1 // 10

console.log(n)

// Qual será a saída desse código?
console.log(2 + 3 + 4 + "5")

// Qual será a saída desse código?
console.log("5" + 2 + 3 + 4)

// Qual será a saída desse código?
console.log("10" - "4" - "3" - 2 + "5")