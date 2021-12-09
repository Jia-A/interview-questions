var inpVal = document.querySelector("#input-text");
var clickBtn = document.querySelector("#check");
var outputDiv = document.querySelector("#output");

clickBtn.addEventListener("click", () =>{

    
    var val =Number(inpVal.value);
    if(typeof(val) == 'number'){
        if(val%2===0){
            outputDiv.innerText = "Even"
        }
        else{
            outputDiv.innerText = "Odd"
        }
    }
    else{
        outputDiv.innerText = "Invalid input."
    }
})
