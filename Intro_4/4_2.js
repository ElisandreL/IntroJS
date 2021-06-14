const readlineSync = require('readline-sync');
// Exo 4_2
//let rand10 = Math.round(Math.random() * 10);
function rand10() {
    return Math.round(Math.random() * 10);
}
console.log(rand10 ());
/* Math.round pour avoir l'arrondi supérieur
Math.random nous délivre un nombre décimal entre 0 et 1
donc *10 pour qu'il soit entre 0 et 10*/