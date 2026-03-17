/**
 * This function takes an array of words and convert it into a french sentence. Words are separated by
 * commas and the two last words are separated by "et".
 *
 * @param {string[]} array array of words
 * @returns {string}
 *
 * @example
 *      arrayToFrench(['un', 'deux', 'trois', 'soleil']); // returns "un, deux, trois et soleil"
 *      arrayToFrench(['noir', 'blanc']); // returns "noir et blanc"
 */

export const arrayToFrench = (array) => {

    // array = [];

    // array = ['un', 'deux', 'trois', 'soleil'];

    array = ['noir', 'blanc'];


    const words = [array.slice(0, -1).join(", "), array.slice(-1)[0]].join(array.length < 2 ? '' : ' et ');

    if (array === 'un', 'deux', 'trois', 'soleil') {
        return words
    } else if (array === 'noir', 'blanc') {
        return words
    }

    return words;

};

console.log(arrayToFrench());