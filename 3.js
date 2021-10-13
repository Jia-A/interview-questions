let inputSection = document.querySelector("#input");
let outputSection = document.querySelector("#output");
let h1 = document.querySelector("#head1");
let h2 = document.querySelector("#head2");
let h3 = document.querySelector("#head3");


h1.addEventListener("click", ()=>{
    //var size = 35;
    outputSection.innerHTML = `<h1>${inputSection.value}</h1>`;
    //outputSection.style.fontSize = `${size}px`;
})

// h2.addEventListener("click", ()=>{
//     var size = 31;
//     outputSection.innerText = `${inputSection.value}`;
//     outputSection.style.fontSize = `${size}px`;
// })

// h3.addEventListener("click", ()=>{
//     var size = 27;
//     outputSection.innerText = `${inputSection.value}`;
//     outputSection.style.fontSize = `${size}px`;
// })
