import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { RegisterRequest } from "./auth/RegisterRequest";
import { LoginRequest } from "./auth/LoginRequest";
import { JwtPayload } from "./JWT/JwtInterface";
import { Restaurant } from "./restaurante/RestauranteResponse";

const BACKEND_URL ="http://localhost:8080";

export const getRole = () => {
    const token = localStorage.getItem('token');
    if(token !== null){
            const decodedToken = jwtDecode<JwtPayload>(token);
            return decodedToken.role;
    }
  }

  export const getRestaurantes = async (page: number, limit:number): Promise<Restaurant[]> =>{
        try{    
                const token = localStorage.getItem('token');
                const config = {
                headers: {
                        Authorization: `Bearer ${token}`,
                },
                params:{
                        page, limit
                }
                };
                const response = await axios.get(BACKEND_URL+'/restaurantes',config)
                console.log(response.data);
                return response.data;
        
            }
            catch(error){
                alert('Fallo al obtener los restaurantes')
                console.log('Failed', error);
                throw error;
            }
}

  export async function axiosGet(): Promise<any> {
try {
        const response = await axios.get(`${BACKEND_URL}/posts`);
        console.log(response.data);
} catch (error: any) {
        console.error(error);
}
}

export const signUp = async(data: RegisterRequest)=> {
        try{
                localStorage.removeItem('token');
                const response = await axios.post(BACKEND_URL+'/auth/register', data);
                const token = response.data.token;
                console.log(response);
                localStorage.setItem('token', token);
                return token;
        }
        catch(error){
                console.error(error);
        }
}

export const login = async (data : LoginRequest)=>{
        try{
                const response = await axios.post(BACKEND_URL+'/auth/login', data)
                const token = response.data.token;
                localStorage.setItem('token', token);
                console.log(token);
                return response;
        
            }
            catch(error){
                alert('Inicio de sesion fallido')
                console.log('Login failed', error);
                throw error;
            }
}
