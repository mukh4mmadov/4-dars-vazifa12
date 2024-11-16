import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

const App: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "96b947a45d33d7dc1c49af3203966408";

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
      setCity("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gradient-to-br from-blue-500 to-indigo-700 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white tracking-wider mb-6">
        Weather Forecast
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full"
      >
        <label
          htmlFor="city-input"
          className="block text-gray-700 text-lg font-medium mb-2"
        >
          Search City
        </label>
        <input
          id="city-input"
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none mb-4"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Get Weather
        </button>
      </form>
      {loading && <Loader />}
      {weather && !loading && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
