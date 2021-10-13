var input =document.querySelector("#password");
var btn = document.querySelector("#check");
var output = document.querySelector("#output");

btn.disabled =false;

btn.addEventListener("click", ()=>
{
    var value = input.value;
    
    if (value.length<10){
        btn.disabled =true;
        output.innerText = "Can't move forwards becuase password length should be greater than 10.";
        input.style.backgroundColor ="red";
    }
    else{
        btn.disabled=false;
        output.innerText = "You're good to go."
        input.style.backgroundColor = "green";
    }
})