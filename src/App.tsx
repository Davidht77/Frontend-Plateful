import { useState, useEffect } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [logoPosition, setLogoPosition] = useState("center");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoPosition("top");
      setShowMenu(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-layoutcolor">
      {/* Logo */}
      <div
        className={`${
          logoPosition === "center" ? "animate-spinIn" : "absolute -top-10"
        } transition-all duration-500`}
      >
        <img
          src="/src/LOGO PNG PLATEFUL.png" // Cambia esta ruta si es necesario
          alt="Plateful Logo"
          className="w-24 h-24 md:w-64 md:h-64" // Tamaño responsivo para el logo
        />
      </div>

      {/* Título estilizado */}
      {showMenu && (
        <h1 className="mt-16 text-xl md:text-2xl font-serif italic text-center text-gray-700">
          ¡Descubre los mejores sabores cerca de ti!
        </h1>
      )}

      {/* Formulario */}
      {showMenu && (
        <div className="bg-white p-8 rounded shadow-lg mt-4 w-11/12 md:w-96">
          <form>
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
                className="w-full p-2 border border-gray-300 rounded"
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
                className="w-full p-2 border border-gray-300 rounded"
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
            <a href="#" className="text-sm text-gray-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="mt-2 text-center">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              ¿Aún no tienes una cuenta? Haz click aquí
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
