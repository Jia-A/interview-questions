var input = document.querySelector("#enter");
var btnCheck = document.querySelector("#check");
var show = document.querySelector("#show");
let vowel = 0;
let consonant = 0;
btnCheck.addEventListener("click", () =>{
 
    var arr = input.value.split("");
    for(var i = 0; i<arr.length;i++){
        if(arr[i]==="a" || arr[i]==="e" || arr[i]==="i" || arr[i]==="o" || arr[i]==="u"){
            vowel++;
        }
        else{
            consonant++;
        }
    }
    show.innerText = "Vowels in the above string are " + `${vowel}` + " and consonants are "+`${consonant}`;
})