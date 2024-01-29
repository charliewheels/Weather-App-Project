function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let citySearchFormElement = document.querySelector("#city-search-form");
citySearchFormElement.addEventListener("submit", handleSearchSubmit);
