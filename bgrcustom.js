var r = 255;
var g = 255;
var b = 255;
function sliderChange(){
  document.getElementById("rold").innerHTML = "red value: " + r;
  document.getElementById("gold").innerHTML = "green value: " + g;
  document.getElementById("bold").innerHTML = "blue value: " + b;
  document.body.style.backgroundColor = ("rgb("+r+","+g+","+b+")")
}
  
function sliderChangeR(val){
  r = val;
  document.getElementById("rValue").innerHTML = "red value: " + r;
  box()
  
}

function sliderChangeG(val){
  g = val;
  document.getElementById("gValue").innerHTML = "green value: " + g;
  box()
}

function sliderChangeB(val){
  b = val;
  document.getElementById("bValue").innerHTML = "blue value: " + b;
  box()
}
function box(){
  document.getElementById("colorbox").style.backgroundColor = ("rgb("+r+","+g+","+b+")")
}
