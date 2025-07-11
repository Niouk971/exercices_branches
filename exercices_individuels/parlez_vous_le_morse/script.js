const form = document.querySelector('#form');
const button = document.querySelector('#button');

console.log(button)

// Etape 1

const text = ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]

function getLatinCharacterList(text) {
    return text.join('')
}

console.log(getLatinCharacterList(text))


// Etape 2

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

// console.log(latinToMorse['A'])


caractere = latinToMorse['A']

function translateLatinCharacter(caractere) {
    return caractere
}

console.log(translateLatinCharacter(caractere))


// function encode(text) {
//     text.caractere.forEach('click', () => {

//     })
//     getLatinCharacterList(text)
// }

// console.log(encode(text))


form.addEventListener('submit', (event) => {

    event.preventDefault()
    const caractere = document.querySelector('#caractere-text').value.trim();
    const morse = document.querySelector('#morse-text').value.trim();
    console.log(caractere);
    console.log(morse);

    addCaractereToMorse(caractere, morse);

})

function addCaractereToMorse(caractere, morse) {
    
    const showCaractere = document.createElement('p');
    showCaractere.classList.add('caractere');
    showCaractere.innerText = caractere;


    const showMorse = document.createElement('p');
    showMorse.classList.add('morse');
    showMorse.innerText = morse;

    const divTranslation = document.createElement('div');
    

}