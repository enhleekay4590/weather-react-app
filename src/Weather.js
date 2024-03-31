import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          className="search-input"
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="search-submit" />
      </form>
      <div>
        <h2>{city}</h2>
        <p>Sunday 20:35</p>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
      <div className="days">
        <span>
          Monday
          <br />
          <br />
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="blue"
            size={20}
            animated={true}
          />
        </span>
        <span>
          Tuesday
          <br />
          <br />
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="blue"
            size={20}
            animated={true}
          />
        </span>
        <span>
          Wednesday
          <br />
          <br />
          <ReactAnimatedWeather
            icon="RAIN"
            color="blue"
            size={20}
            animated={true}
          />
        </span>
        <span>
          Thursday
          <br />
          <br />
          <ReactAnimatedWeather
            icon="WIND"
            color="blue"
            size={20}
            animated={true}
          />
        </span>
      </div>
    </div>
  );
}
