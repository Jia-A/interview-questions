var inputSection = document.querySelector("#input");
var add = document.querySelector("#plus");
var reduce = document.querySelector("#minus");



var size = 20;

add.addEventListener("click", ()=> {
    size = size+2;
    inputSection.style.fontSize = `${size}px`;
    
})

minus.addEventListener("click", ()=> {
    size = size-2;
    inputSection.style.fontSize = `${size}px`;
    
})