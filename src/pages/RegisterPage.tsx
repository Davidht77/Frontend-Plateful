import { useState } from "react";
import { RegisterRequest } from "../services/auth/RegisterRequest";
import { signUp } from "../services/api";
import { useNavigate } from "react-router-dom";
import GoogleMapComponent from "../components/GoogleMapComponent";


export function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("CLIENTE");
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleClick = async () => {
    const registroInfo: RegisterRequest = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      date: date,
      category: category,
      location: category === "RESTAURANTE" ? location : null,
    };
    await signUp(registroInfo);
    console.log("Registro exitoso");
    setSuccessMessage("Registro exitoso. Redirigiendo al inicio de sesión...");
    setTimeout(() => navigate("/auth/login"), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <h1 className="text-xl md:text-2xl font-serif italic text-center text-gray-700 mb-6">
        ¡Empieza tu experiencia con Plateful!
      </h1>

      <div className="bg-white p-8 rounded shadow-lg w-11/12 md:w-96">
        <h2 className="text-2xl text-gray-700 mb-6 text-center font-semibold">Registro</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="**********"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="987 654 321"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-gray-700 font-medium mb-2">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="dateOfBirth"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <span className="block text-gray-700 font-medium mb-2">Categoría</span>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  value="CLIENTE"
                  checked={category === "CLIENTE"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mr-2"
                />
                Cliente
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  value="RESTAURANTE"
                  checked={category === "RESTAURANTE"}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mr-2"
                />
                Restaurante
              </label>
            </div>
            {category === "RESTAURANTE" && (
              <div className="mt-4">
                <h3 className="text-gray-700 font-medium mb-2">Selecciona la ubicación de tu restaurante:</h3>
                <GoogleMapComponent onLocationSelect={(coords) => setLocation(coords)} />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Registrarme
          </button>
        </form>

        {successMessage && (
          <div className="text-green-700 text-sm text-center mt-4 bg-green-100 p-2 rounded-md w-full">
            {successMessage}
          </div>
        )}

        <div className="mt-4 text-center">
          <a
            href="/auth/login"
            className="text-sm text-gray-600 hover:underline transition"
          >
            ¿Ya tienes cuenta? Inicia sesión
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
