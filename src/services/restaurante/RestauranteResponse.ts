import { UbicationResponse } from "../ubication/UbicationResponse";

export interface Restaurant {
    id: number;
    nombre_restaurante: string;
    tipoRestaurante: string;
    calificacion_promedio: number;
    ubicacion : UbicationResponse
  }