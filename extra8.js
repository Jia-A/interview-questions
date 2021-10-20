var profile = document.querySelector("#name");
var checkBtn = document.querySelector("#check");
var output = document.querySelector("#output");

var url = "https://github.com"
function useUrl(value){
    var complete = url + "/" + value;
    return complete;
}



checkBtn.addEventListener("click", () =>{
    var val = profile.value;
    fetch(useUrl(val))
    

})