var btnCheck = document.querySelector("#check");
var output = document.querySelector("#show");

btnCheck.addEventListener("click", ()=> {


var url = "https://mock-practice.prakhar10v.repl.co/items";

var cost =0;
var higher = 0;
var highItem = "";
fetch(url)
.then(res => res.json())
.then(json =>
    {
        
        
        for(var i=0;i<json.length;i++){
            cost= json[i].price;
            var itemName = json[i].item;
            if(cost>higher){
                higher=cost;
                highItem = itemName;
            }
        
        }
        output.innerText = "Name of the item with highest price is "+ `${highItem}` + " and its price is "+`${higher}`
        
    }
    )

})