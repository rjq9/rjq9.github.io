var r = 255; //this stuff can be improved so much but whatever
var g = 255;
var b = 255;
function sliderChange(){
  document.getElementById("rold").innerHTML = "red value: " + r;
  document.getElementById("gold").innerHTML = "green value: " + g;
  document.getElementById("bold").innerHTML = "blue value: " + b;
  document.body.style.backgroundColor = ("rgb("+r+","+g+","+b+")")
  changeStyleText();
}
function changeStyleText(){
  var csstext;
  csstext = "body {<br>" + "  background-color: " + "rgb("+r+","+g+","+b+");" + "<br>}";
  document.getElementById("copy").innerHTML=csstext;

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
function copy(){
  const cb = navigator.clipboard;
  const paragraph = document.querySelector('pre'); 
  cb.writeText(paragraph.innerText).then(() => document.getElementById("iscopied").innerHTML = "Copied!"); 
  //https://dev.to/tqbit/how-to-use-javascript-to-copy-text-to-the-clipboard-2hi2
}

