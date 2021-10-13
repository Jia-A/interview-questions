var input = document.querySelector("#input");
var inpLen = document.querySelector("#input").maxlength;
let count = 0;
input.addEventListener("keyup" ,() =>
{
    count =count+1;
    if (count>49){
        input.disabled = true;
    }
})

