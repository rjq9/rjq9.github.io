bColorList = [255, 255, 255]
tColorList = [0, 0, 0] //may want to update this system later using some form of nested array/dictionary
function bgrupdate(){
  document.getElementById("accusative").style.backgroundColor = ("rgb("+bColorList[0]+","+bColorList[1]+","+bColorList[2]+")")
}
function tcupdate(){
  document.getElementById("accusative".style.color = ("rgb("+tColorList[0]+","+tColorList[1]+","+tColorList[2]+")")
}
function bgrnv(val, color){ //standing for background new value
  bColorList[color] = val;
}
function tcnv(val, color){
  tColorList[color] = val;
}
