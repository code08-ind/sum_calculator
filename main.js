var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var textVal = document.getElementById('textVal');
var btn = document.getElementById('btn');

function calc(){
    var sum = parseInt(num1.value )+ parseInt(num2.value);
    textVal.innerText = `The Sum Of Two Numbers Is : ${sum}`;
}

