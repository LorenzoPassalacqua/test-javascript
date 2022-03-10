function boo(){
    var x= document.getElementById("n1").value;
    var y= document.getElementById("n2").value;
    
    if (x > y){
      document.getElementById("b").innerHTML= document.write("true, ");
    }

    if (!(x >= y)){
      document.getElementById("b").innerHTML= document.write("false, ");
    }

    if (x == y){
      document.getElementById("b").innerHTML= document.write("equal, ");
    }

    if (x > 5 && y > 2){
      document.getElementById("b").innerHTML= document.write("x is greater than 5 and y is greater than 2 ")
    }

    if (x > 10 || y > 10){
       document.getElementById("b").innerHTML= document.write("one of the numbers is greater is than 10 ")
    }
}
