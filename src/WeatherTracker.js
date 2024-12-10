// WeatherTracker.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherTracker() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const API_KEY = "your_openweathermap_api_key"; // Replace with your API key
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Plano,TX,US&units=imperial&appid=${API_KEY}`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (err) {
        setError("Unable to fetch weather data");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <p>Loading weather...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="weather-tracker">
      <h3>Plano, TX Weather</h3>
      <p>Temperature: {weather.main.temp}°F</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} mph</p>
    </div>
  );
}

export default WeatherTracker;
