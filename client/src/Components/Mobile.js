import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
});

const LocationMarker = () => {
  const map = useMap();

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 16 });

    function onLocationFound(e) {
      const radius = e.accuracy;

      L.marker(e.latlng)
        .addTo(map)
        .bindPopup(`You are within ${radius} meters from this point`)
        .openPopup();

      L.circle(e.latlng, radius).addTo(map);
    }

    function onLocationError(e) {
      alert(e.message);
    }

    map.on("locationfound", onLocationFound);
    map.on("locationerror", onLocationError);

    return () => {
      map.off("locationfound", onLocationFound);
      map.off("locationerror", onLocationError);
    };
  }, [map]);

  return null;
};

const Mobile = () => {
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
        style={{
          height: "70vh",
          width: "70%",
        }}
        center={[0, 0]}
        zoom={2}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default Mobile;
