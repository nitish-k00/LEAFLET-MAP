import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LeafIcon = (iconUrl) =>
  L.icon({
    iconUrl,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });

const ukraine = LeafIcon(
  "https://cdn.webshopapp.com/shops/94414/files/52440074/flag-of-ukraine.jpg"
);

const NewYork = LeafIcon(
  "https://fullsuitcase.com/wp-content/uploads/2022/05/One-day-in-New-York-USA-NYC-day-trip-itinerary.jpg.webp"
);

const japan = LeafIcon(
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"
);

const AccessibleMaps = () => {
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
        zoom={1.9}
        style={{ height: "70vh", width: "70%" }}
        role="application"
        aria-label="Interactive map showing popular cities across the world"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <Marker
          position={[50.4501, 30.5234]}
          icon={ukraine}
          aria-label="Kyiv, Ukraine - Capital city known for its historical landmarks"
        >
          <Popup>
            Kyiv, Ukraine, is known for its historical sites such as St.
            Sophia's Cathedral and the Kyiv Pechersk Lavra.
          </Popup>
        </Marker>

        <Marker
          position={[40.7128, -74.006]}
          icon={NewYork}
          aria-label="New York, USA - A bustling metropolis and cultural hub"
        >
          <Popup>
            New York City is famous for its iconic skyline, the Statue of
            Liberty, Central Park, and its diverse culture.
          </Popup>
        </Marker>

        <Marker
          position={[35.6762, 139.6503]}
          icon={japan}
          aria-label="Tokyo, Japan - A global center for technology and culture"
        >
          <Popup>
            Tokyo, Japan, is known for its mix of traditional temples and modern
            skyscrapers, as well as its tech industry.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default AccessibleMaps;
