//Step 7 get the response from axios from step 6
function refreshWeather(response) {
  //Step 8 create an id class to the temperature code
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  // Step 12 inject the weather condition inside the description
  let descriptionElement = document.querySelector("#description");
  //Step 14 add humidity data
  let humidityElement = document.querySelector("#humidity");
  //Step 16 add wind speed data
  let windSpeedElement = document.querySelector("#wind-speed");
  //Step 18 add current time data
  let timeElement = document.querySelector("#time");
  // step 20 add date and time
  let date = new Date(response.data.time * 1000);
  // step 22 inject icon
  let iconElement = document.querySelector("#icon");

  //Step 11 console log the weather condition from the api   console.log(response.data.condition.description);

  cityElement.innerHTML = response.data.city;

  //Step 19 add date and time
  timeElement.innerHTML = formatDate(date);

  // Step 13 add the weather condition to the innerHTML
  descriptionElement.innerHTML = response.data.condition.description;

  // Step 15 add humidity data to the innerHTML. Include it in a bucket to show the %, instead of only the number
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  //Step 17 add wind speed to innerHTML - Check console to verify how it is labelled by the API data
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;

  //Step 9 - round the temperature number
  temperatureElement.innerHTML = Math.round(temperature);

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

// Step 21 the function date.getDay display the day of the week through numbers instead of Mon,Tue, etc
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
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
