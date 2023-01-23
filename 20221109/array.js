let a = 1;
let b = 2;
let c = 3;
let d = 4;

let arr = [a, b, c, d]; //empty array declaration 

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

let strArr = ['orange', 'apple', 'pineapple', 'watermelon'];

console.log(strArr[3]);
 
let empArr = []; // empty array declaration 

let carArr = ['Suzuki', 'Landcruiser', 'Rolls Royce', 'Ferrari'];

carArr [0] = 'Nissan';
carArr [1] = 'Opel';

console.log(carArr[0]);
console.log(carArr[1]);
console.log(carArr[2]);
console.log(carArr[3]);

// ---------------------------------------------------
let s = 'this is test';
console.log(s[9]);

let boolArr = [true, false, true, true, false, false];

console.log(boolArr[0]);
console.log(boolArr[1]);
console.log(boolArr[2]);
console.log(boolArr[3]);
console.log(boolArr[4]);
console.log(boolArr[5]);

let mixArr = [1, 'hello', true, false, 'nice', 999];

console.log(mixArr[0]);
console.log(mixArr[1]);
console.log(mixArr[2]);


arr.unshift(10);
console.log(arr);

arr.shift();
arr.shift();
console.log(arr);