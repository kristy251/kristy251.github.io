
 
/*
First version

let nameText = "";
let x = 50, y = 200, speed = 2, direction = 1;
        
function setup() {
    createCanvas(600, 400);
    let nameInput = select('#nameInput');
    let startButton = select('#startButton');
    let speedSlider = select('#speedSlider');
            
    startButton.mousePressed(() => {
        nameText = nameInput.value();
    });
            
    speedSlider.input(() => {
        speed = speedSlider.value();
    });
    }
        
    function draw() {
        background(220);
        textSize(32);
        fill(50, 100, 200);
        text(nameText, x, y);
            
        if (nameText) {
            x += speed * direction;
        if (x > width - textWidth(nameText) || x < 0) {
                    direction *= -1;
            }
            }
    }
        
    function mousePressed() {
            direction *= -1;
    }
*/

/*

Second version

let inputName;
        let speedSlider;
        let submitButton;
        let displayName = "";
        let angle = 0;
        let speed = 1;

        function setup() {
            createCanvas(600, 400);
            background(220);
            
            // Create DOM elements
            let controlDiv = createDiv('').class('controls');
            
            // Text input
            inputName = createInput('');
            inputName.attribute('placeholder', 'Enter your name');
            inputName.parent(controlDiv);
            
            // Speed slider
            speedSlider = createSlider(1, 10, 5);
            speedSlider.parent(controlDiv);
            
            // Submit button
            submitButton = createButton('Animate Name');
            submitButton.parent(controlDiv);
            
            // P5.Element callback for button
            submitButton.mousePressed(updateName);
        }

        function draw() {
            background(220);
            
            if (displayName.length > 0) {
                // Animate the name
                push();
                translate(width/2, height/2);
                rotate(sin(angle) * 0.1);
                
                textSize(48);
                textAlign(CENTER, CENTER);
                fill(0, 150, sin(angle) * 255);
                text(displayName, 0, 0);
                
                angle += speed * 0.02;
                pop();
            } else {
                textSize(24);
                textAlign(CENTER, CENTER);
                fill(100);
                text("Enter a name and click 'Animate Name'", width/2, height/2);
            }
            
            // Update speed from slider
            speed = speedSlider.value();
        }

        // Global callback function
        function keyPressed() {
            if (keyCode === ENTER) {
                updateName();
            }
        }

        // Function to update the displayed name
        function updateName() {
            displayName = inputName.value().trim();
            if (displayName.length > 0) {
                angle = 0; // Reset animation
            }
        }
*/

/*
Version 3

let inputName, speedSlider, colorSelect, submitButton, speedLabel, colorLabel, fullscreenButton;
        let displayName = "";
        let angle = 0;
        let speed = 1;
        let currentColor = [0, 150, 255]; // Default blue

        function setup() {
            let canvas = createCanvas(600, 400);
            canvas.parent('canvas-container');
            background(220);

            // Get controls container
            let controls = select('#controls-container');

            // Text input
            inputName = createInput('');
            inputName.attribute('placeholder', 'Enter your name');
            inputName.parent(controls);

            // Create a label for slider
            speedLabel = createP('Animation speed:');
            speedLabel.parent(controls);
            speedLabel.style('display', 'block');
            speedLabel.style('margin', '5px 0');

            // Speed slider
            speedSlider = createSlider(1, 10, 5);
            speedSlider.parent(controls);

            // Create a label for color
            colorLabel = createP('Animation speed:');
            colorLabel.parent(controls);
            colorLabel.style('display', 'block');
            colorLabel.style('margin', '5px 0');

            // Color dropdown
            colorSelect = createSelect();
            colorSelect.option('Blue', 'blue');
            colorSelect.option('Red', 'red');
            colorSelect.option('Green', 'green');
            colorSelect.option('Purple', 'purple');
            colorSelect.option('Random', 'random');
            colorSelect.parent(controls);
            colorSelect.changed(updateColor);

            // Submit button
            submitButton = createButton('Animate Name');
            submitButton.parent(controls);
            submitButton.mousePressed(updateName);

            // Fullscreen button
            fullscreenButton = createButton('Go Fullscreen');
            fullscreenButton.parent(controls);
            fullscreenButton.mousePressed(toggleFullscreen);
        }

        function draw() {
            background(220);

            if (displayName.length > 0) {
                push();
                translate(width/2, height/2);
                rotate(sin(angle) * 0.1);
                
                textSize(48);
                textAlign(CENTER, CENTER);
                
                if (colorSelect.value() === 'random') {
                    fill(
                        (sin(angle) * 127 + 128),
                        (cos(angle) * 127 + 128),
                        (sin(angle + 1) * 127 + 128)
                    );
                } else {
                    fill(
                        currentColor[0],
                        currentColor[1],
                        currentColor[2] + sin(angle) * 100
                    );
                }
                
                text(displayName, 0, 0);
                angle += speed * 0.02;
                pop();
            } else {
                textSize(24);
                textAlign(CENTER, CENTER);
                fill(100);
                text("Enter a name and click 'Animate Name'", width/2, height/2);
            }

            speed = speedSlider.value();
        }

        function keyPressed() {
            if (keyCode === ENTER) {
                updateName();
            } else if (keyCode === ESCAPE && fullscreen()) {
                exitFullscreen();
            }
        }

        function updateName() {
            displayName = inputName.value().trim();
            if (displayName.length > 0) {
                angle = 0;
            }
        }

        function updateColor() {
            switch(colorSelect.value()) {
                case 'blue':
                    currentColor = [0, 150, 255];
                    break;
                case 'red':
                    currentColor = [255, 50, 50];
                    break;
                case 'green':
                    currentColor = [50, 255, 50];
                    break;
                case 'purple':
                    currentColor = [150, 50, 255];
                    break;
                case 'random':
                    break;
            }
        }

        function toggleFullscreen() {
            if (!fullscreen()) {
                fullscreen(true);
                resizeCanvas(windowWidth, windowHeight);
                fullscreenButton.hide();
            }
        }

        function exitFullscreen() {
            if (fullscreen()) {
                fullscreen(false);
                resizeCanvas(600, 400);
                fullscreenButton.show();
            }
        }

        // Adjust canvas size when window is resized
        function windowResized() {
            if (fullscreen()) {
                resizeCanvas(windowWidth, windowHeight);
            }
        }
*/

