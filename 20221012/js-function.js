function greeting() {
    //process
    console.log('This is void function.');
}

greeting();


function greetingWithName(name) {
    console.log('Welcome ' + name);
}

greetingWithName('Miguel');

function selfIntroduction(name, age) {
    console.log('My name is ' + name);
    console.log('I am ' + age);
}

selfIntroduction('Miguel', 25);

function findMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let maxResult = findMax(2, 5);
console.log(maxResult);

function findMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let minResult = findMin(-5, -2);
console.log(minResult);

function findmax(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if(b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

maxResult = findMax(2, 5, 1)
console.log(maxResult);

function findMax(a, b ,c, d) {
    if (a > b && a > c && a > d) {
        return a
    } else if (b > c && b > d) {
        return b;
    } else if (c > d) {
        return c;
    } else return d;
}

maxResult = findMax(3, -9, 4, -5);
console.log(maxResult);

function findMiddleNumber(a, b, c) {
    if ((a > b && a < c) || (a > c && a < b)) {
        return a;
    } else if ((b > a && b < c) || (b > c && b < a)) {
        return b;
    } else {
        return c;
    }
}

findMiddleNumber(1, 2, 3);

console.log(findMiddleNumber);

let formattedTime = changeTime(1);
console.log(formattedTime);
changeTime(1);
changeTime(12);
changeTime(24);

function changeTime(time) {
    if (time > 12) {
        return (time - 12) + 'PM'; 
    } else {
        return 1 + ' AM';
    }
}



function diff21(n) {
    if (diff21(19) > n) {
        return 2; 
    } else {
        if (diff21(10) > n) {
            return 11;
        } else {
            (diff21(21) > n); {
                return 0;
            }
        }
    }
}