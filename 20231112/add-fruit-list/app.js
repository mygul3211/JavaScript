function addItem() {
    let fruitInput = document.getElementById('fruitInput-id');

    let fruitList = document.getElementById('fruitList-id');

    if (fruitInput.value.trim() != "") {
        fruitList.innerHTML = '<div class="fruit">' + fruitInput.value + '</div>' + fruitList.innerHTML;
    }
}