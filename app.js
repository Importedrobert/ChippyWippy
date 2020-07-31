// SELECTORS
const calculateButtonSelector = document.querySelector(".calculate-button");
const whiteInputSelector = document.querySelector(".white-input");
const redInputSelector = document.querySelector(".red-input");
const greenInputSelector = document.querySelector(".green-input")
const blueInputSelector = document.querySelector(".blue-input")
const blackInputSelector = document.querySelector(".black-input")

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
    if (whiteInputSelector.value >=0) {
        chipValueTotal = Number(whiteInputSelector.value) * whiteChipValue + chipValueTotal;
    }
    if (redInputSelector.value >=0) {
        chipValueTotal = Number(redInputSelector.value) * redChipValue + chipValueTotal;
    }
    if (greenInputSelector.value >=0) {
        chipValueTotal = Number(greenInputSelector.value) * greenChipValue + chipValueTotal;
    }
    if (blueInputSelector.value >=0) {
        chipValueTotal = Number(blueInputSelector.value) * blueChipValue + chipValueTotal;
    }
    if (blackInputSelector.value >=0) {
        chipValueTotal = Number(blackInputSelector.value) * blackChipValue + chipValueTotal;
    }
    alert(chipValueTotal);

}