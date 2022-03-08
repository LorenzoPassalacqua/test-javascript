function dict(){
    var car= {
        engine: "four cilinder",
        wheels: "four",
        doors: "two",
        windows: "four",
    };
    delete car.engine;
    document.getElementById("dictionary").innerHTML= car.engine;
}