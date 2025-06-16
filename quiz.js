function checkAnswer() {
  const correctAnswer = "4";
  const selected = document.querySelector('input[name="quiz"]:checked');
  const feedback = document.getElementById("feedback");

  if (!selected) {
    feedback.textContent = "Please select an answer.";
    feedback.style.color = "#dc3545"; // red
    return;
  }

  const userAnswer = selected.value;

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "#28a745"; // green
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "#dc3545"; // red
  }
}

document
  .getElementById("submit-answer")
  .addEventListener("click", checkAnswer);