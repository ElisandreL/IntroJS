const readlineSync = require('readline-sync')

// Exo 2.5

let Num = 0;
while (Num != 42) {
    Num = new Number(readlineSync.question('What is your favorite number ? '));
    if (Num != 42) {
        console.log("Are you sure ? ")
    }
    else {
        console.log('Great !')
    }
}
/*/let fav = new Number(readlineSync.question('What is your favorite number ? '));

do {
    console.log('Are you sure ? ');
} while (fav != 42);
do {
    console.log('Great !');
} while (fav === 42);


while (fav != 42) {
    if (fav === 42) {
        console.log('Great !');
        break;
    } else {
        console.log('Are you sure ?');
        let fav = new Number(readlineSync.question('What is your favorite number ? '));
        break
    }
}*/