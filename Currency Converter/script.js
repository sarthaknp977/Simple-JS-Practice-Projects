let rate1 = document.querySelector(".rate1");
let rate2 = document.querySelector(".rate2");
let calculateBtn = document.querySelector(".calculate");
let select = document.querySelectorAll(".options select");
let sel1 = select[0];
let sel2 = select[1];

let swap = document.querySelector(".swap");

let input = document.querySelectorAll(".input input");
let inp1 = input[0];
let inp2 = input[1];
let rate = {};
let url = "https://api.exchangerate-api.com/v4/latest/USD";

async function getRates() {
  let res = await fetch(url);
  res = await res.json();

  rate = res.rates;

  fillOptions();
}

calculateBtn.addEventListener("click", () => {
  convertRates();
});

function fillOptions() {
  let val = "";
  Object.keys(rate).forEach((code) => {
    let str = `<option value ="${code}">${code}</option>`;
    val += str;
  });
  select.forEach((s) => {
    s.innerHTML = val;
  });
}
let from, to;
function convertRates() {
  from = sel1.value;
  to = sel2.value;

  let amtToConvert = inp1.value;
  let convertedAmount = (amtToConvert * rate[to]) / rate[from];
  inp2.value = convertedAmount;
  rate1.textContent = `${amtToConvert} ${from} `;
  rate2.textContent = `${convertedAmount.toFixed(2)} ${to}`;
}
getRates();
let temp;
swap.addEventListener("click", function () {
  temp = sel1.value;
  sel1.value = sel2.value;
  sel2.value = temp;
  convertRates();
});
