
  // Secret number is ALWAYS 7
  var secret = 7;

  let attempts = 0;

  // First guess
  let guess = parseInt(prompt("Please guess the secret number (1-20)"));
  attempts++;

  // Loop until correct
  while (guess !== secret) {

    if (guess < secret) {
      alert("Incorrect, too low");
    } 
    else if (guess > secret) {
      alert("Incorrect, too high");
    }

    // Ask again
    guess = parseInt(prompt("Please guess the secret number (1-20)"));
    attempts++;
  }

  // Correct guess message
  alert(`Correct Guess! You guessed it in ${attempts} attempt(s).`);

