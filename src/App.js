import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import './App.css';
import { WEATHER_API_URL } from './api';
import { useState } from 'react';
import Forecast from './components/forecast/forecast';
import Map from './components/map/map';

function App() {
      const api_key = process.env.REACT_APP_WEATHER_API_KEY;
      const [currentWeather, setCurrentWeather] = useState(null);
      const [forecast, setForecast] = useState(null);
      const [position, setPosition] = useState(null);

      const handleOnSearchChange = async (searchData) => {
            const [latitude, longitude] = searchData.value.split(' ');
            try {
                  const [currentWeatherFetch, forecastFetch] =
                        await Promise.all([
                              fetch(
                                    `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`
                              ),
                              fetch(
                                    `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`
                              ),
                        ]);

                  if (!currentWeatherFetch.ok || !forecastFetch.ok) {
                        throw new Error('API request failed');
                  }

                  const [weatherData, forecastData] = await Promise.all([
                        currentWeatherFetch.json(),
                        forecastFetch.json(),
                  ]);
                  setPosition({ latitude: latitude, longitude: longitude });
                  setCurrentWeather({ city: searchData.label, ...weatherData });
                  setForecast({ city: searchData.label, ...forecastData });
            } catch (error) {
                  console.log(error);
            }
      };

      return (
            <div className="bg-slate-400 min-h-screen font-custom pt-10">
                  <div>
                        <div className="max-w-6xl mx-auto">
                              <Search onSearchChange={handleOnSearchChange} />
                              {currentWeather && (
                                    <CurrentWeather data={currentWeather} />
                              )}
                        </div>
                        <div className="max-w-6xl mx-auto h-96">
                              {position && (
                                    <Map
                                          position={position}
                                          data={currentWeather}
                                    />
                              )}
                        </div>
                        <div className="max-w-6xl mx-auto">
                              {forecast && <Forecast forecastData={forecast} />}
                        </div>
                  </div>
            </div>
      );
}

export default App;
