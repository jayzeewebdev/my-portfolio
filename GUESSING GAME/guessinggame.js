 const secretNumber = 26;

    const minNum = 1;
    const maxNum = 100;

    let attempts = 0;

    const inputArea = document.querySelector('.input-area');
    const submitBtn = document.querySelector('.button-submit');
    const divElement = document.querySelector('.display-area');

    submitBtn.addEventListener('click', guessCorrectNumber);

    function guessCorrectNumber() {
      let userGuess = Number(inputArea.value);
      attempts++;

       if (userGuess === secretNumber) {
        divElement.textContent = `CONGRATULATIONS! THE NUMBER WAS ${secretNumber}, IT TOOK YOU ${attempts} ATTEMPTS`;
        //STOPPING THE GAME AFTER THE CORRECT GUESS
        submitBtn.disabled = true;
       } else if (userGuess < secretNumber) {
        // too low
        divElement.textContent = `TOO LOW, TRY AGAIN ${attempts} ATTEMPTS.`;
      } else {
        // too high
        divElement.textContent = `TOO HIGH, TRY AGAIN ${attempts} ATTEMPTS.`;
      }

     

        inputArea.value = "";

      };