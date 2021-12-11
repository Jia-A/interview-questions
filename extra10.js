var stockQuantity = document.querySelector("#quant");
var costPrice = document.querySelector("#cost");
var currentPrice = document.querySelector("#curr");
var checkBtn = document.querySelector("#check");
var outputDiv = document.querySelector("#output");

checkBtn.addEventListener("click", () =>{
    var stock = Number(stockQuantity.value);
    var cost = Number(costPrice.value);
    var current = Number(currentPrice.value);

    if((cost*stock)> (current*stock)){
        outputDiv.innerText = "You have earned a profit!!";
    }
    else if((cost*stock) < (current*stock)){
        outputDiv.innerText = "You are suffering a loss!!";
    }
    else{
        outputDiv.innerText = "You neither gained a profit or suffering a loss!!";
    }
})
