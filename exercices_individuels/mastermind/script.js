const player = 'John';
const authorizedColors = ['blue', 'red', 'yellow', 'green'];
const secretCode = ['blue', 'red'];

let numberOfAttempts = 12;

function checkColors (color) {
    // let color = 'blue'
    if (color === authorizedColors[0]) {
        console.log('oui');
        // return true
    } else console.log('non');
}

checkColors('blue');