let total = document.getElementById('total-price-id');

let count = document.getElementById('count-id');


function plus() {
    count.innerText = Number(count.innerText) + 1;
    total.innerText = Number(total.innerText) + 1000;
}

function minus() {
    if (count.innerText > 0) {
        count.innerText = Number(count.innerText) - 1;
        total.innerText = Number(total.innerText) - 1000;
    }
}