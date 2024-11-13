import { useState } from "react";
import Button from "../components/Botton";
import { RegisterRequest } from "../services/auth/RegisterRequest";
import { signUp } from "../services/api";


export function RegisterPage(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("CLIENTE");


    const handleClick: any = async () =>{
        const registroInfo: RegisterRequest={
            name: name,
            email: email,
            password: password,
            phone: phone,
            date: date,
            category: category,
        }
        await signUp(registroInfo);
    }

    return(
        <main className="min-h-screen justify-center bg-amber-400 rounded-lg">
			<section className="flex justify-center mb-11">
				<Button message="Iniciar Sesión" to={"/login"}/>
				<Button message="Registrarse" to={"/register"} />
			</section>

            <article className="flex justify-between">
                <section className="login-section flex flex-col items-center p-4 text-center">
                    <h1 className="text-4xl text-white mb-2">Registro</h1>
                    <p className="text-white mb-1">Regístrate como cliente o propietario para empezar con Plateful</p>
                    <form className="flex flex-col items-center mb-4">
                        <label className="text-white mb-1">Nombre</label>
                        <input 
                            placeholder="John"
                            onChange={(e) => setName(e.target.value)}
                            className="p-2 rounded mb-4"></input>
                        <label className="text-white mb-1">Correo</label>
                        <input 
                            placeholder="example@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 rounded mb-4"></input>
                        <label className="text-white mb-1">Contraseña</label>
                        <input 
                            placeholder="**********"
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-2 rounded mb-4"></input>
                        <label className="text-white mb-1">Telefono</label>
                        <input 
                            placeholder="987 654 321"
                            onChange={(e) => setPhone(e.target.value)}
                            className="p-2 rounded mb-4"></input>
                        <div className="flex flex-col items-start mb-4">
                            <label htmlFor="dateOfBirth" className="mb-2 text-gray-700 font-medium">
                                Fecha de Nacimiento
                            </label>
                            <input
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={date}
                                onChange={(e)=>setDate(e.target.value)}
                                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <label className="text-white mb-5">Categoria</label>
                    <div className="flex items-center space-x-4">
                        <input 
                            type="radio" id="cliente" name="category" value="Cliente"
                            checked= {category == "CLIENTE"} onChange={(e)=>setCategory(e.target.value)} ></input>
                        <label htmlFor="cliente">Cliente</label>
                        <input 
                            type="radio" id="propietario" name="category" value="Propietario"
                            checked= {category == "CLIENTE"} onChange={(e)=>setCategory(e.target.value)} ></input>
                        <label htmlFor="propietario">Propietario</label>
                    </div>
                    </form>
                    <button onClick={handleClick}>Registrarme</button>
                </section>
            </article>
        </main>
    );
}