"use client";
import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "70vh", // Changed to fill the available space
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
        <div className="min-h-full">
            <div className="flex flex-col items-center text-center">
                {/* Introduction */}
                <div className="flex flex-col items-center mt-15">
                    <h1 className="text-4xl font-bold">Solo Net Map</h1>
                    <p className="text-lg mb-5">
                        Bookmark places you&#39;ve travelled to!
                    </p>
                </div>

                {/* Search Bar */}
                <div className="w-screen flex justify-center items-center">
                    <form action="/search" className="max-w-[480px] w-full px-4">
                        <div className="relative">
                            <input type="text" name="q" className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-100" placeholder="Search Country"></input>
                            <button type="submit">
                                <svg
                                    className=" h-5 w-5 absolute top-3.5 right-3 fill-current dark:text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 56.966 56.966"
                                >
                                    <path
                                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Map */}
            <div className="mx-80 mt-10 mb-20 flex">
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
        </div >
    );
}