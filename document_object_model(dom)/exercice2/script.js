const horoscope = [
  {
    sign: 'Bélier',
    description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
  },
  {
    sign: 'Taureau',
    description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
  },
  {
    sign: 'Gémeaux',
    description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
  },
  {
    sign: 'Cancer',
    description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
  }
];

for (const item of horoscope) {
  document.body.innerHTML += `<article><h2>${item.sign}</h2><p>${item.description}</p></article>`;
}

// TODO: recupère l'élément <div id="horoscope">
// const getHoroscope = document.getElementById("horoscope");
// const afficherHoroscope = document.querySelector("div");

// let createH2 = document.createElement("h2");
// let createP = document.createElement("p");

// let h2Belier = document.createElement("h2");
// let pBelier = document.createElement("p");

// h2Belier.textContent = horoscope[0].sign;
// pBelier.textContent = horoscope[0].description;

// console.log(h2Belier)
// console.log(pBelier)



// item === horoscope[0]
// createH2.innerText = horoscope[0].sign
// console.log(createH2)
// createP.innerText = horoscope[0].description
// console.log(createP)

  // TODO: remplace le console.log par le code qui ajoute un article
	// pour chaque item avec le format suivant :
	// <article>
	//   <h2>Sign</h2>
	//   <p>Description</p>
	// </article>


  // if (item === horoscope[0]) {
  //   afficherHoroscope.innerText = `${horoscope[0].sign} : ${horoscope[0].description}`
  //   console.log(item.sign, item.description);
  // } else if (item === horoscope[1]) {
  //   afficherHoroscope.innerText = `${horoscope[1].sign} : ${horoscope[1].description}`
  //   console.log(item.sign, item.description);
  // } else if (item === horoscope[2]) {
  //   afficherHoroscope.innerText = `${horoscope[2].sign} : ${horoscope[2].description}`
  //   console.log(item.sign, item.description);
  // } else if (item === horoscope[3]) {
  //   afficherHoroscope.innerText = `${horoscope[3].sign} : ${horoscope[3].description}`
  //   console.log(item.sign, item.description);
  // }


  // if (item === horoscope[0]) {
  //   afficherHoroscope.innerText = `${horoscope[0].sign} : ${horoscope[0].description}`
  //   console.log(item.sign, item.description);
  // h2Belier.textContent = horoscope[0].sign;
  // pBelier.textContent = horoscope[0].description;
  // }
