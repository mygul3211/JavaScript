/**
 * JS Function void && return
 */
// dead code
function voidFunction() {
    console.log('This is void function' + param1);
}

voidFunction(123);

function findMax(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

let maxNum = findMax(2, 4);
console.log('Maximum number of 2,4 is ' + maxNum);

maxNum = findMax(58, 12);
console.log('Maximum number of 58,12 is ' + maxNum);

function findMax(a, b, c) {
    if (a > b && a > c) {
        return a;
    }

    if (b > c) {
        return b;
    } else {
        return c;
    }
}

function findMax(a, b, c, d) { //  100 , 200
    if (a > b && a > c && a > d) {
        return a;
    } else if (b > c && b > d) {
        return b;
    } else if (c > d) {
        return c;
    } else {
        return d;
    }
}

console.log(' 4params ' + findMax(9, 60, 100, 200));


function findDiplicateNumber(a, b, c) {

    return NaN;
}

findDuplicateNumber(1, 2, 2);
findDuplicateNumber(5, 5, 4);
findDuplicateNumber(4, 5, 4);
findDuplicateNumber(1, 2, 3);


function checkEvenOrOdd(num) {
    checkEvenOrOdd(5);
    checkEvenOrOdd(6);
    checkEvenOrOdd(11);
    checkEvenOrOdd(20);

    return num + 'is odd number';
    return num + 'is even number';
}