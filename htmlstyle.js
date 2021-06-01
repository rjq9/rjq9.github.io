bColorList = [255, 255, 255]
function brgupdate(){
  document.getElementById("accusative").style.backgroundColor = ("rgb("+rb+","+gb+","+bb+")")
}
function bgrnv(val, color){ //standing for background new value
  bColorList[color] = val;
}
