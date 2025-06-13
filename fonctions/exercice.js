// 1

function addition3Numbers(number1, number2, number3) {
    return `Le résultat de la somme est ${number1 + number2 + number3}.`;
}

console.log(addition3Numbers(1, 2, 3));

// // 2

let nombre1 = 7
let nombre2 = 5
let nombre3 = 4

function addition3NumbersWithArg(poulet, frites, nuggets) {
    return `Le résultat de la somme est ${poulet + frites + nuggets}.`;
}

console.log(addition3NumbersWithArg(nombre1, nombre2, nombre3));

// 3

console.log(addition3NumbersWithArg(7, 5, 4));
console.log(addition3NumbersWithArg(1, 2, 3));
console.log(addition3NumbersWithArg(10, 5, 15));
