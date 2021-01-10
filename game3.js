let playerImage;
let keysPressed = {};
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

function keyPressed(){
    keysPressed[key] = true;
}

function keyReleased(){
    keysPressed[key] = false;
}

function draw(){
    background(0);
    image(playerImage, player.x, player.y);
    if (keysPressed["ArrowRight"] && player.dazed <= 0){
        player.xvelocity += 1;
    }
    else if (keysPressed["ArrowLeft"] && player.dazed <= 0){
        player.xvelocity -= 1;
        
    }
    player.xvelocity *= 0.9;
    player.x += player.xvelocity;
    player.dazed = 30;

    if(player.x < 0 || player.x > 1000 - playerImage.width && player.dazed <= 0){
        player.xvelocity *= -1;
        player.dazed = 30;
    }
}


