import React from 'react';
import { weekdayConverter } from '../../lib/util';
import {
      Accordion,
      AccordionItem,
      AccordionItemHeading,
      AccordionItemButton,
      AccordionItemPanel,
} from 'react-accessible-accordion';

const Forecast = ({ forecastData }) => {
      const forecastList = forecastData.list.filter((date) => {
            return date.dt_txt.split(' ')[1] === '12:00:00';
      });

      return (
            <>
                  <Accordion allowZeroExpanded className="w-9/12 mx-auto my-5">
                        {forecastList.map((day) => (
                              <AccordionItem
                                    className="font-medium tracking-wide text-gray-700 text-xl mb-5"
                                    key={day.dt}
                              >
                                    <AccordionItemHeading>
                                          <AccordionItemButton className="flex justify-between items-center p-8 rounded-md shadow-xl my-5 mx-auto bg-slate-300 text-gray-700">
                                                <div className="flex items-center justify-evenly w-12/12">
                                                      <div className="h-14">
                                                            {' '}
                                                            <img
                                                                  className="h-full"
                                                                  src={`icons/${day.weather[0].icon}.png`}
                                                                  alt={`${day.weather[0].description}`}
                                                            />
                                                      </div>
                                                      <div>
                                                            {' '}
                                                            {weekdayConverter(
                                                                  day.dt_txt
                                                            )}
                                                      </div>
                                                </div>
                                                <div className="flex items-center justify-evenly w-3/12">
                                                      {' '}
                                                      <div>
                                                            <div className="capitalize">
                                                                  {
                                                                        day
                                                                              .weather[0]
                                                                              .description
                                                                  }
                                                            </div>
                                                            <div>
                                                                  {Math.ceil(
                                                                        day.main
                                                                              .temp_max
                                                                  )}
                                                                  &#8451; /
                                                                  {Math.ceil(
                                                                        day.main
                                                                              .temp_min
                                                                  )}
                                                                  &#8451;
                                                            </div>
                                                      </div>
                                                </div>
                                          </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                          <div className="px-4">
                                                <div className="flex justify-between">
                                                      <span className="text-left font-light text-m">
                                                            Feels Like
                                                      </span>
                                                      <span className="text-right font-semibold text-m">
                                                            {Math.ceil(
                                                                  day.main
                                                                        .feels_like
                                                            )}
                                                            &#8451;
                                                      </span>
                                                </div>
                                                <div className="flex justify-between">
                                                      <span className="text-left font-light text-m">
                                                            Wind
                                                      </span>
                                                      <span className="text-right font-semibold text-m">
                                                            {Math.ceil(
                                                                  day.wind.speed
                                                            )}{' '}
                                                            m/s
                                                      </span>
                                                </div>
                                                <div className="flex justify-between">
                                                      <span className="text-left font-light text-m">
                                                            Humidity
                                                      </span>
                                                      <span className="text-right font-semibold text-m">
                                                            {day.main.humidity}%
                                                      </span>
                                                </div>
                                                <div className="flex justify-between">
                                                      <span className="text-left font-light text-m">
                                                            Pressure
                                                      </span>
                                                      <span className="text-right font-semibold text-m">
                                                            {day.main.pressure}{' '}
                                                            hPa
                                                      </span>
                                                </div>
                                          </div>
                                    </AccordionItemPanel>
                              </AccordionItem>
                        ))}
                  </Accordion>
            </>
      );
};

export default Forecast;
