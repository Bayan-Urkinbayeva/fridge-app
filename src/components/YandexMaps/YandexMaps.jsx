import { React, useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const YandexMaps = () => {
  let [currentLatitude, setcurrentLatitude] = useState(43.23364);
  let [currentLongitude, setcurrentLongitude] = useState(76.779491);

  const fridgeCoords = [
    [43.23364, 76.779491],
    [43.233218, 76.769345],
    [43.234345, 76.781028],
  ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setcurrentLatitude(position.coords.latitude);
      setcurrentLongitude(position.coords.longitude);
    });
  }, []);

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

          {fridgeCoords.map((fridgeCoord) => (
            <Placemark
              defaultGeometry={fridgeCoord}
              key={fridgeCoord.toString()}
              options={{ preset: "islands#geolocationIcon" }}
              modules={["geoObject.addon.balloon"]}
              properties={{
                balloonContentBody: `<ul class="list-group">
                  <li class="list-group-item disabled">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
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
