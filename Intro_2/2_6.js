const readlineSync = require('readline-sync');
//Exo 2.6
/*let favNum = new Date((readlineSync.question("Choose a number between one and seven : "));
var tab_jour = new Array('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche');
console.log('Tu as choisi le ' +tab_jour[favNum.getDay()])*/

let favNum = 0;
while (favNum <= 7) {
    let favNum = new Number(readlineSync.question("Choose a number between one and seven : "));
    if (favNum == 1) {
        console.log('Monday');
    } else if (favNum == 2) {
        console.log('Tuesday');
    } else if (favNum == 3) {
        console.log ('Wednesday');
    } else if (favNum == 4) {
        console.log('Thursday');
    } else if (favNum == 5) {
        console.log('Friday');
    } else if (favNum == 6) {
        console.log('Saturday');
    } else if (favNum == 7) {
        console.log('Sunday')
    }
    else {
        break
    }
}