import React from "react";
import "../styles/WeatherCard.css";

const WeatherCard = ({ data }) => (
  <div className="WeatherCard">
    <h2>
      {data.name}, {data.sys.country}
    </h2>
    <p className="weather-property">
      Temperature: {Math.round(data.main.temp)}°C
    </p>

    <p className="weather-property">
      Feels Like: {Math.round(data.main.feels_like)}°C
    </p>
    <p className="weather-property">Weather: {data.weather[0].description}</p>
    <p className="weather-property">Humidity: {data.main.humidity}%</p>
    <p className="weather-property">Visibility: {data.visibility / 1000} KMs</p>
    <p className="weather-property">Wind Speed: {data.wind.speed} m/s</p>
  </div>
);

export default WeatherCard;
