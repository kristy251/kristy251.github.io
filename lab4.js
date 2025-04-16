let capture;
      let snapshotButton;
      let currentSnapshot = null;

      function setup() {
        noCanvas(); // No canvas in this sketch

        // Start webcam
        capture = createCapture(VIDEO);
        capture.size(320, 240);
        capture.position(20, 20);

        // Button to take snapshot
        snapshotButton = createButton('📸 Take Snapshot');
        snapshotButton.position(20, 280);
        snapshotButton.mousePressed(takeSnapshot);
      }

      function takeSnapshot() {
        // Create a hidden canvas to grab webcam frame
        let tempCanvas = createGraphics(320, 240);
        tempCanvas.image(capture, 0, 0, 320, 240);

        // Convert to base64 image
        let dataURL = tempCanvas.elt.toDataURL();

        // Remove previous snapshot if it exists
        if (currentSnapshot instanceof p5.Element) {
          currentSnapshot.remove();
        }

        // Create new image element and store reference
        currentSnapshot = createImg(dataURL, 'Snapshot');
        currentSnapshot.size(160, 120);
        currentSnapshot.position(360, 20);
      }