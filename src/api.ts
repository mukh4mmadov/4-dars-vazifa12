export const fetchWeatherData = async (city: string, apiKey: string) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${apiKey}`;
  const response = await fetch(base + query);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return response.json();
};
