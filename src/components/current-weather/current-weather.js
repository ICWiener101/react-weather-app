import { degreesToWindDirection } from '../../lib/util';

const CurrentWeather = ({ data }) => {
      return (
            <div className="w-80 rounded-md shadow-xl my-5 mx-auto bg-slate-300 text-gray-700">
                  <div className="flex justify-between items-center p-5 pt-0">
                        <div>
                              <p className="font-bold text-2xl m-0 tracking-wide leading-none">
                                    {data.city}
                              </p>
                              <p className="font-medium text-m m-0 leading-none capitalize">
                                    {data.weather[0].description}
                              </p>
                        </div>
                        <img
                              src={`icons/${data.weather[0].icon}.png`}
                              alt="weather"
                              className="w-24"
                        />
                  </div>
                  <div className="flex justify-between items-center p-5 pt-0">
                        <p className="font-bold text-6xl w-auto my-2 mx-0 tracking-tighter">
                              {Math.ceil(data.main.temp)}&#8451;
                        </p>
                        <div className="w-full pl-5">
                              <div className="flex justify-between">
                                    <span className="border-b border-slate-400 w-full text-center">
                                          Details
                                    </span>
                              </div>
                              <div className="flex justify-between">
                                    <span className="text-left font-light text-m">
                                          Feels Like
                                    </span>
                                    <span className="text-right font-semibold text-m">
                                          {Math.ceil(data.main.feels_like)}
                                          &#8451;
                                    </span>
                              </div>
                              <div className="flex justify-between">
                                    <span className="text-left font-light text-m">
                                          Wind
                                    </span>
                                    <span className="text-right font-semibold text-m">
                                          {data.wind.speed.toFixed(0)} m/s{' '}
                                          {degreesToWindDirection(
                                                data.wind.deg
                                          )}
                                    </span>
                              </div>
                              <div className="flex justify-between">
                                    <span className="text-left font-light text-m">
                                          Humidity
                                    </span>
                                    <span className="text-right font-semibold text-m">
                                          {data.main.humidity}%
                                    </span>
                              </div>
                              <div className="flex justify-between">
                                    <span className="text-left font-light text-m">
                                          Pressure
                                    </span>
                                    <span className="text-right font-semibold text-m">
                                          {data.main.pressure} hPa
                                    </span>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CurrentWeather;
