var output = document.querySelector("#show");
var add = document.querySelector("#add");
var minus = document.querySelector("#minus");

var counter = 0;

add.addEventListener("click", () =>{
   
    counter = counter+1;
    output.innerText  = `${counter}`;
})

minus.addEventListener("click", ()=>{
    counter = counter-1;
    output.innerText = `${counter}`;
})


