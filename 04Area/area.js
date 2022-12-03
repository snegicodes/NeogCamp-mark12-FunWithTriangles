const firstSide = document.querySelector("#side-one");
const secondSide = document.querySelector("#side-two");
const thirdSide = document.querySelector("#side-three");
const areaBtn = document.querySelector("#area-btn");
const resultMsg = document.querySelector(".result-msg");
const resultArea = document.querySelector("#result-area");

areaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const firstSideValue = Number(firstSide.value);
  const secondSideValue = Number(secondSide.value);
  const thirdSideValue = Number(thirdSide.value);

  if (
    firstSideValue > 0 &&
    secondSideValue > 0 &&
    thirdSideValue > 0 &&
    firstSideValue + secondSideValue > thirdSideValue &&
    secondSideValue + thirdSideValue > firstSideValue &&
    firstSideValue + thirdSideValue > secondSideValue
  ) {
    const semi = (firstSideValue + secondSideValue + thirdSideValue) / 2;

    const area = Math.sqrt(
      semi *
        (semi - firstSideValue) *
        (semi - secondSideValue) *
        (semi - thirdSideValue)
    ).toFixed(2);
    console.log(area);
    resultMsg.innerHTML = `The area of this triangle is:
    <span id="result-area">${area} sq.units</span>`;
    resultMsg.style.display = "block";
    resultMsg.style.color = "white";
  } else {
    resultMsg.style.display = "block";
    resultMsg.style.color = "red";
    resultMsg.innerText = "Invalid length of sides";
  }
});
