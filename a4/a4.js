//Class - CSMA 101 F1 
//Title - Introduction to Programming
//Semester - Fall 2020
//Instructor - Echo Theohar
//Student - Levi Ellis
//Contact - levi.ellis@woodbury.edu

var img1, img2, img3, totalCircles, x, y, desiredColor, c;

function preload()
{
    img1 = loadImage("Data/p4G.jpg");
    img2 = loadImage("Data/p4H.jpg");
    img3 = loadImage("Data/p4I.jpg");
}

function setup()
{
    createCanvas(400, 400);
    background(255);
    
    //load image pixels
    img1.loadPixels();
    img2.loadPixels();
    img3.loadPixels();
    
    //initialize values
    totalCircles = 50;
    y = 0;
    c = 1;
    
    frameRate(300);
}

function draw()
{
    //set circle size based off total circles
    var circleSize = width/totalCircles;
    
    //draw circles
    var currentCircle = 0;
    
    //keeps circle size proportional to width
    while(currentCircle < totalCircles)
    {
        x = currentCircle * circleSize;
        
        //get color
        var desiredColor1 = getColor1();
        var desiredColor2 = getColor2();
        var desiredColor3 = getColor3();
    
        if(c == 1)
        {
            fill(desiredColor1);
        }
        
        if(c == 2 || c == 4)
        {
            fill(desiredColor2);
        }
        
        if(c == 3)
        {
            
            fill(desiredColor3);
        }
        
        noStroke();
        square(x, y, circleSize);
        currentCircle++;
    }
    
    //move down a row
    y = y + circleSize;
    
    //start over at top
    if(y > 400)
    {
        totalCircles = 75;
        
        if(c < 4)
        {
            c++;
        }
        
        else
        {
            c = 1;
        }
        
        y = 0;
    }
}

function getColor1()
{
    var desiredColor1 = img1.get(floor(x), floor(y));
    return desiredColor1;
}

function getColor2()
{
    var desiredColor2 = img2.get(floor(x), floor(y));
    return desiredColor2;
}

function getColor3()
{
    var desiredColor3 = img3.get(floor(x), floor(y));
    return desiredColor3;
}

function getColor4()
{
    var desiredColor4 = img4.get(floor(x), floor(y));
    return desiredColor4;
}

function getColor5()
{
    var desiredColor5 = img5.get(floor(x), floor(y));
    return desiredColor5;
}

function getColor6()
{
    var desiredColor6 = img6.get(floor(x), floor(y));
    return desiredColor6;
}