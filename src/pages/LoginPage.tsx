import { useState, useEffect } from "react";
import { LoginRequest } from "../services/auth/LoginRequest";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [logoPosition, setLogoPosition] = useState("center");

  // Animación para el logo y mostrar el menú
  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoPosition("top");
      setShowMenu(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async () => {
    const loginInfo: LoginRequest = {
      email: email,
      password: password,
    };
    await login(loginInfo);
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      {/* Logo con animación */}
      <div
        className={`${
          logoPosition === "center" ? "animate-spinIn" : "absolute -top-6"
        } transition-all duration-500`}
      >
        <img
          src="/src/LOGO PNG PLATEFUL.png" // Cambia esta ruta si es necesario
          alt="Plateful Logo"
          className="w-24 h-24 md:w-64 md:h-64"
        />
      </div>

      {/* Título estilizado */}
      {showMenu && (
        <h1 className="mt-16 text-xl md:text-2xl font-serif italic text-center text-gray-700">
          ¡Descubre los mejores sabores cerca de ti!
        </h1>
      )}

      {/* Formulario de inicio de sesión */}
      {showMenu && (
        <div className="bg-white p-8 rounded shadow-lg mt-4 w-11/12 md:w-96">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nombre / Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contraseña"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
            >
              Iniciar Sesión
            </button>
          </form>
          <div className="mt-4 text-center">
            <a
              onClick={() => navigate("/auth/register")} // Redirige al registro
              className="text-sm text-gray-600 hover:underline cursor-pointer"
            >
              ¿Aún no tienes una cuenta? Haz click aquí
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
