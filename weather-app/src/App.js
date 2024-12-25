import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./styles/App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (location) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Location not found");
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
