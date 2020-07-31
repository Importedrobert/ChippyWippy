// SELECTORS

const calculateButtonSelector = document.querySelector(".calculate-button");

// EVENT LISTENERS

calculateButtonSelector.addEventListener("click", changetxt)
resetButtonSelector.addEventListener("click", reset)

// VARIABLES


// FUNCTIONS

function changetxt() {

    document.getElementById('replace').innerHTML = "did it work?"

}
function reset() {

    document.getElementById('replace').innerHTML = " "

}