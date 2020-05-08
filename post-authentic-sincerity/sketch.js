let userArray = [];
let button;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,0,255);
//    textAlign(CENTER);
    textSize(14);
    fill(255);
    textFont('Times');
    text("<!DOCTYPE html> \n<html> \n<head> <meta charset= &#34; utf-8 &#34;> \n<meta http-equiv=X-UA-Compatible content=IE=edge> \n<title>Post-Authentic Sincerity</title> \n<meta name=description content= &#34; An essay about design, authenticity, and defaults &#34; > \n<meta name=viewport content=width=device-width, initial-scale=1.0> \n<link rel=stylesheet href=style.css>", 100, 100, windowWidth-100)
    button = createButton('straight to business');
    button.position(100,windowHeight-100,'fixed');
    button.mousePressed(skipIntro);
}

function skipIntro(){
    remove();
}

function draw() {
    for (let i = 0; i < userArray.length; i++) {
        if (mouseIsPressed){
//            point(userArray[i].x, userArray[i].y);
            rect(userArray[i].x, userArray[i].y, 6,6)
            userArray[i].x += random(-10,10);
            userArray[i].y += random(-10,10);
        } else {
//            frameRate(20);
//            stroke(0,0,255);
//            strokeWeight(1);
//            point(userArray[i].x, userArray[i].y);
//            userArray[i].x += random(-10,10);
//            userArray[i].y += random(-10,10);
        }
    }

//    stroke(255);
//    strokeWeight(10);
    
    
//    if (mouseIsPressed){
//     line(pmouseX, pmouseY, mouseX, mouseY);   
//    }
}

function mousePressed() {
  p5.instance.drawingContext.globalCompositeOperation = 'destination-out';
}

function mouseReleased() {
  blendMode(BLEND);
}

function mouseMoved() {
  userArray.push({
    px: pmouseX,
    py: pmouseY,
    x: mouseX,
    y:mouseY
  })
  
}
