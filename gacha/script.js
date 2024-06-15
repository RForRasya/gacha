// Add event listener to the button
document
  .getElementById("generateBtn")
  .addEventListener("click", startRandomGeneration);

function startRandomGeneration() {
  const min = 1;
  const max = 850;
  let finished = false;

  // Function to generate and display a random number
  function generateRandomNumber() {
  // Get the audio element
  var audio = document.getElementById('Game Wheel Spin Sound Effect');

  // Get the play button
  var playButton = document.getElementById('audio');
  var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 
    // Generate a random number between min and max
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // Display the random number in the result element
    document.getElementById("result").textContent = randomNumber;

    // If the 3-second period is not finished, schedule another random number generation
    if (!finished) {
      // Schedule the next generation after a random interval between 50ms and 100ms
      const nextInterval = Math.floor(Math.random() * 50) + 50;
      setTimeout(generateRandomNumber, nextInterval);
    }
  }

  // Set a timeout to stop the random number generation after 2 seconds
  setTimeout(() => {
    finished = true;
  }, 7000);

  // Start the random number generation
  generateRandomNumber();
}
