//Class - CSMA 101 F1 
//Title - Introduction to Programming
//Semester - Fall 2020
//Instructor - Echo Theohar
//Student - Levi Ellis
//Contact - levi.ellis@woodbury.edu

//Brush 1
let r = 255;
let g = 0;
let b = 0;

//Brush 2
var hrz = 15;

//Brush 3
var vrt = 15;

//Brush 4
var clr = false;

//Brush 5
let shp = 45;

var posX = 400;
var posY = 400;

var goX = 0;
var goY = 0;

var addU = 1;
var addD = -1;

function setup()
{
    let cnv = createCanvas(400, 400);
    background(200);
    
    cnv.parent('Show-sketch');
}

function draw()
{   
    if(mouseIsPressed)
    {
      fill(r, g, b);
      noStroke();
      rect(mouseX, mouseY, hrz, vrt, shp);
        
      if(clr == true)
      {
        if(r > 0 && g == 0)
        {
            r--;
            b++;
        }
        
        if(b > 0 && r == 0)
        {
            b--;
            g++;
        }
            
        if(g > 0 && b == 0)
        {
            g--;
            r++;
        }
      }
    }
  
    /*
    posX = posX + goX;
    posY = posY + goY;
    
    if(goX < addU && goY == 0)
    {
        goX++;
        goY = 0;
        //addD *= 2;
    }
    
    if(goX == 0 && goY < addU)
    {
        goY++;
        goX = 0;
    }
  
    if(goX > addD && goY == 0)
    {
        goX--;
        goY = 0
        //addU *= 2;
    } 
   
    if(goX == 0 && goY > addD)
    {
        goY--;
        goX = 0;
    }
    */
    
    
    if(keyIsDown(LEFT_ARROW) && hrz > 6)
    {
        hrz--;
    }
    
    if(keyIsDown(RIGHT_ARROW) && hrz < 300)
    {
        hrz++;
    }
    
    if(keyIsDown(DOWN_ARROW) && vrt > 6)
    {
        vrt--;
    }
    
    if(keyIsDown(UP_ARROW) && vrt < 300)
    {
        vrt++;
    }
    
    if(keyIsDown(ENTER) && shp < 44)
    {
        shp = shp + .1;
    }
    
    if(keyIsDown(SHIFT) && shp > 1)
    {
        shp = shp - .1;
    }
}

function keyPressed()
{
    if (keyCode == 49)
    {
        r = 255;
        g = 0;
        b = 0;
    }
    
    if (keyCode == 50)
    {
        r = 0;
        g = 255;
        b = 0;
    }
    
    if (keyCode == 51)
    {
        r = 0;
        g = 0;
        b = 255;
    }
    
    if(keyCode == 32)
    {
        clr = !clr;
    }
}
