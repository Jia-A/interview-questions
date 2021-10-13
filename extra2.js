var head = document.querySelector("#value");
var add = document.querySelector("#plus");
var reduce = document.querySelector("#minus");
let count = 0;
head.innerText  = "0";

add.addEventListener("click", ()=>
{
    count=count+1;
    head.innerText = count;
})

reduce.addEventListener("click", () =>
{
    count = count-1;
    head.innerText = count;
})
