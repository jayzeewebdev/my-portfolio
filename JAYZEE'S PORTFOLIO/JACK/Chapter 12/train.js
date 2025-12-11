// Initial speed of the train in milliseconds between frames (lower = faster)
var trainSpeed = 250;

// Initial position of the train (in pixels from the left)
var trainPosition = 0;

// Variable to hold the animation interval ID
var animation;

// Get the train element from the DOM
var train = document.getElementById("train");

// Attach a click event to the train to make it speed up when clicked
train.addEventListener("click", speedUp);

// Get the stop button element from the DOM
var stopButton = document.getElementById("stopButton");

// Attach a click event to the stop button to stop the train when clicked
stopButton.addEventListener("click", stopTrain);

// Function to increase the speed of the train
function speedUp() {
    // Reduce the interval time (increase speed), but not below 10ms
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    // Clear any existing animation interval
    clearInterval(animation);

    // Start a new animation interval with the updated speed
    animation = setInterval(frame, trainSpeed);

    // Function that runs every frame to move the train
    function frame() {
        // Move the train 2 pixels to the right
        trainPosition += 2;
        train.style.left = trainPosition + 'px';  // Update train's position on screen
        console.log(trainPosition);

        // Check if the train has reached the crash point
        checkPosition(trainPosition);
    }
}

// Function to check if the train has reached a specific position
function checkPosition(currentPosition) {
    // If the train reaches 260 pixels from the left
    if (currentPosition === 260) {
        alert("OOOOO!");             // Show an alert (simulate a crash)
        console.log("Crash!");       // Log the crash
        clearInterval(animation);    // Stop the animation
    }
}

// Function to stop the train manually
function stopTrain() {
    // Only stop the train if it hasn't crashed yet
    if (trainPosition < 260) {
        clearInterval(animation);    // Stop the animation
    }
}
