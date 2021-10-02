var readlineSync = require("readline-sync");

var news = readlineSync.question("Enter the news please.");

var source  =readlineSync.question("Enter the source of the news");

source = source.toLowerCase();
if(source === "facebook" || source ==="whatsapp" || source === "telegram"){
  console.log("Don't believe on this news.")
}
else{
  console.log("You found a correct news dude!!")
}
