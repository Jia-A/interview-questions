var output = document.querySelector("#output");
var btn = document.querySelector("#check");

var url = "https://mystery-api.kushanksriraj.repl.co/get";

btn.addEventListener("click", ()=>{
    fetch(url)
    .then(res => {
        if (res.status === 404){
            output.innerText = "User Not Found, Sorry!!";
        }
        else if (res.status === 401){
            output.innerText = "User not logged in!";
        }
        else{
            output.innerText = "You're good to go!";
        }
    })
})