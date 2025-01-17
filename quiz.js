// function that checks the answer
function checkAnswer() {
    // Correct answer for the quiz question
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');

    // Ensure an option is selected before proceeding
    if (userAnswerElement) {
        const userAnswer = userAnswerElement.value;
        const feedbackElement = document.getElementById('feedback');

        // Compare the user answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}

// Add event listener to the "Submit Answer" button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
