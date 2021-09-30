var inputSection = document.querySelector("#input");

var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");

red.addEventListener("click", ()=>{
    inputSection.style.color = "red";
})

green.addEventListener("click", ()=>{
    inputSection.style.color = "green";
})

blue.addEventListener("click", ()=>{
    inputSection.style.color = "blue";
})