import { React, useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const YandexMaps = ({fridges=[]}) => {
  let [currentLatitude, setcurrentLatitude] = useState(43.23364);
  let [currentLongitude, setcurrentLongitude] = useState(76.779491);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setcurrentLatitude(position.coords.latitude);
      setcurrentLongitude(position.coords.longitude);
    });
  }, [navigator.geolocation]);

  return (
    <div className="map_container">
      <YMaps>
        <Map
          width="100%"
          height="100vh"
          defaultState={{
            center: [currentLatitude, currentLongitude],
            zoom: 13,
          }}
          state={{
            center: [currentLatitude, currentLongitude],
            zoom: 14,
          }}
        >
          <Placemark
            geometry={[currentLatitude, currentLongitude]}
            options={{ preset: "islands#redDotIcon" }}
            properties={{}}
          />

          {fridges.map((fridge) => (
            <Placemark
              defaultGeometry={[fridge.coords.latitude, fridge.coords.longitude]}
              key={fridge.id}
              options={{ preset: "islands#geolocationIcon" }}
              modules={["geoObject.addon.balloon"]}
              properties={{
                balloonContentBody: `<ul className="list-group">
                  <li className="list-group-item disabled">${fridge.name}</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>`,
              }}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};
export default YandexMaps;
