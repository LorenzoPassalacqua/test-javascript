var family= ["Dad", "Mom", "Son", "Daughter"]; //family array

function Rfamily(){
document.getElementById("random").innerHTML= family [Math.floor(Math.random()*family.length)]; //randomly gets a name from the array
}

function conc(){
    var sentence= "I would like something to drink like";
    sentence+= " some pepsi";
    document.getElementById("conc").innerHTML= sentence;
}