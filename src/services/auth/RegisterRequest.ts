export interface RegisterRequest {
    name: String;
    email: String ;
    password: String;
    phone: String;
    date: string;
    category: String;
    ubicacion?: { lat: number; lng: number } | null;
}