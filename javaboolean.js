function boo(){
    var x= document.getElementById("n1").value;
    var y= document.getElementById("n2").value;
    
    if (x > y){
       return document.getElementById("b").innerHTML= document.write("true");
    }

    if (!(x > y)){
       return document.getElementById("b").innerHTML= document.write("false");
    }

    if (x == y){
      return  document.getElementById("b").innerHTML= document.write("equal");
    }
}
