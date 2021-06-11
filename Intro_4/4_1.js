const readlineSync = require("readline-sync");
//Exo 4.1
let l = new Number(readlineSync.question('Can you give me the length of the rectangle ? '));
let w = new Number(readlineSync.question('Now, the value of width : '))
function calcSurface(l, w) {
    return l * w;
}
console.log("The surface of your rectangle is : " + calcSurface(l, w));

/* Display the surface of a rectangle. 
Param : l defined by let l (question to user),
w defined by let w (question to user).
return the surface : l * w (length * width).*/