const pageTitle = document.querySelector('h1');

console.log(pageTitle)

const subscribeButton = document.querySelector("#newsletter");

console.log(subscribeButton)


//par défaut, l'utilisateur n'a pas cliqué, donc l'user n'a toujours pas cliqué
let userIsSubscribed = false

subscribeButton.addEventListener('click', () => {
    if (userIsSubscribed === true) {
        //l'user a déjà souscrit le bouton, donc on passe à false 
        userIsSubscribed = false
        subscribeButton.innerText = "subscribe"
    } else {
        //l'user n'a pas clické le bouton auparavant, donc on passe à true
        userIsSubscribed = true
        subscribeButton.innerText = "unsubscribe"
    }
});
