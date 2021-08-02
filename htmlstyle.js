/*
TODO: 
figure out to combine all into 3 functions: update display, update preview, ~~update variables~~ [update variables done]
*/

colorValues = {
  bgr: [255, 255, 255],
  tc: [0, 0, 0]
}
cssUpdateLocations = {
  bgrUpdate: 'backgroundColor',
  tcupdate: 'color'
}
function updateDisplay(UpdateLocation){
  document.getElementById("accusative").style[cssUpdateLocations[UpdateLocation]] = colorValues
}
function bgrupdate(){ //TOREMOVE
  document.getElementById("accusative").style.backgroundColor = ("rgb("+colorValues.bgr[0]+","+colorValues.bgr[1]+","+colorValues.bgr[2]+")");
  document.getElementById("bgrvalshow").innerHTML = ("R: " + colorValues.bgr[0] + " G: " + colorValues.bgr[1] + " B: " + colorValues.bgr[2]);
}
function tcupdate(){ //TOREMOVE
  document.getElementById("accusative").style.color = ("rgb("+tColorList[0]+","+tColorList[1]+","+tColorList[2]+")");
  document.getElementById("tcvalshow").innerHTML = ("R: " + tColorList[0] + " G: " + tColorList[1] + " B: " + tColorList[2]);
}
//Since both these functions are very similar, it could probably be condensed further.
function bgrnv(){ //standing for background new value TOREMOVE
  x = colorValues.bgr;
  document.getElementById("preview").style[colorValues[bgrUpdate]] = ("rgb("+bColorList[0]+","+bColorList[1]+","+bColorList[2]+")");
}
function tcnv(){ //TOREMOVE
  document.getElementById("preview").style.color = ("rgb("+tColorList[0]+","+tColorList[1]+","+tColorList[2]+")");
}
function updateVars(val, pos, valType){
  colorValues[valType][pos] = val;
  
}