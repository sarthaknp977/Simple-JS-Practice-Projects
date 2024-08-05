let searchedArea = document.querySelector(".search");
let submitBtn = document.querySelector(".submit");
let img = document.querySelector(".icon");
let displayCity = document.querySelector(".your-city");
let displayCountry = document.querySelector(".your-country");
let temperatureArea = document.querySelector(".temperature");
let desc = document.querySelector(".description");
let invisible = document.querySelector(".your-location");
invisible.style.display = "none";
let url;
let api = "9790d579714f4808e3f738b97d19afc7";

let area, city, temperature, description, icon;
let country;
let firstVisit = true;

submitBtn.addEventListener("click", function () {
  area = searchedArea.value.toUpperCase().trim();

  city = area;
  getWeather();
});

async function getWeather() {
  searchedArea.value = "";
  if (area === "") {
    alert("Please enter a city");
    return;
  }

  url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${api}&units=metric`;

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      country = data.sys.country;
      temperature = data.main.temp;
      description = data.weather[0].description;
      icon = data.weather[0].icon;
      displayWeather(data);
    })
    .catch((error) => {
      alert("Error Fetching data. Please try again.");
    });
}

function displayWeather() {
  firstVisit = false;
  let weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  displayCity.textContent = city;
  displayCountry.textContent = country;
  temperatureArea.innerHTML = `<h1>${temperature}<sup><b>°</b>C</sup></h1>`;
  desc.innerHTML = `<span>${description}</span>`;
  desc.style.color = "black";
  invisible.style.display = "block";
  img.src = weatherIcon;
}
