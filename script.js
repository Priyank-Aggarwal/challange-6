function startGame() {

    const userNumber = parseInt(document.getElementById("user-number").value);
  
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
      document.getElementById("result").innerHTML = "Error: Please enter a number between 1 and 100";
      return;
    }
  
    let attemptsLeft = 5;
    let minGuess = 1;
    let maxGuess = 100;
    let computerGuess;
    let resultText;
    let guessesText = "";
  
    while (attemptsLeft > 0) {
      computerGuess = Math.floor(Math.random() * (maxGuess - minGuess + 1)) + minGuess;
      attemptsLeft--;
      guessesText += `Computer's guess ${5 - attemptsLeft}: ${computerGuess}<br>`;
        document.getElementById("computerguess").innerHTML = "Computer Guess" + " " + computerGuess
  
      if (computerGuess === userNumber) {
        resultText = "Computer wins!";
        break;
      }
 
      if (attemptsLeft === 0) {
        resultText = "User wins!";
      } else {
        resultText = `Wrong guess. Attempts remaining: ${attemptsLeft}`;
        if (computerGuess < userNumber) {
          minGuess = computerGuess + 1;
        } else {
          maxGuess = computerGuess - 1;
        }
      }
    }
    document.getElementById("result").innerHTML = resultText;
    document.getElementById("guesses").innerHTML = guessesText;
  }