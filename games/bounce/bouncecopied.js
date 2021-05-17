var balls = [];
var startballs = 10
var score = 0
var facemode = 0
var notes = ['C','D','E','F','G','A','B']; 
var song = ['E',5,'C',10,'D',8,'F',2]
function setup() {
  createCanvas(300, 300);
  Cp = loadSound('/sound/C Piano.wav');
  Dp = loadSound('/sound/D Piano.wav');
  Ep = loadSound('/sound/E Piano.wav');
  Fp = loadSound('/sound/F Piano.wav');
  Gp = loadSound('/sound/G Piano.wav');
  Ap = loadSound('/sound/A Piano.wav');
  Bp = loadSound('/sound/B Piano.wav');
  C2p = loadSound('/sound/C2 Piano.wav');
  for (var i = 0; i < startballs; i++) {
    balls[i] = new Ball(width/2, height/2);
    score++;

  }
}

function draw() {
  background(0);
  if(score == 0){
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER)
    text("YOU WIN",100,100);
    if(!give.isPlaying()&& facemode == 1){
      give.play();
    }
  }
  else{
    textSize(32);
    fill(255);
    text(score,10,40)
  
    for (var i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].display();
        balls[i].bounce();
    }
  }
}

function mousePressed() {
  var collided = 0;
  //if clicked on balls
  for (var i = 0; i < balls.length; i++) {    
      if(Math.hypot(mouseX-balls[i].x,mouseY-balls[i].y)<balls[i].sz/2){
        collided = 1;
        
        playNote(balls[i].note);
        balls.splice(i,1);
        score--;
      }
    }
  if(!collided){
  balls.push( new Ball(mouseX, mouseY) );
  score++;
  }
}

function Ball(x,y) {
  this.color = [random(0,255),random(0,255),random(0,255)];
  this.note = notes[Math.floor(Math.random()*notes.length)] 
  this.x = x;
  this.y = y;
  this.sz = 50;
  this.xspeed = random(-5, 5);
  this.yspeed = random(-5, 5);

  this.update = function()  {
    this.x += this.xspeed;
    this.y += this.yspeed;
  };

  this.display = function()  {
    fill(this.color);
    stroke(0);
    if(facemode){
    image(face, this.x, this.y, this.sz, this.sz);
    }else{
    fill(this.color)
    ellipse(this.x, this.y, this.sz, this.sz);
    textSize(this.sz*.5);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.note,this.x,this.y);
    }
   };
  
  this.bounce = function() {
    if (this.x > width || this.x < 0)  {
      this.xspeed *= -1;
    }
    if (this.y > height || this.y < 0)  {
      this.yspeed *= -1;
    };
  }
} 

function playNote(name){
  if(name == "C"){
    Cp.play();
  }
  if(name == "D"){
    Dp.play();
  }
  if(name == "E"){
    Ep.play();
  }
  if(name == "F"){
    Fp.play();
  }
  if(name == "G"){
    Gp.play();
  }
  if(name == "A"){
    Ap.play();
  }
  if(name == "B"){
    Bp.play();
  }
}