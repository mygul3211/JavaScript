let s = 'hello nice to meet you';

// string split -> return array
let splitResult = s.split(' ');
console.log(splitResult);

let s1 = 'orange:pineaple:banana:lime';

let splitResult1 = s1.split(':');
console.log(splitResult1);

let s2 = '1,2,3,4,5';

let splitResult2 = s2.split(',');
console.log(splitResult2);

let s3 = 'bi bit bitc bitch';

let splitResult3 = s3.split(' ');
console.log(splitResult3);

let str = "Please locate where 'locate' occcurs!";

let pos = str.indexOf('locate');
console.log(pos);

let pos1 = str.lastIndexOf('locate');
console.log(pos1);

let pos2 = str.indexOf('locates');
console.log(pos2);

// includes
let isInclude = str.includes('locate');
console.log(isInclude);

let str1 = 'abcdef'
let str2 = 'not enough'

let isStartWithA = str1.startsWith('a');
console.log(isStartWithA);

let isStartWithNot = str2.startsWith('not');
console.log(isStartWithNot);

let isEndWithA = str1.endsWith('a');
console.log(isEndsWithA);
