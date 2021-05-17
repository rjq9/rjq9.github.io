var balls = [];
var ballTotal = 70;
var score = 0;
let beep 
var notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b']
function start(){
    createCanvas(3000, 3000);
    beep = loadSound('coin.wav')
    Cp = loadSound('/sound/C Piano.wav');
    Dp = loadSound('/sound/D Piano.wav');
    Ep = loadSound('/sound/E Piano.wav');
    Fp = loadSound('/sound/F Piano.wav');
    Gp = loadSound('/sound/G Piano.wav');
    Ap = loadSound('/sound/A Piano.wav');
    Bp = loadSound('/sound/B Piano.wav');
    for (var i = 0; i <ballTotal; i++){
        balls[i] = new Ball(width/2, height/2);
        score++;
    }
}
function draw(){
    background(200);
    if(score == 0){
        textSize(32);
        fill(0);
        text("You win!", 10, 40);
    }
    else {
        textSize(32);
        fill(0);
        text(score, 10, 40);
        for (var i = 0; i < balls.length; i++) {
            balls[i].update();
            balls[i].display();
            balls[i].bounce();
        }
    }

}
function mousePressed(){
    var collided = false;
    for (var i = 0; i < balls.length; i++) {
        if(Math.hypot(mouseX-balls[i].x,
            mouseY-balls[i].y)<balls[i].sz/2){
            collided = true;
            playNote(balls[i].note);
            balls.splice(i, 1);
            score--;
        }
    }
    if(!collided){
        balls.push(new Ball(mouseX, mouseY));
        score++;
    }
}

function Ball(x, y) {
    this.color = [random(0, 255), random(0, 255), random(0, 255)], 
    this.notes[Math.floor(Math.random())]
    this.x = x;
    this.y = y;
    this.sz = 25;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);

    this.update = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    this.display = function() {
        fill(255);
        stroke(0);
        fill(this.color);
        ellipse(this.x, this.y, this.sz, this.sz);
        textSize(this.sz*.5);
        textAlign(CENTER, CENTER);
        fill(255)
        text(this.note, this.x, this.y);
    }
    this.bounce = function(){
        if (this.x > width || this.x < 0){
            this.xSpeed *= -1;
        }
        if (this.y > height || this.y < 0) {
            this.ySpeed *= -1;
        };
    }
    function playNote(name){
        if(name == "c"){
          Cp.play();
        }
        if(name == "d"){
          Dp.play();
        }
        if(name == "e"){
          Ep.play();
        }
        if(name == "f"){
          Fp.play();
        }
        if(name == "g"){
          Gp.play();
        }
        if(name == "a"){
          Ap.play();
        }
        if(name == "b"){
          Bp.play();
        }
      }
}