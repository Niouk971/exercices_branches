// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles

let priceArticle1 = 10
let priceArticle2 = 20

// Nous calculons le total

let total = priceArticle1 + priceArticle2

// Prix d’un troisieme article

let priceArticle3 = 50

// Nous ajoutons a3 au total

total += priceArticle3

//Nous appliquons 20% de reduction

let reduction = total*0.2
let finalPrice = total - reduction

console.log("Le prix total avant reduction est de : ", total)
console.log("Le prix total après reduction est de : ", finalPrice)
