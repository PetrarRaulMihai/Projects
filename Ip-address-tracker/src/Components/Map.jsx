import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "../Styles/Map.css";
import "leaflet/dist/leaflet.css";
import RecentAutomatically from "./RecentAutomatically";

function Map({ location }) {
  const [position, setPosition] = useState([47.8409, 25.9138]);
  useEffect(() => {
    // Check if location is a valid string before splitting it
    if (location && typeof location === "string") {
      // remove additional spaces or signs
      const cleanedLocation = location.split(/[\s-*]/)[0];
      const mainApi = "0fc7a17f5407196edefd20609b52664d";
      const cityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cleanedLocation}&appid=${mainApi}`;

      const getCoords = async () => {
        const resp = await fetch(cityUrl);
        const data = await resp.json();
        console.log(data[0].lat, data[0].lon);
        setPosition([data[0].lat, data[0].lon]);
      };

      getCoords();
    }
  }, [location]);

  // pin icon
  const pinIcon = new Icon({
    iconUrl: require("../Images/office.png"),
    iconSize: [38, 38],
  });

  return (
    <div className="">
      <MapContainer center={position} zoom={17} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={pinIcon} />
        <RecentAutomatically position={position} />
      </MapContainer>
    </div>
  );
}

export default Map;
