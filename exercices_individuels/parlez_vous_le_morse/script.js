const form = document.querySelector('#form');
const button = document.querySelector('#button');
const caractereText = document.querySelector('#caractere-text');
const morse = document.querySelector('#morse-text');

console.log(button)

// Etape 1

function getLatinCharacterList(text) {
    return text.split('')
}

console.log(getLatinCharacterList('HELLO, WORLD'))


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

function translateLatinCharacter(caractere) {
    return latinToMorse[caractere]
}

console.log(translateLatinCharacter('N'))


// Etape 3

function encode(text) {

    for(let i = 0; i < text.length; i ++);
        getLatinCharacterList(text);
        translateLatinCharacter(caractere);

}

console.log(encode('HELLO, WORLD'));


form.addEventListener('submit', (event) => {

    event.preventDefault()
    const caractereText = document.querySelector('#caractere-text').value.trim();
    const morse = document.querySelector('#morse-text').value.trim();
    console.log(caractereText);
    console.log(morse);

    addCaractereToMorse(caractereText, morse);

})

function addCaractereToMorse(caractereText, morse) {
    
    const showCaractere = document.createElement('p');
    showCaractere.classList.add('caractere');
    showCaractere.innerText = caractereText;


    const showMorse = document.createElement('p');
    showMorse.classList.add('morse');
    showMorse.innerText = morse;

    const divTranslation = document.createElement('div');
    divTranslation.classList.add('translation');

    divTranslation.appendChild(showCaractere);
    divTranslation.appendChild(showMorse);

    document.querySelector('#translation-list').appendChild(divTranslation);

}