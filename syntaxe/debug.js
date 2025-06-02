Panneau latéral
1
FKAP-VARIABLES
Pratiquer
Exercice 1 : Deboguage

Exercice 1 : Deboguage
Conditions d’achèvement
À faire : Remettre un travail
Corrige le code suivant en supprimant les bugs et en utilisant les bonnes pratiques pour renommer les variables. Note quelque part toutes les erreurs que t’affiche la console et essaie de comprendre comment tu les as corrigées.

// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let a1 = 10
let a2 = 20
// Nous calculons le total
const tot = a1 + a2
// Prix d'un troisieme article
let a3 = "50"
// Nous ajoutons a3 au total
tot = tot + a3

console.log("Le prix total avant reduction est de : ", tot)
console.log("Le prix total après reduction est de : ", tot2)

//Nous appliquons 20% de reduction
let tot2 = tot - tot*0,2
