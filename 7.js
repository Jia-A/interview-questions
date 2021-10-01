var input = document.querySelector("#input");
var btn = document.querySelector("#check-btn");
var output = document.querySelector("#head");

var url ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


var inputVal= input.value;
 function withName(text){
     return url+"?text="+text;
 }
btn.addEventListener("click", ()=>{

    
    
   fetch(withName(input.value))
  .then(res => res.json())
  .then(data => {
      var name = data.contents.text;
     output.innerText = "Your name is " + name;

 })
})