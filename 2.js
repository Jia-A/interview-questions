var inputSection = document.querySelector("#input");
var inputSize = document.querySelector("#input").style.fontSize;
var add = document.querySelector("#plus");
var reduce = document.querySelector("#minus");

var inp = inputSize.slice(0,-2);

add.addEventListener("click", ()=> {
    inputSection.style.fontSize = Number(inp) + 2 +"px";
    
})

minus.addEventListener("click", ()=> {
    inputSection.style.fontSize = Number(inp) - 2 +"px";
    
})