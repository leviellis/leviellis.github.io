//Class - CSMA 101 F1 
//Title - Introduction to Programming
//Semester - Fall 2020
//Instructor - Echo Theohar
//Student - Levi Ellis
//Contact - levi.ellis@woodbury.edu

var bubbles = [];

let fr = 60;
let s;

var fade;
var fadeAmount = 10;

var x;
var y;

function setup() 
{
    let cnv = createCanvas(1500, 1800);
    cnv.parent("sketch-holder");
    
    colorMode(HSB, 360);
    
    frameRate(fr);
    
    fade = 0;
    
    x = mouseX;
    y = mouseY;
    
    for(var i = 0; i < 12; i++)
    {
        bubbles[i] = new Bubble(random(15, 60), random(-120, 120), random(-120, 120), random(185, 220));
    }
}

function draw() 
{
    clear();
    
    s = frameCount;
    
    if(fade == 0)
    {
        x = mouseX;
        y = mouseY;
        
        for(var i = 0; i < bubbles.length; i++)
        {
            bubbles[i].randomizeBubble();  
        }
    }
    
    if (fade <= 0)
    {
        fadeAmount = 5;
    }
       
 
    if (fade >= 210)
    {
        fadeAmount = -1;
    }
            
    fade += fadeAmount;
    
    for(var i = 0; i < bubbles.length; i++)
    {
        bubbles[i].drawBubble();  
    }
}

function Bubble(bubbleSize, bubbleX, bubbleY, color)
{
    this.x = bubbleX;
    this.y = bubbleY;
    this.sz = bubbleSize;
    this.col = color; 

    this.drawBubble = function()
    {
        fill(color, 30, 100, fade);
        noStroke();
        ellipse(x + this.x, y + this.y, this.sz);
    }
    
    this.randomizeBubble = function()
    {
        this.x = random(-120, 120);
        this.y = random(-120, 120);
        this.sz = random(15, 60);
        this.col = random(185, 220)
    }
}