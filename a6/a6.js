//Class - CSMA 101 F1 
//Title - Introduction to Programming
//Semester - Fall 2020
//Instructor - Echo Theohar
//Student - Levi Ellis
//Contact - levi.ellis@woodbury.edu

var colorTable;
var names = [], hueVal = [], myRating = [], sz = [];
var title = "Classes ordered by class #, sized to match starting time";

function preload()
{
    colorTable = loadTable("assets/classes.csv");
}

function setup()
{
    let cnv = createCanvas(1200, 600);
    
    cnv.parent('Show-sketch');
    colorMode(HSB);
    
    for(var i = 0; i < colorTable.getRowCount(); i++)
    {
        names[i] = colorTable.getString(i, 0);
        hueVal[i] = colorTable.getNum(i, 1);
        myRating[i] = colorTable.getNum(i, 2);
        sz[i] = map(myRating[i], 1, 24, 30, 180);
    }
}

function draw()
{
    background(255);
    
    fill(0);
    textSize(18);
    text(title, 600, 100);
    
    for(var i = 0; i < colorTable.getRowCount(); i++)
    {
        fill(hueVal[i], 100, 100);
        ellipse(140 * (i + 1), 400, sz[i]);
        
        fill(0);
        textSize(9);
        text(names[i], 135 * (i + 1), 400);
    }
}