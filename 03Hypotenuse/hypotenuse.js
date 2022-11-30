const base = document.querySelector("#base-measure");
const height = document.querySelector("#height-measure");
const calcButton = document.querySelector("#calc-button");
const result = document.querySelector("#result-hypo");

calcButton.addEventListener("click", () => {
  const hypo = findHypotenuse(base.value, height.value);
  result.innerText = hypo;
});

function findHypotenuse(base, height) {
  let hypotenuse = Math.sqrt(base * base + height * height);

  return hypotenuse;
}
