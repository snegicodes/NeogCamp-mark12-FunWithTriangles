const checkBtn = document.querySelector("#check-btn");
const inputs = document.querySelectorAll(".input-area");
const resultMsg = document.querySelector("#result-msg");

checkBtn.addEventListener("click", isTrianglePossible);

function isTrianglePossible() {
  const angleSum = sumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  if (
    Number(inputs[0].value) > 0 &&
    Number(inputs[1].value) > 0 &&
    Number(inputs[2].value) > 0
  ) {
    if (angleSum === 180) {
      resultMsg.innerText = "Yes, the given triangle is possible. ✅";
      resultMsg.style.color = "green";
    } else {
      resultMsg.innerText = "No, the given triangle is not possible. ❌";
      resultMsg.style.color = "red";
    }
  } else {
    resultMsg.innerText = "Angles must be greater than 0 💁🏻‍♂️";
    resultMsg.style.color = "red";
  }
}

function sumOfAngles(a1, a2, a3) {
  return a1 + a2 + a3;
}
