let months = ["January", "Feburuary", "March", "April", "May", "June", "July", "August", "September", "October"
, "November", "December"];

let ranNumber = Math.floor(Math.random() * 12);

let monthDisplay = document.getElementById('show-months');

console.log(ranNumber);

function showRandomMonth() {

    ranNumber = Math.floor(Math.random() * 12);
    
    monthDisplay.innerText = (months[ranNumber]);
}