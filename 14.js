var Sita ={
    name  : "Ram",
    age  :25,
    yuga : "Treta",
    power : 2500,
};

var Radha = {
    name  : "Krishna",
    age :31,
    yuga : "Dwapar",
    power : 2325,
}
function powerful(x, y){
    if(x.power>y.power){
        console.log(x.name +" is more powerful than "+y.name);
    }
    else{
        console.log(y.name +" is more powerful than "+x.name);
    }
}

function elder(x, y){
    if(x.age>y.age){
        console.log(x.name + " is older than "+y.name);
    }
    else{
        console.log(y.name + " is older than "+x.name);
    }
}

elder(Sita , Radha)
powerful(Sita, Radha)