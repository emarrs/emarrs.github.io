let userArray = [];
let button, randText, newCanvas;
let x,y,w,h;
let textArray = ["Of course it's real, as long as you believe in it.","You may never reach the origin,","Why torture yourself?"];
function setup() {
    noCursor();
    createCanvas(windowWidth,windowHeight);
    newCanvas = createGraphics(windowWidth,windowHeight);
    newCanvas.clear(0);
//    newCanvas.background(0);
    newCanvas.noStroke();
    background(0,0,255);
    randText = Math.floor(random(textArray.length));
    
    textFont('Arial');
    textSize(14);
    fill(255);
    text("<!DOCTYPE html> \n<html> \n<head> <meta charset= &#34; utf-8 &#34;> \n<meta http-equiv=X-UA- Compatible content=IE=edge> \n<title>Post-Authentic Sincerity</title> \n<meta name=description content= &#34; An essay about design, authenticity, and defaults &#34; > \n<meta name=viewport content=width=device- width, initial-scale=1.0> \n<link rel=stylesheet href=style.css> \n<body> \n<h1>" + textArray[randText] + "</h1> \n</body> \n</html> \n \n \nClick around to dissolve this layer. Or, just press the button below.", 50, 25, windowWidth/8)
    
    fill(0,0,255);
    stroke(255);
    strokeWeight(2);
    x = windowWidth*.235; y = 25; w = windowWidth*.74; h = windowWidth*.42;
    rect(x,y,w,h);
    line(x,y,x+w,y+h);
    line(x,y+h,w+x,y);
    fill(255);
    stroke(0,0,255);
//    textFont('Helvetica');
//    textStyle(ITALIC);
    textAlign(CENTER);
    textSize(30);

//    text('Click around',x+w / 2,windowHeight - 85)
//    text(textArray[randText],x+w / 2,windowHeight - 85)
    
    button = createButton('click here for full interactivity!');
    button.position(50,y+h-10,'fixed');
    button.mousePressed(skipIntro);
    
}

function skipIntro(){
    remove();
}

function aabb(){
    if(mouseX >= x && mouseX <= x+w && mouseY <= y+h && mouseY > y){
        cursor(HAND);
    }else{
        noCursor();
    }
}

function draw() {
    aabb();
//    if (mouseIsPressed){
//        newCanvas.rect()
//    }
    for (let i = 0; i < userArray.length; i++) {
        if (mouseIsPressed){
//            point(userArray[i].x, userArray[i].y);
            noStroke();
            rect(userArray[i].x, userArray[i].y, 5,5)
            userArray[i].x += random(-10,10);
            userArray[i].y += random(-10,10);
            newCanvas.clear();

        } else {
            newCanvas.rect(mouseX,mouseY,5,5);
            
//            stroke(0,0,255);
//            strokeWeight(1);
//            point(userArray[i].x, userArray[i].y);
//            userArray[i].x += random(-10,10);
//            userArray[i].y += random(-10,10);
        }
    }
    image(newCanvas,0,0);

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
