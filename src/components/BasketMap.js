import { MapContainer, TileLayer } from "react-leaflet";
import { Map } from "leaflet";
import "leaflet/dist/leaflet.css";
const BasketMap = () => {
  return (
    <MapContainer
      center={[40.73061, -73.935242]}
      zoom={[13]}
      style={{ height: "100vh", width: "100wh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default BasketMap;
