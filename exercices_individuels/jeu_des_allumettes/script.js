const totalAllumettes = document.getElementById('total');
const gameContainer = document.getElementById('game-container');
const playerList = document.getElementById('player-list');

let totalMatches = 50

let user1 = "Patrick"
let user2 = "Albert"

let userRemovesMatches = 4

function removeMatches(userRemovesMatches) {
    return totalMatches - userRemovesMatches
}

console.log(removeMatches(userRemovesMatches));

function limitRemoveMatches() {
    if (userRemovesMatches > 6) {
        console.log("Tu ne peux pas retirer plus de 6 allumettes");
        return false;
    } else if (userRemovesMatches < 1) {
        console.log("Tu dois retirer au moins une allumette");
        return false;
    } else if (userRemovesMatches = 1 || userRemovesMatches <= 6) {
        return true
    }
}

console.log(limitRemoveMatches());

function startGame() {
    console.log(`Bienvenue à ${user1} et à ${user2}, dans le jeu des allumettes !`);
    console.log(`Il y a un total de ${totalMatches} allumettes dans le jeu.`);
    totalMatches = 50
    do {
    console.log("Combien d'allumettes souhaites-tu retirer ?");
} while (totalMatches > 0)
}

