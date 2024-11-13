import { useState } from "react";
import Button from "../components/Botton";
import { LoginRequest } from "../services/auth/LoginRequest";
import { login } from "../services/api";

export default function LoginPage(){

	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

	const handleLogin: any = async () =>{
		const loginInfo : LoginRequest = {
			email : email,
			password: password
		}
		await login(loginInfo);
	}


    return (
		<main className="min-h-screen flex items-center justify-center">
			<section className="flex flex-col items-center p-6 bg-blue-400 rounded-lg shadow-lg">
			<section className="flex justify-center mb-6">
				<Button message="Iniciar Sesión" to={"/login"}/>
				<Button message="Registrarse" to={"/register"} />
			</section>

			<article className="login-section flex flex-col items-center text-center">
				<section className="login-section flex flex-col items-center p-10 text-center">
					<h1 className="text-4xl text-white mb-4">Plateful</h1>
					<form className="flex flex-col items-center mb-4">
					<label className="text-white mb-0">Correo</label><br/>
                        <input
							id="email"
							placeholder="example@gmail.com"
							onChange={(e) => setEmail(e.target.value)}
							className="p-2 rounded mb-4"></input>
                        <label className="text-white mb-1">Contraseña</label><br/>
                        <input 
							id="password"
							placeholder="*********"
							onChange={(e) => setPassword(e.target.value)}
							 className="p-2 rounded mb-4"></input>
					</form>
					<p className="text-white mb-4">Tu aplicacion de confianza para encontrar tu restaruante ideal</p>
					<button onClick={handleLogin}>Iniciar Sesión</button>
				</section>
			</article>
			</section>
		</main>
	);
}