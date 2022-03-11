function boo(){
    var b= document.getElementById("b");
    var b1= document.getElementById("b1");
    var b2= document.getElementById("b2");
    var b3= document.getElementById("b3");
    var b4= document.getElementById("b4");

    b.innerHTML=""
    b1.innerHTML=""
    b2.innerHTML=""
    b3.innerHTML=""
    b4.innerHTML=""

    var x= parseInt(document.getElementById("n1").value);
    var y= parseInt(document.getElementById("n2").value);

    if (x > y){
      b.innerHTML="true ";
    }

    if (!(x >= y)){
      b1.innerHTML="false ";
    }

    if (x == y){
      b2.innerHTML="equal ";
    }

    if (x > 5 && y > 2){
      b3.innerHTML="x is greater than 5 and y is greater than 2 ";
    }

    if (x > 10 || y > 10){
       b4.innerHTML="one of the numbers is greater is than 10 ";
    }
}
