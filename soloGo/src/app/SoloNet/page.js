"use client";
import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  // Bothell coords
  lat: 47.7601,
  lng: -122.2054,
};

export default function MyMap() {
  const [markers, setMarkers] = useState([]);

  const handleMapClick = (event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
    ]);
  };

  const handleMarkerClick = (indexToRemove) => {
    setMarkers((current) =>
      current.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center text-center mt-5">
        <h1 className="text-4xl font-bold">Solo Net Map</h1>
        <p className="text-lg mb-4">
          {" "}
          Bookmark places you've travelled to!
          <input
            className="bg-white shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            type="country"
            placeholder="Enter Country"
          />
        </p>
      </div>
      <LoadScript googleMapsApiKey="AIzaSyB6PE_cZgir__Svb0fbN_o6c1YWdXZql-I">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          onClick={handleMapClick}
          zoom={10}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker}
              onClick={() => handleMarkerClick(index)}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}