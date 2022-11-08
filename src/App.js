import React, { useState } from "react";

export default function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");

  const apiKey = "4a798db9c043f7e754baeab23e77d730";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };

  return (
    <div className="flex flex-col mx-60">
      <input
        className="w-auto p-1.5 outline-none rounded border border-slate-200 mt-5"
        placeholder="Enter City..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === "undefined" ? (
        <div className="text-center mt-5 ">
          <p className="">Welcome</p>
        </div>
      ) : (
        <div className="text-center space-y-36 text-5xl">
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.main.temp)}</p>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}
