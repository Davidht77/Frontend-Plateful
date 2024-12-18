import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

/// <reference types="@types/google.maps" />

declare namespace google.maps.marker {
  export class AdvancedMarkerElement {
    constructor(options: AdvancedMarkerElementOptions);
  }

  interface AdvancedMarkerElementOptions {
    map?: google.maps.Map;
    position: google.maps.LatLng | google.maps.LatLngLiteral;
    title?: string;
    content?: HTMLElement | string;
  }
}

const containerStyle = {
  width: "100%",
  height: "400px",
  border: "1px solid red", // Para comprobar si el mapa se está mostrando
};

const defaultCenter = {
  lat: -12.0464,
  lng: -77.0428,
};

const restaurants = [
  {
    id: 1,
    nombre_restaurante: "Chifa Wong",
    ubicacion: { latitud: -12.0453, longitud: -77.0312 },
  },
  {
    id: 2,
    nombre_restaurante: "Chifa Palacio",
    ubicacion: { latitud: -12.0505, longitud: -77.0348 },
  },
];

export default function MapComponent() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleLoad = (map: google.maps.Map) => {
    setMapLoaded(true);
    mapRef.current = map;
  };

  useEffect(() => {
    if (mapLoaded && mapRef.current) {
      restaurants.forEach((restaurant) => {
        if (mapRef.current) {
          new google.maps.marker.AdvancedMarkerElement({
            map: mapRef.current,
            position: {
              lat: restaurant.ubicacion.latitud,
              lng: restaurant.ubicacion.longitud,
            },
            title: restaurant.nombre_restaurante,
          });
        }
      });
    }
  }, [mapLoaded]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyA6dBWhlgBBJzPAV4WIfLnrr3JSzX8Uyug">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={12}
        onLoad={handleLoad}
      />
    </LoadScript>
  );
}
