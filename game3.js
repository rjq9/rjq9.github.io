let playerImage;

let player = {
    x: 500,
    y: 550,
    xvelocity: 0,
    dazed: 0
}
function preload(){
    playerImage = loadImage("smilec1.png");

}

function setup(){
    createCanvas(1000,700);
}

function draw(){
    background(0);
    image(playerImage, player.x, player.y);
}
