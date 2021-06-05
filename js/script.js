// Wait until the DOM has loaded before running the app
// Get the button elements, and add event listeners to them

function init() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "increment") {
                document.getElementById("answer-box").stepUp(1);
            } else if (this.getAttribute("data-type") === "decrement") {
                document.getElementById("answer-box").stepDown(1);
            } else if (this.getAttribute("data-type") === "submit") {
                let userAnswer = parseInt(document.getElementById("answer-box").value);

            } else {
                let gameType = this.getAttribute("data-type");
            }
        });
    }
    initDefault();
    //Sets the initial hole number to the first hole
    document.getElementById("hole-count").innerHTML = 1;
    // Sets the par value of the first hole from the score card table to the score box when the page loads
    document.getElementById("answer-box").value = document.getElementsByTagName('tr')[count + 1].children[1].innerHTML.trim();
    console.log("This item is in initDefault " + document.getElementsByTagName('tr')[count + 1].children[1].innerHTML.trim());
}

document.addEventListener("DOMContentLoaded", init);

//Function to get the players name and enter it at the top of the score card
function getInputValue() {
    let inputVal = document.getElementById("name").value;
    document.getElementById("player-name").innerHTML = inputVal;
    return inputVal;
}

let count;
let btn = document.getElementById("submitBtn");
let holeCount;
let array;

//Sets the count to zero and the array to zero at the start and the end
function initDefault() {
    count = 0;
    holeCount = document.getElementById("hole-count");
    console.log("Hole count in initDefault " + holeCount)
    array = [];
}

//Function to calculate the total number of strokes
function getArrayTotal() {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

function putTotal() {
    totalScore = document.getElementById("total-score").innerHTML;


}

btn.onclick = function() {
    let inputElement = document.getElementById("answer-box");
    let answer = parseInt(inputElement.value);
    array.push(answer);
    console.log("This is the array " + array);
    console.log("This is the answer " + answer);
    document.getElementById('result' + count).innerHTML = array[array.length - 1];
    let trCollection = document.getElementsByTagName('tr');
    let iThValue = trCollection[count + 2].children[1].innerHTML;
    if (iThValue)
        iThValue = iThValue.trim();
    inputElement.value = iThValue;
    if (count < 8) {
        console.log("This is the count value " + count);
        ++count;
        holeCount.innerHTML = count + 1;
    } else {

        alert("Congratulations," + getInputValue().split([0]) + " you got a total of " + getArrayTotal());
        init();

    }
    console.log("The value of inputElement(value) is " + (iThValue));
    console.log(array);



}