

function setup(){
    createCanvas(windowWidth, windowHeight);
  
}
    
function ellipseTime(){
    for(var x = 0; x <= windowWidth; x+=50){  
        for(var y = 0; y <= windowHeight; y+=50){  
            if((x%75==0)||(y%75==0)){
            let r = random(0,255);
            let g = random(0,255);
            let b = random(0,255);
             ellipse(x,y, 30, 30);
             fill(r, g, b);
            }
        }
    } 
}
function draw(){
    background(0,50,50);
    ellipseTime();

    
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

