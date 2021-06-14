// Objects is a data structure. 

/*
They are simple structure like arrays. They can allow elements into a string.
This string is called the KEY and its value is called the VALUE*/
let myObject = {
    // we can use the "" notation for the key... :
    "firstname": "Grerard",
    // ... or jus specify it like this if you want ... : 
    name: "Lambert",
    // ... and use any type of value :
    age: 42 
};

// we can use the [] notation to access values : 
console.log(myObject["age"]); //which returns 42

// ... or the . notation
console.log(myObject.firstname); // Gerard

// we also can assign new value
myObject.age = 54;

// ... and there's a special keyword to delete keys :
delete myObject["name"];

console.log(myObject); // {firstname: "Gerard", age: 54}

/* Objects and Arrays as Tools for Data Structures

By combining objects, arrays and a few simple types 
we can represent complex data structures suitable to represent
 most type of data.*/
 /*{
    "firstname": "Gerard",
    "lastname": "Lambert",
    "age": 42,
    "skills": [
      {
        "skillName": "JavaScript",
        "level": "advanced"
      },
      {
        "skillName": "HTML",
        "level": "advanced"
      }
    ],
    "address": {
      "street": "rue des Campanules",
      "number": "10",
      "city": "Paris",
      "zip": 1000
    }
  }*/
