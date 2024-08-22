import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported

const MapComponent = () => {
  const [position, setPosition] = useState([32.4279, 53.6880]); // Default to center of Iran

  // Custom icon for the marker
  const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png', // Default Leaflet icon
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
  });

  // Function to handle the map click event
  const handleMapClick = (e) => {
    setPosition(e.latlng);
  };

  // Custom hook to handle map events
  const LocationMarker = () => {
    useMapEvents({
      click: handleMapClick,
      locationfound(e) {
        setPosition(e.latlng);
      }
    });

    return (
      <Marker position={position} icon={customIcon}>
        <Popup>
          <span>Your location: Latitude: {position.lat}, Longitude: {position.lng}</span>
        </Popup>
      </Marker>
    );
  };

  // Function to get the user's current position and initialize the map
  const initializeMap = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        () => {
          alert('Could not get your position');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    initializeMap();
  }, []);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer
        center={position}
        zoom={6}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
