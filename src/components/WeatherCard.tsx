import React from "react";

interface WeatherProps {
  weather: {
    name: string;
    sys: { country: string };
    weather: { main: string; icon: string }[];
    main: { temp: number };
  };
}

const WeatherCard: React.FC<WeatherProps> = ({ weather }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full">
      <div className="flex justify-center mb-4">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="w-24 h-24"
        />
      </div>
      <div className="text-center">
        <h5 className="text-2xl font-semibold mb-2">{`${weather.name}, ${weather.sys.country}`}</h5>
        <p className="text-lg text-gray-600">{weather.weather[0].main}</p>
        <div className="text-4xl font-bold mt-2 text-indigo-600">
          <span>{Math.round(weather.main.temp)}</span>
          <span>°C</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
