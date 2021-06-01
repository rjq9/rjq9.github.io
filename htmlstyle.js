bColorList = [255, 255, 255]
function bgrupdate(){
  document.getElementById("accusative").style.backgroundColor = ("rgb("+bColorList[0]+","+bColorList[1]+","+bColorList[2]+")")
}
function bgrnv(val, color){ //standing for background new value
  bColorList[color] = val;
}
