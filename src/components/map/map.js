import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { useState, useEffect } from 'react';

const Map = ({ position, data }) => {
      const [mapPosition, setMapPosition] = useState([
            position.latitude,
            position.longitude,
      ]);
      useEffect(() => {
            setMapPosition([position.latitude, position.longitude]);
      }, [position]);

      const mapStyle = {
            height: '300px',
            width: '100%',
            margin: '0 auto',
            borderRadius: '5px',
      };

      return (
            <div className="h-96 w-9/12 mx-auto rounded-sm">
                  <MapContainer
                        style={mapStyle}
                        center={mapPosition}
                        zoom={11}
                        scrollWheelZoom={true}
                        key={mapPosition.toString()}
                        animate={true}
                  >
                        <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker
                              position={mapPosition}
                              icon={
                                    new Icon({
                                          iconUrl: markerIconPng,
                                          iconSize: [25, 41],
                                          iconAnchor: [12, 41],
                                    })
                              }
                              animate={true}
                        >
                              <Popup className="flex flex-col">
                                    <div className="flex flex-row flex-wrap w-12/12">
                                          <p className="flex w-12/12 font-medium text-m my-0 m-0 leading-none capitalize">
                                                {data.weather[0].description}
                                          </p>
                                          <img
                                                src={`icons/${data.weather[0].icon}.png`}
                                                alt="weather"
                                                className="w-12/12"
                                          />
                                          <p className="flex font-bold text-xl my-0 m-0 tracking-tighter p-0">
                                                {Math.ceil(data.main.temp)}
                                                &#8451;
                                          </p>
                                    </div>
                                    <div>
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
                                                      {Math.ceil(
                                                            data.main.feels_like
                                                      )}
                                                      &#8451;
                                                </span>
                                          </div>
                                          <div className="flex justify-between">
                                                <span className="text-left font-light text-m">
                                                      Wind
                                                </span>
                                                <span className="text-right font-semibold text-m">
                                                      {data.wind.speed.toFixed(
                                                            0
                                                      )}{' '}
                                                      m/s
                                                </span>
                                          </div>
                                    </div>
                              </Popup>
                        </Marker>
                  </MapContainer>
            </div>
      );
};

export default Map;
