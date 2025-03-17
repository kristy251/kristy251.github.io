// Particle system with arrays and object management
/* Version 1
let particles = [];         // Array for particle objects
let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];  // Array of colors
let speeds = [];        // Array for random speeds

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('sketch-holder');
    
    // Initialize speeds array using push()
    for (let i = 0; i < 5; i++) {
        speeds.push(random(1, 4));
    }
}

function draw() {
    background(0, 20);
    
    // Add new particle when mouse is pressed
    if (mouseIsPressed) {
        particles.push(new Particle(mouseX, mouseY));
    }

    // Update and display particles, remove dead ones
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].display();
        
        // Remove particles when their lifecycle ends
        if (particles[i].isDead()) {
            particles.splice(i, 1);
        }
    }

    // Display particle count using join()
    let stats = [`Particles: ${particles.length}`, `Speeds: ${speeds.join(', ')}`];
    fill(255);
    text(stats.join(' | '), 10, 20);
}

// Particle class for array of objects
class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-speeds[0], -speeds[1]));
        this.size = random(5, 15);
        this.color = random(colors);
        this.lifespan = 255;
    }

    update() {
        this.pos.add(this.vel);
        this.lifespan -= 2;
    }

    display() {
        noStroke();
        fill(red(this.color), green(this.color), blue(this.color), this.lifespan);
        ellipse(this.pos.x, this.pos.y, this.size);
    }

    isDead() {
        return this.lifespan <= 0;
    }
}
*/

let particles = [];
        let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#A2C4C9',
            '#F1A7C0', '#C8E6C9', '#FFB6B9', '#7FBF7F'];
        let speeds = [];
        let spawnTimer = 0;  // New variable to control spawn rate

        function setup() {
            let canvas = createCanvas(800, 600);
            canvas.parent('sketch-holder');
            
            for (let i = 0; i < 5; i++) {
                speeds.push(random(1, 4));
            }
        }

        function draw() {
            background(0, 20);
            
            // Automatic particle spawning
            spawnTimer += 1;
            if (spawnTimer >= 10) {  // Spawn every 10 frames (adjust this number for faster/slower spawning)
                // Spawn particles randomly across the bottom of the screen
                particles.push(new Particle(random(width), height));
                spawnTimer = 0;  // Reset timer
            }

            // Update and display particles
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                particles[i].display();
                
                if (particles[i].isDead()) {
                    particles.splice(i, 1);
                }
            }

            let stats = [`Particles: ${particles.length}`, `Speeds: ${speeds.join(', ')}`];
            fill(255);
            text(stats.join(' | '), 10, 20);
        }

        class Particle {
            constructor(x, y) {
                this.pos = createVector(x, y);
                this.vel = createVector(random(-4, 4), random(-speeds[0], -speeds[1]));
                this.size = random(5, 30);
                this.color = random(colors);
                this.lifespan = 350;
            }

            update() {
                this.pos.add(this.vel);
                this.lifespan -= 2;
            }

            display() {
                noStroke();
                fill(red(this.color), green(this.color), blue(this.color), this.lifespan);
                ellipse(this.pos.x, this.pos.y, this.size, this.size);
            }

            isDead() {
                return this.lifespan <= 0;
            }
        }


// References:
// 1. P5.js Reference: https://p5js.org/reference/
// 2. Particle System Simulation - The Nature of Code: https://www.youtube.com/watch?v=syR0klfncCk
