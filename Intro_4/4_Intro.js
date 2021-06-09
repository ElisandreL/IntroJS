//Simple function def : 
function hello(name) {
    console.log("Hello " + name);
}
hello();

function add(a, b) {
    return a + b;
}
console.log("The sum of 2 and 3 is " + add(2, 3));
/* -> basic way to declare a function. The additional parameters used when we call the func (a, b) are its ARGUMENTS
A funct can return smthng with RETURN (pas obligé).*/

//Arrow functions : 
let myFunction = (a, b) => {
    return a + b;
}
console.log(myFunction(2, 3)); //5

myFunction = (a, b) => {
    return a * b;
}
console.log(myFunction(2, 3)); //6
/* "arrow" is related to the " => ". It's a shorter syntax to define a funct. 
/!\ to know that this way, the funct is anonymous (doesn't have a specific name). That's why 
just defining it is useless unless you do something with it. 
(Like assigning it to a variable in the examples.)*/

//Recursivity :
function count(i) {
    if (i <= 100) {
        console.log(i);
        count(i + 1);
    }
}
count(1); // displays all numbers from 1 to 100
/* Recursivity is a programming technique 
that you can use in all programming languages. It's used when a function calls itself.*/
