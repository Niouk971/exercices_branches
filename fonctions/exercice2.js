// 1

function returnInt(int) {
    return Math.pow(int, 2) // nombre + puissance de "nombre"
}

console.log(returnInt(3))

// 2

let result = returnInt(prompt())

function multiplyByTen(number) {
    return result * number
}

console.log(multiplyByTen(10))

// 3

console.log(multiplyByTen(prompt("Selectionner un chiffre entre 0 et 10 :")))
