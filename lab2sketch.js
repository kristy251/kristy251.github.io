var redBrick = {
    x: 0,
    y: 0,
    w: 80,
    h: 60,
    xSpeed: 50,
    ySpeed: 20,
    colour: 'green',
    draw: function(){
        fill( this.colour );
        circle(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var blueBrick = {
    x: 4,
    y: 8,
    w: 40,
    h: 30,
    xSpeed: 5,
    ySpeed: 8,
    colour: 'purple',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};
// redBrick.x++ returns current value then increments
// ++redBrick.x increments value and then returns   

function setup(){
    createCanvas(720,280);
}

function draw(){
    background('yellow'); 
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();
}
