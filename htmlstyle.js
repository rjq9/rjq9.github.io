/*
TODO: 
add CSS copyable,
figure out how to make efficient by only updating necessary text
somehow fuse bgrupdate() and tcupdate()
*/
bColorList = [255, 255, 255];
tColorList = [0, 0, 0]; //may want to update this system later using some form of nested array/dictionary
function bgrupdate(){
  document.getElementById("accusative").style.backgroundColor = ("rgb("+bColorList[0]+","+bColorList[1]+","+bColorList[2]+")");
  document.getElementById("bgrvalshow").innerHTML = ("R: " + bColorList[0] + " G: " + bColorList[1] + " B: " + bColorList[2]);
}
function tcupdate(){
  document.getElementById("accusative").style.color = ("rgb("+tColorList[0]+","+tColorList[1]+","+tColorList[2]+")");
  document.getElementById("tcvalshow").innerHTML = ("R: " + tColorList[0] + " G: " + tColorList[1] + " B: " + tColorList[2]);
}
//Since both these functions are very similar, it could probably be condensed further.
function bgrnv(val, color){ //standing for background new value
  bColorList[color] = val;
  document.getElementById("preview").style.backgroundColor = ("rgb("+bColorList[0]+","+bColorList[1]+","+bColorList[2]+")");
}
function tcnv(val, color){
  tColorList[color] = val;
  document.getElementById("preview").style.color = ("rgb("+tColorList[0]+","+tColorList[1]+","+tColorList[2]+")");
}