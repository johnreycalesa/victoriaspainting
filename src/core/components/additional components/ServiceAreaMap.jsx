import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "1rem"
};

// Morristown, NJ as center
const center = {
  lat: 40.7968,
  lng: -74.4815
};

// Service areas based on the reference image
const serviceAreas = [
  { name: "Morristown", lat: 40.7968, lng: -74.4815, description: "Main service area" },
  { name: "Newark", lat: 40.7357, lng: -74.1724, description: "Full service coverage" },
  { name: "Elizabeth", lat: 40.6639, lng: -74.2107, description: "Full service coverage" },
  { name: "Paterson", lat: 40.9168, lng: -74.1718, description: "Full service coverage" },
  { name: "Jersey City", lat: 40.7178, lng: -74.0431, description: "Full service coverage" },
  { name: "Edison", lat: 40.5187, lng: -74.4121, description: "Full service coverage" },
  { name: "Trenton", lat: 40.2171, lng: -74.7429, description: "Full service coverage" },
  { name: "Camden", lat: 39.9259, lng: -75.1196, description: "Full service coverage" },
  { name: "Pine Barrens", lat: 39.8536, lng: -74.5354, description: "Service available" },
  { name: "Montclair", lat: 40.8259, lng: -74.2090, description: "Full service coverage" },
  { name: "Bayonne", lat: 40.6687, lng: -74.1143, description: "Full service coverage" },
  { name: "Plainfield", lat: 40.6337, lng: -74.4074, description: "Full service coverage" },
  { name: "East Windsor", lat: 40.2626, lng: -74.5407, description: "Full service coverage" },
];

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: true,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
  ]
};

export function ServiceAreaMap() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const onLoad = useCallback(() => {
    // Map loaded
  }, []);

  const onUnmount = useCallback(() => {
    // Map unmounted
  }, []);

  // Get API key from environment variable
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="w-full h-[500px] rounded-2xl bg-gray-100 flex items-center justify-center">
        <div className="text-center p-8">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Map Configuration Required</h3>
          <p className="text-gray-600">
            Please add your Google Maps API key to the .env file
          </p>
          <p className="text-sm text-gray-500 mt-2">
            REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-brand-lg hover:shadow-2xl transition-all duration-500">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={9}
          options={mapOptions}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {serviceAreas.map((area, index) => (
            <Marker
              key={index}
              position={{ lat: area.lat, lng: area.lng }}
              onClick={() => setSelectedMarker(area)}
              icon={{
                path: window.google?.maps?.SymbolPath?.CIRCLE,
                scale: 8,
                fillColor: "#FF6B6B",
                fillOpacity: 0.9,
                strokeColor: "#ffffff",
                strokeWeight: 2,
              }}
            />
          ))}

          {selectedMarker && (
            <InfoWindow
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div className="p-2">
                <h3 className="font-bold text-gray-800">{selectedMarker.name}</h3>
                <p className="text-sm text-gray-600">{selectedMarker.description}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-primary pointer-events-none">
        <h3 className="text-white font-bold text-xl">Service Area Map</h3>
        <p className="text-white/90 text-sm mt-1">Coverage across New Jersey</p>
      </div>
    </div>
  );
}
