/*
----- Coding Tutorial by Patt Vira ----- 
Name: Jelly Tentacles
Video Tutorial: https://youtu.be/te5_28lG3r4?si=4TZNevG6jH3zQkaO

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let r = 15; let angles = []; let cSize = 10; let num = 15; let t = 10;

let cols = 10; let rows = 10; let size = 25;

let xoff = 0; let yoff = 0; let inc = 0.7;

function setup() {
  createCanvas(400, 400);
  // canvas.id("canvas-1");
  angleMode(DEGREES);
  xoff = 0;
  for (let i=0; i<cols; i++) {
    angles[i] = [];
    yoff = 0;
    for (let j=0; j<rows; j++) {
      angles[i][j] = 360*noise(xoff, yoff);
      yoff += inc;
    }
    xoff += inc;
  }
}

function draw() {
  background(44, 62, 80);
  translate(width/2, height/2);
  
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      for (let k=0; k<num; k++) {
        noStroke();
        fill(255, 255*k/(num-1));
        
        let x = r*(k/(num-1))*cos(angles[i][j] + t*k);
        let y = r*(k/(num-1))*sin(angles[i][j] + t*k);
        let xmargin = i*size - size*cols/2 + size/2;
        let ymargin = j*size - size*rows/2 + size/2; 
        ellipse(xmargin + x + (i-cols/2)*k*0.7, ymargin + y + (j-rows/2)*k*0.7, cSize+k, cSize+k);
      }
      angles[i][j] += 4;
    }
  }
  
  
  
  
  // fill(0, 255, 0);
  // ellipse(0, 0, 10, 10);
  
}