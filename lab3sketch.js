var colourPicker; // function scope
let strokeWeightSlider;
var bgColourPicker;
let myRadio;


function setup(){
    
    createCanvas(720,300);
    colourPicker = createColorPicker('yellow');
    
    strokeWeightSlider = createSlider(1,10,5,1);
    
    bgColourPicker = createColorPicker('orange'); 
    
    var bgColorButton = createButton('Refresh');
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed( repaint ); 
    background( bgColourPicker.value() );

      
        // Create a radio button element and place it
        // in the top-left corner.
        myRadio = createRadio();
        myRadio.position(20, 500);
        myRadio.size(50);
      
        // Add a few color options.
        // Color values are labeled with
        // emotions they evoke.
        myRadio.option('red', 'love');
        myRadio.option('yellow', 'joy');
        myRadio.option('blue', 'trust');
      
        // Choose a default option.
        myRadio.selected('yellow');
      
        describe('A yellow square with three options listed, "love", "joy", and "trust". The square changes color when the user selects a new option.');
      }

      
      function drawradio() {
        // Set the background color using the radio button.
        let c = myRadio.value();
        background(c);
      }


function draw(){
    // ellipse(mouseX, mouseY, 10,10);
    strokeWeight( strokeWeightSlider.value() );
    stroke( colourPicker.value() );   

    // remixed from p5js.org/reference/mouseispressed/
    if(mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    /// end remix
}

function repaint(){
    background( bgColourPicker.value() );
    console.log( bgColourPicker.value().setGreen(255) );
}
