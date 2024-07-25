//Step 7 get the response from axios from step 6
function refreshWeather(response) {
  //Step 8 create an id class to the temperature code
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  //Step 9 - round the temperature number
  temperatureElement.innerHTML = Math.round(temperature);
}

//Step 3 - Make the API call and update the interface
/// We are breaking these two functions because of *Separation of concern*. We want one function to do right and do it well
function searchCity(city) {
  // Step 5 apiKey and apiUrl
  let apiKey = "5cde882fbte05f4fd34606o04753ab95";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  // Step 6 After console log to check if the API is working, input the axios line
  axios.get(apiUrl).then(refreshWeather);
}

//Step 2
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  // Step 4 - the value of the input below is going to be sent to step 3
  searchCity(searchInput.value);
}

// Step 1
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

// Step 10 set a city and their current temperature to the default page
searchCity("Brisbane");
