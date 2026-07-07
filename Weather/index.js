let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");

let w_feelsLike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

let citySearch = document.querySelector(".weather_search");

// to get the actual country name
const getCountryName = (code) => {
  return new Intl.DisplayNames([code], { type: "region" }).of(code);
};

// to get the date and time
const getDateTime = (dt) => {
  const curDate = new Date(dt * 1000); //convert second into milliseconds
  console.log(curDate);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  return formatter.format(curDate);
  // return formattedDate;
};

let city = "New Delhi";
//search city functionality
citySearch.addEventListener('submit', (e) => {
  e.preventDefault();

  let cityName = document.querySelector(".city_name")
  city = cityName.value;
  getWeatherData();
  cityName.value = null;
});


const getWeatherData = async() => {
  const apiKey = '9f3257f2e63f5ce298d33dd102219419';
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try{
    const res = await fetch(weatherUrl);

    if (!res.ok) throw new Error('Location not found!');

    const data = await res.json();
    // console.log(data);
    const {main, name, weather, wind, sys, dt} = data;
    cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`
    dateTime.innerHTML = getDateTime(dt);

    w_forecast.innerHTML = weather[0].main;
    w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;
 

    w_temperature.innerHTML = `${main.temp.toFixed()}°C`;    
    w_minTem.innerHTML = `Min: ${main.temp_min.toFixed()}°C`;
    w_maxTem.innerHTML = `Max: ${main.temp_max.toFixed()}°C`;

    w_feelsLike.innerHTML = `${main.feels_like.toFixed(2)}°C`;
    w_humidity.innerHTML = `${main.humidity}%`;
    w_wind.innerHTML = `${wind.speed}m/s`;
    w_pressure.innerHTML = `${main.pressure}hPa`;


  }catch(error){
    cityName.innerHTML = `<p style="color:red;"><i class="fas fa-exclamation-triangle"></i> ${error.message}`;
  }
};

document.body.addEventListener("load",getWeatherData());
