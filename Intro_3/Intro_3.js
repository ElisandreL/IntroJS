let emptyArray = []; // empty array
let numbersArray = [1, 2, 3] // array with numbers
let stringsArray = ['apple', 'chicon', 'poires'] // array with strings

// ACCESS TO ELEMENTS :
let arr = ['Gégé', 'David'];
console.log("Hello " + arr[0] + " " + arr[1]);
//In JS, the it consideres that the indexes start at 0. So 0 is the 1st element

// To modify a specific element : 
let arra = [1, 2, 3]; // -> 0, 1, 2
arra[2] = 4;
console.log(arra); // [1, 2, 4]

//Obtain the size of an array : 
let arri = [1, 2, 3];
console.log("The size is " + arri.length); //display : "The size is 3" 'cause <nameoftheArray>.length gives how many elements are in the array

//Add and remove elements
let ar = ["apple", "beer", "panda"];
console.log(ar); // ["apple", "beer", "panda"]
ar.push("Cherry"); //-> push at the end of the array
console.log (ar); // ["apple", "beer", "panda", "Cherry"]
ar.pop(); //-> remove the last element
console.log(ar); // ["apple", "beer", "panda"]

//Iterate on an array to perform operations on ALL its elem. 

let arro = ["apple", "beer", "panda"];
for (let i = 0; i < arro.length; i += 1) {
    console.log("Do you want a " + arro[i] + "?")
} //This is the old method

for (let elem of arro) {
    console.log("Do you want to have a " + elem + "?")
}