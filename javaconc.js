function phrase(){
    var x= "this phrase ";
    var y= "is ";
    var z= "concatenated";
    let result= x.concat(y, z);

    document.getElementById("conc").innerHTML= result;
}

function piece(){
    const t= [11, 5, 10, 8, 14]
    const f= t.slice(2, 5);

    document.getElementById("sli").innerHTML=f;
}

function string(){
    var b= 19;
    var c= b.toString(2);

    document.getElementById("string").innerHTML= c;
}


function precision(){
    var m= 123.6748;
    var n= m.toPrecision(5);

    document.getElementById("prec").innerHTML= n;
}