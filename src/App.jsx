
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import SavedCities from "./components/SavedCities";
import UnitToggle from "./components/UnitToggle";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("C");
  const [savedCities, setSavedCities] = useState(
    JSON.parse(localStorage.getItem("savedCities")) || []
  );

  useEffect(() => {
    console.log("Saved Cities:", savedCities); 
  }, [savedCities]); 

  const fetchWeather = async (city) => {
    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      console.log(`Fetching weather data for: ${city}`);

      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&units=metric`
      );

      console.log("API Response:", response);
      console.log("Response data:", response.data);
      console.log("Current weather data:", response.data.current);

      if (response.data && response.data.current) {
        setWeather(response.data); 
      } else {
        throw new Error("Weather data not found");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Could not fetch weather data. Try again.");
    }
  };

  const handleSaveCity = (city) => {
    if (city && !savedCities.includes(city)) {
      const updatedCities = [...savedCities, city];
      setSavedCities(updatedCities);
      localStorage.setItem("savedCities", JSON.stringify(updatedCities));
    }
  };

  const handleCityClick = (city) => {
    if (city) {
      fetchWeather(city);
    } else {
      console.error("City name is undefined");
    }
  };

  const handleToggleUnit = (unit) => {
    setUnit(unit);
  };

  return (
    <div className="app">
      <SearchBar onSearch={fetchWeather} />
      <button onClick={() => handleSaveCity(weather?.location?.name)}>
        Save City
      </button>
      <WeatherCard weather={weather?.current} unit={unit} />
      <SavedCities cities={savedCities} onSelectCity={handleCityClick} />
      <UnitToggle unit={unit} onToggle={handleToggleUnit} />
      <footer className="footer">
  <p>Designed and developed by Vivek Kaladasi</p>
</footer>
    </div>
  );
};

export default App;
