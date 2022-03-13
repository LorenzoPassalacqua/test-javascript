function maggiorenne(){
    var x= document.getElementById("adult").value;
    function mag(){    
    var maggiorenne= (x < 18) ? "you are too young to vote" : "you are old enought to vote";
    return maggiorenne;
    }
    document.getElementById("mag").innerHTML= mag();
}

class nvoter {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

function voter(){
  const mvoter = new nvoter(document.getElementById("name").value, document.getElementById("surname").value);
  document.getElementById("full").innerHTML =
  mvoter.name + " " + mvoter.surname;
}