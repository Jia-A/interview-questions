var inputSection = document.querySelector("#input");
var outputSection = document.querySelector("#output");
var h1 = document.querySelector("#head1");
var h2 = document.querySelector("#head2");
var h3 = document.querySelector("#head3");


h1.addEventListener("click", ()=>{
    var size = 35;
    outputSection.innerText = `${inputSection.value}`;
    outputSection.style.fontSize = `${size}px`;
})

h2.addEventListener("click", ()=>{
    var size = 31;
    outputSection.innerText = `${inputSection.value}`;
    outputSection.style.fontSize = `${size}px`;
})

h3.addEventListener("click", ()=>{
    var size = 27;
    outputSection.innerText = `${inputSection.value}`;
    outputSection.style.fontSize = `${size}px`;
})
