// etape 2

let message = "Bonjour !";

console.log(message);

let firstName = "Beyonce";
message = `Bonjour ${firstName} !`;

console.log(message);

// etape 3

function sayHello() {
    console.log(message)
}

sayHello();

// etape 4

function sayHello(firstName, hour) {
    if (hour >= 18) {
        return `Bonsoir ${firstName} !`;
    } else {
        return message;
    }
}

console.log(sayHello("Beyonce", 11));
console.log(sayHello("Beyonce", 18));
console.log(sayHello("Beyonce", 17));

// etape 5 (fichier index.html)

// etape 6

function sayHello2(firstName, hour) {
    if (hour >= 18) {
        message = `Bonsoir ${firstName} !`
        document.querySelector('h1').innerText = message;
        return message
    } else {
        message = `Bonjour ${firstName} !`
        document.querySelector('h1').innerText = message;
        return message
    }
}

console.log(sayHello2(prompt("Entrez votre prénom :"), 13))
