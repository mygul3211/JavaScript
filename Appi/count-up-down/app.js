// Before Update
let title = document.getElementById('title-id'); // get h1 Element by using its id
console.log(title); // h1 Element
console.log(title.innerText); // Content of h1 Element

// After Update
console.log(title.innerText);

// ---------------------------------------------------------------------

// Do rhis function when + button is clicked
function increment() {
    let countText = document.getElementById('count-num-id');

    // let a = 0
    // a = a + 1
    // console.log(countText.innerText); 
    countText.innerText = Number(countText.innerText) + 1;
}

function reset() {
    let countText = document.getElementById('count-num-id')

    countText.innerText =  0;
}

// Do this function when - button is clicked
function decrement() {
    let countText = document.getElementById('count-num-id');

    countText.innerText = countText.innerText  - 1;
}