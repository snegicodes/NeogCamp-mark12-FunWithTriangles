const base = document.querySelector("#base-measure");
const height = document.querySelector("#height-measure");
const calcButton = document.querySelector("#calc-button");
const resultMsg = document.querySelector("#result-msg");

calcButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (base.value > 0 && height.value > 0) {
    const hypo = findHypotenuse(base.value, height.value);
    resultMsg.innerText = `The length of hypotenuse is :
    ${hypo}`;
    resultMsg.style.color = "rgb(0, 183, 255)";
  } else {
    resultMsg.innerText = "Measure of length must be greater than 0";
    resultMsg.style.color = "red";
  }
});
function findHypotenuse(base, height) {
  let hypotenuse = Math.sqrt(base * base + height * height);

  return hypotenuse;
}
