//Data average from November 11, 2020 to November 11, 2021
//Popularity of search term "black lives matter" across the US over 1 year
//Washington DC searched the term most and is used as control variable 

var img;
var table;

var states = [];

function preload(){
    
    img = loadImage("assets/map.png");
    table = loadTable("assets/locations2.csv");
}

function setup(){
    createCanvas(img.width, img.height);
    colorMode(HSB, 360, 100, 100);

    var popul = [];
    var prcnt = [];
    var mappedSize = [];
    
    for(var i = 0; i < table.getRowCount(); i++){
        states[i] = new States(table, i);
        popul[i] = states[i].popul;
        prcnt[i] = states[i].prcent;
    }
    
    for(var i = 0; i < table.getRowCount(); i++){
        mappedSize[i] = map(states[i].popul, min(popul), max(popul), 10, 100);
        states[i].sz = mappedSize[i];
    }
}

function draw(){
    background(img);
    
    for(var i = 0; i < table.getRowCount(); i++){
        states[i].displayState();
        states[i].mouseHovered();
    }
}

function States(table, index){
    this.table = table;
    this.name = table.getString(index, 0);
    this.x = table.getNum(index, 1);
    this.y = table.getNum(index, 2);
    this.popul = table.getNum(index, 3);
    this.prcnt = table.getNum(index, 4);
    this.hu = random(360);
    this.sz = 50;
    
    //shows population distribution via ellipses
    this.displayState = function(){
        noStroke();
        fill(70, 70, 70);
        ellipse(this.x, this.y, this.sz, this.sz);
        
        //display state name at lat + lon
        noStroke();
        fill(100, 10, 10);
        textSize(20);
        textStyle(BOLD);
        text(this.name, this.x + this.sz/2, this.y+10);
    }
    //rollover effect
    this.mouseHovered = function(){
     if(dist(mouseX, mouseY, this.x, this.y)<=this.sz/2){
         this.showInfo();
     }   
    }
    
    this.showInfo = function(){
        fill(this.hu, 70, 70, 20);
        ellipse(this.x, this.y, 200);
        fill(0);
        textSize(20);
        text(this.name + "\n" + "population: " + "\n" + this.popul + "\n" + "popularity: " + "\n" + this.prcnt, this.x - 50, this.y - 25);
    }
    
}