var inputSection = document.querySelector("#input");
var big = document.querySelector("#big");
var bigger = document.querySelector("#bigger");
var biggest = document.querySelector("#biggest");
var h1 = document.querySelector("#head1");
var h2 = document.querySelector("#head2");
var h3 = document.querySelector("#head3");

h1.addEventListener("click", ()=>{
    
    console.log("jiya")
    big.innerText = inputSection.value;
})

h2.addEventListener("click", ()=>{
    
    console.log("jiy")
    bigger.innerText = inputSection.value;
})

h3.addEventListener("click", ()=>{
    
    console.log("ji")
    biggest.innerText = inputSection.value;
})
