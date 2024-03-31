import React, { useState } from "react";

export default function Weather() {
  let [city, setCity] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Searching">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          className="searchEngine"
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
      <main>
        <div id="icon"></div>
        <div class="current-tempreture">
          <span class="weather-temperature" id="weather-temperature"></span>
          <span class="tempreture-unit">°C</span>
        </div>
        <h2 class="city-name" id="city-name"></h2>

        <p class="weather-description">
          <span id="time"></span>, <span id="description"></span>
          <br />
          Humidity: <strong id="humidity"></strong>, Wind:
          <strong id="wind"></strong>
        </p>
      </main>
    </div>
  );
}