let inputName, speedSlider, colorSelect, submitButton, speedLabel, fullscreenButton;
        let displayName = "";
        let angle = 0;
        let speed = 1;
        let currentColor = [0, 150, 255]; // Default blue
        let canvas;
        let controls;

        function setup() {
            canvas = createCanvas(600, 400);
            canvas.parent('canvas-container');
            background(220);

            // Get controls container and store it
            controls = select('#controls-container');

            // Text input
            inputName = createInput('');
            inputName.attribute('placeholder', 'Enter your name');
            inputName.parent(controls);

            // Speed label
            speedLabel = createP('Animation Speed:');
            speedLabel.parent(controls);
            speedLabel.style('display', 'block');
            speedLabel.style('margin', '5px 0');

            // Speed slider
            speedSlider = createSlider(1, 10, 5);
            speedSlider.parent(controls);

            // Color dropdown
            colorSelect = createSelect();
            colorSelect.option('Blue', 'blue');
            colorSelect.option('Red', 'red');
            colorSelect.option('Green', 'green');
            colorSelect.option('Purple', 'purple');
            colorSelect.option('Random', 'random');
            colorSelect.parent(controls);
            colorSelect.changed(updateColor);

            // Submit button
            submitButton = createButton('Animate Name');
            submitButton.parent(controls);
            submitButton.mousePressed(updateName);

            // Fullscreen button
            fullscreenButton = createButton('Go Fullscreen');
            fullscreenButton.parent(controls);
            fullscreenButton.mousePressed(toggleFullscreen);

            // Ensure controls container is visible initially
            controls.style('display', 'flex');
            controls.style('visibility', 'visible'); // Explicitly set visibility
        }

        function draw() {
            background(220);

            if (displayName.length > 0) {
                push();
                translate(width/2, height/2);
                rotate(sin(angle) * 0.1);
                
                textSize(48);
                textAlign(CENTER, CENTER);
                
                if (colorSelect.value() === 'random') {
                    fill(
                        (sin(angle) * 127 + 128),
                        (cos(angle) * 127 + 128),
                        (sin(angle + 1) * 127 + 128)
                    );
                } else {
                    fill(
                        currentColor[0],
                        currentColor[1],
                        currentColor[2] + sin(angle) * 100
                    );
                }
                
                text(displayName, 0, 0);
                angle += speed * 0.02;
                pop();
            } else {
                textSize(24);
                textAlign(CENTER, CENTER);
                fill(100);
                text("Enter a name and click 'Animate Name'", width/2, height/2);
            }

            speed = speedSlider.value();
        }

        function keyPressed() {
            if (keyCode === ENTER) {
                updateName();
            } else if (keyCode === ESCAPE && fullscreen()) {
                exitFullscreenMode();
            }
        }

        function updateName() {
            displayName = inputName.value().trim();
            if (displayName.length > 0) {
                angle = 0;
            }
        }

        function updateColor() {
            switch(colorSelect.value()) {
                case 'blue':
                    currentColor = [0, 150, 255];
                    break;
                case 'red':
                    currentColor = [255, 50, 50];
                    break;
                case 'green':
                    currentColor = [50, 255, 50];
                    break;
                case 'purple':
                    currentColor = [150, 50, 255];
                    break;
                case 'random':
                    break;
            }
        }

        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                resizeCanvas(windowWidth, windowHeight);
                hideControls();
            }
        }

        function exitFullscreenMode() {
            if (document.fullscreenElement) {
                document.exitFullscreen();
                resizeCanvas(600, 400);
                setTimeout(() => {
                    showControls();
                }, 100); // 100ms delay to ensure proper rendering
            }
        }

        function hideControls() {
            inputName.style('visibility', 'hidden');
            speedLabel.style('visibility', 'hidden');
            speedSlider.style('visibility', 'hidden');
            colorSelect.style('visibility', 'hidden');
            submitButton.style('visibility', 'hidden');
            fullscreenButton.style('visibility', 'hidden');
        }

        function showControls() {
            controls.style('display', 'flex');
            controls.style('visibility', 'visible');
            inputName.style('visibility', 'visible');
            speedLabel.style('visibility', 'visible');
            speedSlider.style('visibility', 'visible');
            colorSelect.style('visibility', 'visible');
            submitButton.style('visibility', 'visible');
            fullscreenButton.style('visibility', 'visible');
        }

        function windowResized() {
            if (document.fullscreenElement) {
                resizeCanvas(windowWidth, windowHeight);
            }
        }