const readlineSync = require('readline-sync');
// Exo 2.4

for (let i = 1; i <= 100; i += 1) {
    if (i % 2 === 0) {
        console.log(i / 2);
    } else if (i % 2 === 1) {
        console.log(i * 3);
    }
}