// SELECTORS
const calculateButtonSelector = document.querySelector(".calculate-button");
const resetButtonSelector = document.querySelector(".reset-button");
const buyInAmountSelector = document.querySelector(".buy-in-amount");

// EVENT LISTENERS
calculateButtonSelector.addEventListener("click", changetxt);
resetButtonSelector.addEventListener("click", reset);

// VARIABLES
const whiteChipValue = .05;
const redChipValue = .1;
const greenChipValue = .2;
const blueChipValue = .25;
const blackChipValue = .50;

// FUNCTIONS
function changetxt() {
    var buyInAmount = Number(buyInAmountSelector.value);

    // document.getElementById('replace').innerHTML = "did it work?";
    // document.getElementById("white-chip-count").innerHTML = "10";
}

function reset() {
    document.getElementById('replace').innerHTML = " ";
    document.getElementById("white-chip-count").innerHTML = "";
    document.getElementById("red-chip-count").innerHTML = "";
    document.getElementById("green-chip-count").innerHTML = "";
    document.getElementById("blue-chip-count").innerHTML = "";
    document.getElementById("black-chip-count").innerHTML = "";
}