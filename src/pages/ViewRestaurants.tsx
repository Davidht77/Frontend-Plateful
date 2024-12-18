import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { getRestaurantes } from "../services/api";
import { Restaurant } from "../services/restaurante/RestauranteResponse";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: -12.0464, // Cambia estas coordenadas según la ubicación inicial deseada
  lng: -77.0428,
};

const ViewRestaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 10;

  const handleLoad = () => {
    setMapLoaded(true); // Solo carga el mapa cuando todo está listo
  };

  const handleNext = () =>{
    setPage(page+limit);
  }
  
  const handleBefore = () =>{
    if(page>limit)
      setPage(page-limit);
    }

  // Obtener la lista de restaurantes desde el backend
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await getRestaurantes(page,limit);
        setRestaurants(response);
      } catch (error) {
        console.error("Error al obtener los restaurantes:", error);
      }
    };

    fetchRestaurants();
  }, [page]);


  return(
    <div className="flex flex-col items-center justify-center h-screen w-screen">
     <h2 className="text-2xl">Todos los Animes</h2>
     <div className="max-w-md mx-auto justify-items-center">
         {restaurants.map((restaurant)=>(
             <div key={restaurant.id} className="justify-items-center mt-2 mb-2 bg-amber-300 rounded-lg">
                 <h3 className="font-bold self-center">{restaurant.nombre_restaurante}</h3>
                 <div className="mb-4 mt-4">
                     <button className="bg-blue-400 justify-items-center rounded-full">Agregar a favorito</button>
                     <button className="bg-red-500 justify-items-center rounded-full"> Eliminar de Favorito</button>
                 </div>
             </div>
         ))}
     </div>
     <button onClick={handleBefore}>
         Atras
     </button>
     <button onClick={handleNext}>
         Adelante
     </button>
    </div> 
 );
};

export default ViewRestaurants;
