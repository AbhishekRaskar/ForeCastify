import React, { useState, useEffect } from "react";
import axios from "axios";

const Forecast = () => {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cityData = JSON.parse(localStorage.getItem("forecastCity"));
    if (cityData) {
      const { lon, lat } = cityData;
      const fetchForecastData = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=6b6b93bd75c7941f0c6fa30944de5164&units=imperial`
          );
          setForecastData(response.data.list);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching forecast data:", error);
        }
      };
      fetchForecastData();
    }
  }, []);

  const filterForecastByDay = () => {
    const filteredForecast = [];
    const dates = {};

    forecastData.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!dates[date]) {
        dates[date] = true;
        filteredForecast.push(item);
      }
    });

    return filteredForecast;
  };

  const getBackgroundImage = (weatherCondition) => {
    switch (weatherCondition) {
      case "Clear":
        return "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
      case "Clouds":
        return "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
      case "Rain":
      case "Drizzle":
        return "url('https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
      case "Thunderstorm":
        return "url('https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
      case "Snow":
        return "url('https://images.unsplash.com/photo-1548777123-e216912df7d8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
      default:
        return "";
    }
  };

  const renderForecastData = () => {
    const filteredForecast = filterForecastByDay();

    return filteredForecast.map((item) => {
      const backgroundImage = getBackgroundImage(item.weather[0].main);

      return (
        <div
          key={item.dt}
          className="forecast-card bg-white rounded-lg shadow-md p-6 mb-4"
          style={{ backgroundImage }}
        >
          <h3 className="text-xl font-semibold mb-2">
            {new Date(item.dt_txt).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="Weather Icon"
                className="w-18 h-18 mr-4"
              />
              <div>
                <span className="text-lg text-white">{item.weather[0].description}</span>
              </div>
            </div>
            <div className="flex flex-col text-lg text-gray-600">
              <span>
                Temperature: {Math.round(((item.main.temp - 32) * 5) / 9)}°C
              </span>
              <span>Humidity: {item.main.humidity}%</span>
              <span>Wind Speed: {item.wind.speed} mph</span>
              <span>Pressure: {item.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center">5-Day Forecast</h2>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid gap-4">{renderForecastData()}</div>
      )}
    </div>
  );
};

export default Forecast;
