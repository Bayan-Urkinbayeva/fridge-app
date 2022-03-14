import {React, useEffect, useState} from "react";
import { YMaps, Map, Placemark} from 'react-yandex-maps';
const YandexMaps = () => {
    let [latitude_1, setLatitude_1] = useState(undefined);
    let [longitude_1, setLongitude_1]=useState(undefined);
    const fridgeCoords = [[43.233640, 76.779491],[43.233218, 76.769345],[43.234345, 76.781028]];
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            setLatitude_1(latitude_1=position.coords.latitude);
            setLongitude_1(longitude_1=position.coords.longitude);
        });
    },[])
    return (
    <div className ="map_container">
        <YMaps>
            <div>
                <Map 
                width="100%" height="100vh"
                defaultState={{ 
                    center: [latitude_1, longitude_1], 
                    zoom: 17,
                    controls: [],
                }}>
                    <Placemark
                    defaultGeometry={[latitude_1, longitude_1]} 
                    options={{preset: 'islands#geolocationIcon'}} 
                    />
                    

                    {fridgeCoords.map((fridgeCoord) => 
                    <Placemark 
                    defaultGeometry={fridgeCoord} 
                    key={fridgeCoord.toString()} 
                    options={{preset: 'islands#redDotIcon'}} />
                    )}
                </Map>
            </div>
        </YMaps>
    </div>
    )
}
export default YandexMaps;