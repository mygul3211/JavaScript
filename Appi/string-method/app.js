let text = "Miguel, Angel, Gabby";
let text1 = "Hello";
let text2 = "Miguel";
let str = "Hello World";

console.log(text.slice(0, 6)); // Slice
console.log(text.toLowerCase()); // lower case
console.log(text.charAt(5)); // one character
console.log(text.length); // length
console.log(text1.concat(" ", text2)); // put two strings together


let cut1 = str.slice(0, 5);
let cut2 = str.slice(6, 11);
console.log(cut2.concat(cut1));