// For Loop

// 1) initialize value
// 2) condition
// 3) increase or decrease
for (let i = 0; i < 5; i++) {
 
    console.log(i);
    console.log('Hello World');
}

let numList = document.getElementById('num-list');

let fruitArr = ['Apple','Orange','Banana','Pineapple','Lemon'];

for (let i = 0; i < 5; i++) {
    numList.innerHTML = numList.innerHTML + '<li>' + fruitArr[i] + '</li>'; 
}