"use strict";



let addition = document.querySelector("#calculator .btn-addition")
let subtraction = document.querySelector("#calculator .btn-subtraction")
let multiplication = document.querySelector("#calculator .btn-multiplication")
let division = document.querySelector("#calculator .btn-division")




function Sum() {

    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value

    let sum = Number(num1) + Number(num2);
    

    let endResult = document.getElementById("result");
    endResult.value = sum;

}



addition.addEventListener("click", Sum)




function Subtraction() {

    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value

    let sum = Number(num1) - Number(num2);
    

    let endResult = document.getElementById("result");
    endResult.value = sum;

}

subtraction.addEventListener("click",Subtraction)



function Multiplication() {

    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value

    let sum = Number(num1) * Number(num2);
    

    let endResult = document.getElementById("result");
    endResult.value = sum;

}

multiplication.addEventListener("click", Multiplication)



function Division() {

    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value

    let sum = Number(num1) / Number(num2);
    

    let endResult = document.getElementById("result");
    endResult.value = sum;

}

division.addEventListener("click", Division)


    












