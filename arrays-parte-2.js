// > Arrays - Parte 2 - Métodos de Arrays
console.clear()

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// Fatiamento: slice

console.log(arr1.slice(0, 2))
console.log(arr1.slice(2))

console.clear()

// Adicionando elementos: push | unshift

console.log('Antes de adicionar', arr2)

arr2.push(10, 20 ,30)
arr2.push(40)

console.log('Depois de adicionar', arr2)


console.log('Antes de adicionar com unshift', arr2)

arr2.unshift(0)
console.log('Depois de adicionar com unshift', arr2)

console.clear()

// Removendo elementos: pop | shift

console.log('Antes de remover com o pop', arr2)

const elementoRemovido = arr2.pop()

console.log('Depois de remover com o pop', arr2)
console.log('O elemento removido foi', elementoRemovido)



console.log('Antes de remover com o shift', arr2)
arr2.shift()
console.log('Depois de remover com o shift', arr2)

console.clear()

// Concatenando arrays: concat

console.log('Array 1:', arr1)
console.log('Array 2:', arr2)

console.log(arr1.concat(arr2)) 
console.log(arr2.concat(arr1)) 

console.clear()

// Buscando elementos: indexOf | lastIndexOf

console.log(arr1)

let indiceDoElemento34 = arr1.indexOf(34)

console.log(indiceDoElemento34)

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3.lastIndexOf(3))

console.clear()


// Descobrindo a existência de um elemento: includes

console.log(arr1)

console.log(arr1.includes(12))

console.clear()

// Invertendo arrays: reverse

console.log('arr1 normal:', arr1)

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido:', arr1)

