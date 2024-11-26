import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { getRestaurantes } from "../services/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const defaultCenter = {
  lat: -12.0464, // Cambia estas coordenadas según la ubicación inicial deseada
  lng: -77.0428,
};

export interface Restaurant {
  id_restaurante: number;
  nombre_restaurante: string;
  latitude: number;
  longitude: number;
}

const ViewRestaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  // Obtener la lista de restaurantes desde el backend
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await getRestaurantes();
        setRestaurants(response);
      } catch (error) {
        console.error("Error al obtener los restaurantes:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyA6dBWhlgBBJzPAV4WIfLnrr3JSzX8Uyug"> {/* Reemplaza con tu API key */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={12}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.id_restaurante}
            position={{
              lat: restaurant.latitude,
              lng: restaurant.longitude,
            }}
            title={restaurant.nombre_restaurante}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default ViewRestaurants;
