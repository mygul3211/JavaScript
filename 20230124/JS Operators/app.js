let a = 20;
let b = a + 20;

console.log(a);
console.log(b);

a++;
console.log(a); //21
console.log(a++); //21 -> 22
console.log(a); //22
console.log(++a); // 23

a += 10; // a = a + 10
a -= 10; // a = a - 10
a /= 10; // a = a / 10
a *= 10; // a = a * 10
a %= 10; // a = a % 10

let c = 0;
let d = 0;
let e = (c += 20) - (d++); // d++ in let e is declaring the value of d so when its 
//called again instead of 0 the value changes to 1.

console.log(c);
console.log(d);
console.log(e); 


let f = 0;
let g = 0;
let h = (f++) + (f--) + (++f); //1
let i = f + (h += 3) + (f++);

console.log(f);
console.log(g);
console.log(h);
console.log(i);

//f-- is equvalent to f = f - 1

//++f changes the value 
//f++ only declares the value and the value changes once it is called again.