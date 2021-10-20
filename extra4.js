var input = document.querySelector("#inp");
var btnCheck = document.querySelector("#check");

btnCheck.addEventListener("click", () =>
{
    var val = input.value;
    var leng = val.length;
    if(leng % 3 ===0){
        input.style.color = "red";
    }

}
)