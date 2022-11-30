const quizForm = document.querySelector(".questions");
const submit = document.querySelector("#submit-btn");
const resultMsg = document.querySelector(".result-msg");
const result = document.querySelector("#result");

const solutionList = ["30", "10", "4, 5, 7", "60", "a+b+c", "0", "40"];

submit.addEventListener("click", (e) => {
  e.preventDefault();
  calculateScore();
});

function calculateScore() {
  const formResults = new FormData(quizForm);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value === solutionList[index]) {
      score = score + 1;
    }
    index++;
  }
  console.log(score);
  resultMsg.style.display = "block";
  result.innerText = score + "/7" + " 💁🏻‍♂️";
}
