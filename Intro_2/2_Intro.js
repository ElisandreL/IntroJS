/* 
COMPARISON OPERATORS :
=== True if exact same value (strict)
 != True if operands don't have the same value
 > True if the first op is strictly greater than the second
 > True if the first op is strictly lower than the second
 >= True if the first op is greater or equal 
 <= True if the first is lower than or equal
LOGIC OPERATORS : 
&& True if both operators are true
|| True if any of them are true
! Inverse the value of its operand -> True becomes False, False becomes True
*/

// IF : 
let size = 185;
let weight = 80;

if ((size >= 150) || (weight >= 45)) {
    console.log("You probably are an adult.");
    } 
    else if ((size >= 50) || (weight >= 10)) {
    console.log("You probably are a child.");
    }
    else {
        console.log("You probably are a baby."); //Complementary to if and execute other code if condition returns to false
    }

let i = 1;
while (i <= 100) { //while repeats as long as the condition is true (never ends until it's false)
    console.log(i);
    i += 1;
} //displays all numbers from 1 to 100

for (let i = 1; i <= 100; i += 1) {
    console.log(i);
}
// This code also displays all numbers from 1 to 100
/* FOR is like a specialized version of WHILE. Everything it can do WHILE can also do it. But its syntax is shorter for some common use cases so it's quite often used.

Inside the parenthesis there are three arguments separated by the ; character:

* The first one is a command that will be executed only once, after the first execution of the loop.
* The second one is a test that will be executed after each execution of the loop to know if we should continue or not (exactly like in while).
* The third one is a command that will be executed after each execution of the loop.
