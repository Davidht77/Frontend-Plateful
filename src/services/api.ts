import axios from "axios";
import { jwtDecode } from 'jwt-decode';
const BACKEND_URL: string = "https://localhost:8080";

console.log(BACKEND_URL)

export const getRole = () => {
    const token = localStorage.getItem('token');
    if(token !== null){
            const decodedToken = jwtDecode(token);
            return decodedToken;
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
        

