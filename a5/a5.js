//Class - CSMA 101 F1 
//Title - Introduction to Programming
//Semester - Fall 2020
//Instructor - Echo Theohar
//Student - Levi Ellis
//Contact - levi.ellis@woodbury.edu

var bubbles = [];
var tilt;
let snow = 0;

function setup()
{
    createCanvas(800, 600);
    
    for(var i = 0; i < 75; i++)
    {
        bubbles[i] = new Bubble(random(width), random(height), random(10, 30), random(3, 4), random(3, 6));
    }
}

function draw()
{
    background(100);
    
    tilt = map(mouseX, 0, width, -6, 6, true);
    
    for(var i = 0; i < bubbles.length; i++)
    {
        bubbles[i].drawBubble();
        bubbles[i].jitterBubble();
        bubbles[i].resetBubble();    
    }   
    
    fill(200);
    noStroke();
    rect(0, 600, width, snow);
    snow -= 0.01; 
}

function Bubble(bubbleX, bubbleY, bubbleSize, speedX, speedY)
{
    this.x = bubbleX;
    this.y = bubbleY;
    this.sz = bubbleSize;
    this.spX = speedX;
    this.spY = speedY;
    
    this.drawBubble = function()
    {
        fill(200);
        noStroke();
        ellipse(this.x, this.y, this.sz/2);
    }

    this.jitterBubble = function()
    {
        this.x += tilt;
        this.y += this.spY/1;
    }

    this.resetBubble = function()
    {
        if(this.y > height)
        {
            this.y = 0;
        }
        
        if(-this.x > 0)
        {
            this.x = width;
        }
        
        if(this.x > width)
        {
            this.x = 0;
        } 
    }
}


