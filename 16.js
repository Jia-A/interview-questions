var Sita ={
    name  : "Ram",
    age  :25,
    yuga : "Treta",
    power : 2500,
    length :0,
};

var Radha = {
    name  : "Krishna",
    age :31,
    yuga : "Dwapar",
    power : 2325,
    length : 0,
}

function lengthCalc(x, y){
    var leng1 = x.name.length;
    var leng2 = y.name.length;
    leng1 = leng1*35;
    leng2 = leng2*35;
    namePower(leng1, leng2)
}

function namePower(x, y){
    if(x>y){
        console.log("Ram has more powerful name.");
    }
    else{
        console.log("Krishna has more powerful name");
    }
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
lengthCalc(Sita, Radha)