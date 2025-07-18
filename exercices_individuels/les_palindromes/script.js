// 1

// Retourne le nombre de jours dans un mois donné
function maxDaysInMonth(month, year) {
  const mois31 = [1, 3, 5, 7, 8, 10, 12];
  const mois30 = [4, 6, 9, 11];

  if (mois31.includes(month)) return 31;
  if (mois30.includes(month)) return 30;

  // Février et année bissextile
  if (month === 2) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
  }

  return 0; // Mois invalide
}

// Vérifie la validité de la date au format dd/mm/yyyy
function isValidDate(dateStr) {
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = dateStr.match(regex);
  if (!match) return false;

  const jour = parseInt(match[1], 10);
  const mois = parseInt(match[2], 10);
  const annee = parseInt(match[3], 10);

  // Vérification du mois
  if (mois < 1 || mois > 12) return false;

  // Vérification du jour
  const maxDays = maxDaysInMonth(mois, annee);
  if (jour < 1 || jour > maxDays) return false;

  // Vérification de l’année
  if (annee < 1000 || annee > 9999) return false;

  return true;
}

console.log(isValidDate("03/04/2001")); // true
console.log(isValidDate("31/11/2022")); // false (novembre a 30 jours)
console.log(isValidDate("29/02/2024")); // true (année bissextile)
console.log(isValidDate("29/02/2023")); // false (non bissextile)
console.log(isValidDate("03/14/2001")); // false (mois invalide)


// 2

function isPalindrome(dateStr) {
  if (!isValidDate(dateStr)) return false;

  // Supprimer les séparateurs et vérifier le palindrome
  const cleaned = dateStr.replace(/\//g, ""); // "ddmmaaaa"
  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
}

console.log(isPalindrome("11/02/2011")); // true
console.log(isPalindrome("03/04/2001")); // false
console.log(isPalindrome("29/02/2024")); // false
console.log(isPalindrome("30/02/2021")); // false
console.log(isPalindrome("21/02/2012")); // true


// 3

function getNextPalindromes(x) {
  const results = [];
  const today = new Date();
  
  let day = today.getDate();
  let month = today.getMonth() + 1; // Les mois commencent à 0
  let year = today.getFullYear();

  while (results.length < x) {
    // Format de la date : dd/mm/yyyy
    const dd = String(day).padStart(2, "0");
    const mm = String(month).padStart(2, "0");
    const yyyy = String(year);
    const dateStr = `${dd}/${mm}/${yyyy}`;

    if (isDatePalindrome(dateStr)) {
      results.push(dateStr);
    }

    // Avancer au jour suivant
    day++;
    const daysInMonth = maxDaysInMonth(month, year);
    if (day > daysInMonth) {
      day = 1;
      month++;
      if (month > 12) {
        month = 1;
        year++;
      }
    }
  }

  return results;
}

console.log(getNextPalindromes(8));


// 4

// Détecte si une chaîne est un palindrome
function isPalindrome(str) {
  const cleaned = str.replace(/\s/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

// Vérifie si une date est un palindrome (au format dd/mm/yyyy)
function isDatePalindrome(dateStr) {
  if (!isValidDate(dateStr)) return false;
  const numericDate = dateStr.replace(/\//g, "");
  return isPalindrome(numericDate);
}
