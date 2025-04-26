"use client";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 47.6062,
  lng: -122.3321
};

export default function MyMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB6PE_cZgir__Svb0fbN_o6c1YWdXZql-I">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Add markers, etc. here */}
      </GoogleMap>
    </LoadScript>
  );
}
