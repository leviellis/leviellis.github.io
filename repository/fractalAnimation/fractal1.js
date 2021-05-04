// based on 8.3 in https://natureofcode.com/book/chapter-8-fractals/

theta = 1;
coordY = 0;
ellipseW = 0;

transY = 600;

runCmnd = false;

let fr = 60;

let r = 255;
let g = 0;
let b = 0;

function branch(len)
{
  fill(r, g, b);
  triangle(0, coordY, ellipseW, -len, PI + QUARTER_PI, TWO_PI);  // draw a line upwards
  translate(0, -len);  // change the center of the coordinate system to be the end of the line

  len = len * 0.66;  // shorten the length of subsequent lines

  if (/*runCmnd == true &&*/ len > 2)  // stop the recursion if the length gets too small
  {
    push();  // make a copy of the coordinate system
    rotate(radians(theta));  // rotate the coordinate system to the right
    branch(len);  // (recursively) draw the branch to the right
    pop();  // restore the copy of the coordinate system
    push();
    rotate(radians(-theta));  // rotate the coordinate system to the left
    branch(len);  // (recursively) draw the branch to the left
    pop();
  }
    
}
  

function setup() 
{
  let cnv = createCanvas(600, 600);
  cnv.parent('Show-sketch');
  frameRate(fr);  //sets frame rate
}

function draw() 
{
  background(0);
  translate(300, transY);
  branch(100);
  
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
  
  s = frameCount;  //timer
  
  if(s % 5 == 0)  //runs algorithm until sorted
  {
    coordY += 1;
    theta += 1;
    
    if (transY > 360)
    {
      transY -= 3;
    }
    
    //ellipseW += 1; 
  }
  
  if(s % 60 == 0)  //runs algorithm until sorted
  {
    //ellipseW += 1; 
    //theta += 3;
    //runCmnd = true;
  }
}
