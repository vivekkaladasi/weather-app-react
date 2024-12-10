import React from "react";

const WeatherCard = ({ weather, unit }) => {
  if (!weather) return null;

  const { temp_c, temp_f, humidity, wind_kph, condition } = weather;
  const temperature = unit === "C" ? temp_c : temp_f;

  return (
    <div className="weather-card">
      <h2>{condition.text}</h2>
      <img src={condition.icon} alt={condition.text} />
      <p>Temperature: {temperature}°{unit}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {wind_kph} kph</p>
    </div>
  );
};

export default WeatherCard;
