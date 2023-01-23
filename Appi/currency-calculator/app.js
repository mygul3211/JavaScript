
function calculate() {
    let dollar = document.getElementById('dollar-id');

    let yen = document.getElementById('yen-id');

    let results = dollar.value * 137.71

    yen.value = results
}

function reset() {
    let dollar = document.getElementById('dollar-id');

    let yen = document.getElementById('yen-id');

    let results = dollar.value * 137.71
    
    yen.value = 0
    dollar.value = 0
}