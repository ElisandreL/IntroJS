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