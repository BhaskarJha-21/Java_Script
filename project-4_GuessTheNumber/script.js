// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = Number(document.getElementById("guess").value);
    const feedback = document.getElementById("feedback");
    const attemptsDisplay = document.getElementById("attempts");

    if (!guess || guess < 1 || guess > 100) {
        feedback.innerText = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;
    attemptsDisplay.innerText = `Attempts: ${attempts}`;

    if (guess === randomNumber) {
        feedback.innerText = `Congratulations! You guessed the correct number: ${randomNumber}`;
        feedback.style.color = "#28a745";
    } else if (guess < randomNumber) {
        feedback.innerText = "Too low! Try again.";
        feedback.style.color = "#ff4757";
    } else {
        feedback.innerText = "Too high! Try again.";
        feedback.style.color = "#ff4757";
    }
}
