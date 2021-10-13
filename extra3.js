var input= document.querySelector('#value');
var less = document.querySelector("#less");
var more = document.querySelector("#more");

let bord = 2;

less.addEventListener("click", ()=>
{
   
    bord = bord + 5;
    input.style.border = bord+"px";
})

more.addEventListener("click", ()=>
{
    console.log("jiya");
    bord = bord+10;
    input.style.border = bord+"px";
})