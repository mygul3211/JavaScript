function calculateCash() {
    console.log('i am here');
    let amountInput = document.getElementById('amount-id');
    let taxInput = document.getElementById('tax-id');
    let taxAmountShow = document.getElementById('totalResult');

    console.log(amountInput.value);
    console.log(taxInput.value);

    //Calculate tax
    let taxAmount = (amountInput.value) * (taxInput.value/100);

    //Amount + Tax
    let totalAmount = Number(amountInput.value) + Number(taxAmount);
  
    //Show in HTML Element
    taxAmountShow.innerText = totalAmount;
}