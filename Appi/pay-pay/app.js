let chargeAmount = document.getElementById('charge-amount-id');

function plusCharge(amount) {
    chargeAmount.value = Number(chargeAmount.value) + amount;
}

function minusCharge(amount) {
    if (chargeAmount.value >= amount) {
        chargeAmount.value = Number(chargeAmount.value) - amount;
    }
}
