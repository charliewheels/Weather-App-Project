function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "f01cdea927tb3faa4b57435de8b1eo83";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let citySearchFormElement = document.querySelector("#city-search-form");
citySearchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
