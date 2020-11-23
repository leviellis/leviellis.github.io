//Class - CSMA 101 F1 
//Title - Introduction to Programming
//Semester - Fall 2020
//Instructor - Echo Theohar
//Student - Levi Ellis
//Contact - levi.ellis@woodbury.edu

var startX;
var startY;
var directionX;
var directionY;

var r = 255;
var g = 255;
var b = 255;

function setup() 
{
    let cnv = createCanvas(500, 500); 
    cnv.parent('Show-sketch');
    
  background(100);
  
  startX = width/2;
  startY = height/2;
  
  directionX = 8;
  directionY = 1;
}

function draw() 
{
  startX = startX + directionX;
  startY = startY + directionY;
  
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseY, 0, 600, 0, 255);
  
  background(0, 0, 0);
  
  fill(r, g, b);
  
  if(startX > width || startX < 0)
  {
    directionX = -directionX;
  }
  
  if(startY > height || startY < 0)
  {
    directionY = -directionY;
  }

  ellipse(startX, startY, 25);

}