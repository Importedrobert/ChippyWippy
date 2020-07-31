// SELECTORS
const calculateButtonSelector = document.querySelector(".calculate-button");
const whiteInputSelector = document.querySelector(".white-input");
const redInputSelector = document.querySelector(".red-input");
const greenInputSelector = document.querySelector(".green-input");
const blueInputSelector = document.querySelector(".blue-input");
const blackInputSelector = document.querySelector(".black-input");

// EVENT LISTENERS
calculateButtonSelector.addEventListener("click", calculate);

// VARIABLES
const whiteChipValue = .05;
const redChipValue = .1;
const greenChipValue = .2;
const blueChipValue = .25;
const blackChipValue = .50;

// FUNCTIONS
function calculate() {
    var chipValueTotal = 0;
    var whiteChipValueT = whiteInputSelector.value;
    var redChipValueT = redInputSelector.value;
    var greenChipValueT = greenInputSelector.value;
    var blueChipValueT = blueInputSelector.value;
    var blackChipValueT = blackInputSelector.value;

    if (whiteInputSelector.value >=0) {
        chipValueTotal = Number(whiteInputSelector.value) * whiteChipValue + whiteChipValueT;
    }
    if (redInputSelector.value >=0) {
        chipValueTotal = Number(redInputSelector.value) * redChipValue + redChipValueT;
    }
    if (greenInputSelector.value >=0) {
        chipValueTotal = Number(greenInputSelector.value) * greenChipValue + greenChipValueT;
    }
    if (blueInputSelector.value >=0) {
        chipValueTotal = Number(blueInputSelector.value) * blueChipValue + blueChipValueT;
    }
    if (blackInputSelector.value >=0) {
        chipValueTotal = Number(blackInputSelector.value) * blackChipValue + blackChipValueT;
    }
    alert(whiteChipValueT+" White " + redChipValueT+" red " + greenChipValueT+" green " + blueChipValueT+" blue " + blackChipValueT+" black ");

}


