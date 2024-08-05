let heightFtInp = document.querySelector("#ft");
let heightInchInp = document.querySelector("#inch");
let weightInp = document.querySelector("#weight-value");
let calculateBtn = document.querySelector(".calculate");
let heightOfPersonInInch, heightOfPersonInFt;
let display = document.querySelector(".display span");
let img = document.querySelector(".display img");
// weightUnit.style.backgroundColor = "red";

calculateBtn.addEventListener("click", function () {
  let weightOfPerson = parseFloat(weightInp.value);
  heightOfPersonInFt = parseInt(heightFtInp.value);
  heightOfPersonInInch = parseInt(heightInchInp.value);

  if (
    isNaN(weightOfPerson) ||
    isNaN(heightOfPersonInFt) ||
    isNaN(heightOfPersonInInch)
  ) {
    console.error("Invalid input. Please enter numeric values.");
    return;
  }

  let totalHeightOfPersonInInches =
    heightOfPersonInFt * 12 + heightOfPersonInInch;
  let totalHeightInMeter = totalHeightOfPersonInInches * 0.0254;

  let weightUnit = document.querySelector('input[name="weight-unit"]:checked');

  if (weightUnit.id === "lb-unit") {
    weightOfPerson *= 0.4535924;
  }

  let BMI = weightOfPerson / (totalHeightInMeter * totalHeightInMeter);
  display.textContent = "BMI : " + BMI;
  img.style.display = "flex";
});
