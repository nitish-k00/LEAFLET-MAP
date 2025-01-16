import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom Icon Setup
const LeafIcon = (iconUrl) =>
  L.icon({
    iconUrl,
    iconSize: [80, 80],
    iconAnchor: [22, 94],
  });

// Define custom icons
const boat = LeafIcon(
  "https://www.nicepng.com/png/detail/80-807928_row-boat-clipart-transparent.png"
);
const redIcon = LeafIcon(
  "https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Picture.png"
);
const dog = LeafIcon(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyCBkO4nRaTBji53Xt1-_vmdv9fXJgD07Nw&s"
);

const CustomIcons = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapContainer
        center={[51.5, -0.09]}
        zoom={14}
        style={{
          height: "70vh",
          width: "70%",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <Marker position={[51.5, -0.09]} icon={boat}>
          <Popup>I am a boat marker.</Popup>
        </Marker>
        <Marker position={[51.495, -0.083]} icon={redIcon}>
          <Popup>I am a red marker.</Popup>
        </Marker>
        <Marker position={[51.49, -0.1]} icon={dog}>
          <Popup>I am a dog marker.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CustomIcons;
