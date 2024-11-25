import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Configura el estilo y las coordenadas iniciales del mapa
const containerStyle = {
    width: "100%",
    height: "400px",
};

const defaultCenter = {
    lat: -12.0464, // Coordenada inicial (Lima, Perú por ejemplo)
    lng: -77.0428,
};

interface GoogleMapComponentProps {
    onLocationSelect: (location: { lat: number; lng: number }) => void;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ onLocationSelect }) => {
    const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);

    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        if (event.latLng) {
            const lat = event.latLng.lat();
            const lng = event.latLng.lng();
            setSelectedLocation({ lat, lng });
            onLocationSelect({ lat, lng });
        }
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyA6dBWhlgBBJzPAV4WIfLnrr3JSzX8Uyug">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                zoom={12}
                onClick={handleMapClick}
            >
                {selectedLocation && <Marker position={selectedLocation} />}
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;
