function add(){
    var n= 5 + 4;
    document.getElementById("plus").innerHTML = "5 + 4 = "+ n;
}

function sub(){
    var n1= 5 - 4;
    document.getElementById("minus").innerHTML = "5 - 4 =" + n1;
}

function multi(){
    var n2= 5 * 4;
    document.getElementById("times").innerHTML = "5 * 4 =" + n2;
}

function div(){
    var n3= 10 / 5;
    document.getElementById("division").innerHTML = "10 / 5 =" + n3;
}

function remi(){
    var n4= 26 % 6;
    document.getElementById("mod").innerHTML = "reminder of 26 / 6 is" +n4;
}

function addOne(){
    var n5= 5;
    n5++;
    document.getElementById("add1").innerHTML= document.write(n5);
}

function subOne(){
    var n6= 5;
    n6--;
    document.getElementById("minus1").innerHTML= document.write(n6);
}

function random(){
    var n7= [4, 5, 6, 7, 8, 9];
    document.getElementById("random").innerHTML= n7 [Math.floor(Math.random()*n7.length)];
}