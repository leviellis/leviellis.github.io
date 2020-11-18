//Class - CSMA 101 F1 
//Title - Introduction to Programming
//Semester - Fall 2020
//Instructor - Echo Theohar
//Student - Levi Ellis
//Contact - levi.ellis@woodbury.edu

var ballX = 400;
var ballY = 0;

var diameter = 50;

var directionX = 6;
var directionY = 7;

var rectX = 400;
var rectY = 750;

var rectW = 100;
var rectH = 25;

var speed = 15;

var started = false;

var over = false;

function setup() 
{
  createCanvas(800, 800);
}

function draw() 
{
    if(over == false)
    {
        background(255, 0, 0);
    }
    
    if(over == true)
    {
        background(0, 0, 255);
    }
    
    ballX = ballX + directionX;
    ballY = ballY + directionY;
    
    if(ballX < 0 || ballX > width)
    {
        directionX = -directionX;
    }
    
    if(ballY < 0 || ballY > height)
    {
        directionY = -directionY;
    }
    
    if((ballX > rectX && ballX < rectX + rectW) && (ballY + (diameter/2) >= rectY))
    {
        directionX *= -1;
        directionY *= -1;
        over = !over;
    }
    
    noStroke();
    ellipse(ballX, ballY, diameter);
    rect(rectX, rectY, rectW, rectH)
    
    if(keyIsDown(LEFT_ARROW))
    {
        rectX = rectX - 1 * speed;
    }
    
    if(keyIsDown(RIGHT_ARROW))
    {
        rectX = rectX + 1 * speed;
    }
}

/*
function keyPressed()
{
  if (keyCode == UP_ARROW)
  {
    y -= 10;
  }
    
  if (keyCode == DOWN_ARROW)
  {
    y += 10;
  }
  
  if (keyCode == RIGHT_ARROW)
  {
    x += 10;
  }
    
  if (keyCode == LEFT_ARROW)
  {
    x -= 10;
  }
}
*/