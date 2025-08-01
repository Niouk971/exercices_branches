const isValidDate = (...val) => !Number.isNaN(new Date(...val).valueOf());

let = dateInput = "2001/04/03";
// let = dateInput = "2001/14/03";

let dateObj = new Date(dateInput);

// let dateArray = dateInput.split("/");

// let newDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;

// console.log(newDate); // 2001/04/03 (YYYY/MM/DD)

console.log(dateObj);

function isValidDate(dateStr) {
    return !isNaN(new Date(dateStr));
    // if (!isNaN(dateObj)) {

    //     let day = dateObj.getDate();
    //     day = day < 10 ? "0" + day : day;

    //     let month = dateObj.getMonth() + 1;
    //     month = month < 10 ? "0" + month : month;

    //     const year = dateObj.getFullYear();

    //     const resultDate = `${day}/${month}/${year}`;
    //     console.log(resultDate);  // 03/04/2001
        
    // }
}

// DD/MM/YYYY
console.log(isValidDate("03/04/2001")); // false

// MM/DD/YYYY
console.log(isValidDate("04/03/2001")); // true

// YYYY/MM/DD
console.log(isValidDate("2001/04/03")); // true



console.log(isValidDate("December 17, 1995 03:24:00")); // true
console.log(isValidDate("1995-12-17T03:24:00")); // true
console.log(isValidDate("1995-12-17 T03:24:00")); // false
console.log(isValidDate("Duck")); // false
console.log(isValidDate(1995, 11, 17)); // true
console.log(isValidDate(1995, 11, 17, "Duck")); // false
console.log(isValidDate({})); // false

console.log(isValidDate("03/04/2001")); // true
console.log(isValidDate("03/14/2001")); // false car 14 n'est pas un mois valide
