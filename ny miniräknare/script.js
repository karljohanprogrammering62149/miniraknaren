

const elemBtnCalc = document.getElementById("btn-calc");
const elemCalcScreen = document.getElementById("calc-screen");


function btnCalc() {                    // denna funktion tar hand om beräkningen 
    /* your code here */
    sum = result;

    elemCalcScreen.innerHTML = sum;     // show the result on screen
}

function addDigit(thisSign) {           // lägg till siffra
    elemCalcScreen.innerHTML += thisSign;
}

function btnBackSpace() {               // ta bort
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = calcScreen.slice(0, -1);
    elemCalcScreen.innerHTML = calcScreen;
    
}
 

function btnClearAll() {
    elemCalcScreen.innerHTML = ""
}

function btnConvertToEuro() {
    elemCalcScreen.innerHTML += "*"
}

function btnConvertToDollar() {
    elemCalcScreen.innerHTML += "-"
}
function btnSqrt() {
    elemCalcScreen.innerHTML **= 0.5
}
function btnConvertNegative() {
    result3 = elemCalcScreen.innerHTML *= (-1);
    elemCalcScreen.innerHTML = result3;
}
function btnSquare() {
     elemCalcScreen.innerHTML += "^"
}
function divide() {
    elemCalcScreen.innerHTML += "/"
    
    
}
function addition() {
    elemCalcScreen.innerHTML += "+"
}
function sum() {
    result = elemCalcScreen.innerHTML;
    result = result.replaceAll("^", "**");
    elemCalcScreen.innerHTML = eval(result);
}