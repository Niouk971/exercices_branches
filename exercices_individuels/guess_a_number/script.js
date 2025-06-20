// const number = document.getElementById("number")
// console.log(number)

// function givenNumber(number) {
//     number = parseInt(number)
//     return number
// }

// number.innerText = givenNumber(prompt())

function askNumber() {
    let givenNumber = Number(prompt("Donnez moi un nombre"))
    return givenNumber
}

// let givenNumber = Number(prompt("Donnez moi un nombre")) // Number pour demander uniquement des nombres

function didIWin(givenNumber) {
    if (givenNumber < 22) {
        // alert("Plus grand")
        return false
    } else if (givenNumber > 22) {
        // alert("Plus petit")
        return false
    }    
    // } else { (givenNumber === 22)
        // alert("Bravo ! Vous avez deviné le nombre.")
        return true
}

// alert(didIWin(askNumber()));

function gamePlay() {
     do {
        number = askNumber()
        result = didIWin(number)
        if (result === false) {
            alert("Retente ta chance !")
        } else (alert("Bravo ! Tu as trouvé !"))
        }
    while (result !== true)
}

gamePlay();
