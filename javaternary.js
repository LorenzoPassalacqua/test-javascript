function maggiorenne(){
    var x= document.getElementById("adult").value;
    var maggiorenne= (x < 18) ? "you are too young to vote" : "you are old enought to vote";
    document.getElementById("mag").innerHTML= maggiorenne;
}


function voter(){
class nvoter {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  }
  
  const mvoter = new nvoter("lorenzo", "passalacqua");
  document.getElementById("full").innerHTML =
  mvoter.name + " " + mvoter.surname;
}