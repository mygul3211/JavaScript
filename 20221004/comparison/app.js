/**
 * Comparison Operators -> Boolean(true,false)
 * 
 * is equal             -> a == b
 * not equal            -> a != b
 * 
 * is greater than      -> a > b
 * is less than         -> a < b
 * is less than or equal -> a <= b
 * is greater than or equal ->  a >= b     
 * 
 * strict [equality]       -> ===
 * strict [not equality]   ->  !==
 * 
 */
let a = 10;
let b = 20;

let isEqual = (a == b); //a is Equal b?
console.log('Is Equal Operator > ' + isEqual);

let isNotEqual = (a != b); //Is a not Equal b?
console.log('Is Not Equal Operator > ' + isNotEqual);

let x = 10; //Number
let y = '10'; //String

let normalEqual = (x == y); //Is x Equal y? *** Check Only Data Value
console.log('Normal Equal > ' + normalEqual);

let strictEqual = (x === y); // *** Check Data Value And Data Type
console.log('Strict Equal > ' + strictEqual);

let strictNotEqual = (x !== y); // Is x Not Equal y? Check Only Data
console.log('Strict Not Equal > ' + strictNotEqual);

//You can't check whether or not both the value and the data type are not the same? (!===) doesnt exsist? 

let strictNotEqualEqual = (x !== y);
console.log(strictNotEqualEqual);

a = 20

b = 10

let miguel = (a != b);
console.log(miguel);

let migig = ( a !== b);
console.log(migig);

let seven = ('7');
let number = ('11')
console.log(seven + number);
console.log(seven !== number);
console.log('50' + '5');

