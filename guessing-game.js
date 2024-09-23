function guessingGame() {
    // Generate a random number between 0 and 99
    const secretNumber = Math.floor(Math.random() * 100);
    let isGameOver = false;

    // Return a function that handles the guessing logic
    return function(guess) {
        if (isGameOver) {
            return "The game is over, you've already won!";
        }

        if (guess === secretNumber) {
            isGameOver = true;
            return "You got it! The game is over.";
        } else if (guess < secretNumber) {
            return "Too low!";
        } else {
            return "Too high!";
        }
    };
}

module.exports = { guessingGame };
