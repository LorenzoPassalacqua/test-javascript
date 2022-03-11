    var name1;
    var surname;

console.log(name1);
console.log(surname);

function enter(){
    var age= parseInt(document.getElementById("age").value);
    name1= document.getElementById("firstname").value;
    surname= document.getElementById("surname").value;
   
    if (age < 18){
        document.getElementById("full").innerHTML= name1 +" "+  surname +  " is too young to vote";
    }
    else {
        document.getElementById("full").innerHTML= name1 + " " + surname + " it's old enough to vote";
    }
}
