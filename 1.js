var num1 = document.querySelector("#firstNum");
var num2 = document.querySelector("#secondNum");
var addBtn = document.querySelector("#add");
var subBtn = document.querySelector("#sub");
var productBtn = document.querySelector("#product");
var divideBtn = document.querySelector("#divide");
var outputDiv = document.querySelector("#output");

addBtn.addEventListener("click", ()=>{
    var sum = Number(num1.value)+Number(num2.value);
    outputDiv.innerText = sum;
})

subBtn.addEventListener("click", ()=>{
    var minus = Number(num1.value)-Number(num2.value);
    outputDiv.innerText = minus;
})

productBtn.addEventListener("click", ()=>{
    var product = Number(num1.value)*Number(num2.value);
    outputDiv.innerText = product;
})

divideBtn.addEventListener("click", ()=>{
    var division = Number(num1.value)/Number(num2.value);
    outputDiv.innerText = division;
})
