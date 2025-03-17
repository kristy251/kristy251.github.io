

/*function setup(){
    createCanvas(windowWidth, windowHeight);
}
function draw(){
    background(0, 150, 50);
    fill('yellow');
    stroke('green');
    for(var i = 2; i < 10000; i++)
       rect((i*10)%width, (i*10)%innerHeight, 10,10);
        }
    fill('orange');
    stroke('blue');
    if(mouseX < 200){
        rect(mouseX,mouseY,100,100);
    }else{
        rect(mouseX,mouseY,80,80,40);
    }
        */
/* this part is not my code */
    function setup(){
        createCanvas(windowWidth,windowHeight);
    }
    
    function draw(){
        background(20, 300, 400);
        fill('blue');
        stroke('black');
        /* i change drawing circle to rectamgle*/
        for(var i = 0; i < 10000; i++){
            rect((i*10)%width,(i*10)%height,10,10);
        }
        
        fill('red');
        stroke('white');
        if(mouseX < 200){
            rect(mouseX,mouseY,100,100);
        }else{
            rect(mouseX,mouseY,50,50,25);
        }
    }