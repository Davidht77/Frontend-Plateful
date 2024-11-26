import { useNavigate } from "react-router-dom";

export function HomePage() {

  const navigation = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("jwtToken"); 

  localStorage.removeItem("userData");

  window.location.href = "/auth/login";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-b from-orange-200 to-white">
      <div className="flex flex-col items-center mb-8">
        <img src="/src/LOGO PNG PLATEFUL.png" alt="Plateful Logo" className="mb-4 wi" width={200} height={200}/>
        <h1 className="text-4xl font-bold text-orange-700 mb-6">¡Bienvenido a Plateful!</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">Restaurantes</h2>
          <p className="text-black">Ver y gestionar todos los restaurantes disponibles.</p>
          <button className="bg-orange-500 rounded-lg mt-2" onClick={()=>{navigation("/restaurants")}}>Presiona aca</button>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">Cartas</h2>
          <p className="text-black">Explora las cartas disponibles para cada restaurante.</p>
          <button className="bg-orange-500 rounded-lg mt-2" onClick={()=>{navigation("/restaurantes")}}>Presiona aca</button>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">Platos</h2>
          <p  className="text-black">Gestiona los platos del menú de cada restaurante.</p>
          <button className="bg-orange-500 rounded-lg mt-2" onClick={()=>{navigation("/restaurantes")}}>Presiona aca</button>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">Reseñas</h2>
          <p className="text-black">Consulta y escribe reseñas sobre los restaurantes.</p>
          <button className="bg-orange-500 rounded-lg mt-2" onClick={()=>{navigation("/restaurantes")}}>Presiona aca</button>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">Comentarios</h2>
          <p className="text-black">Consulta los comentarios realizados sobre las reseñas.</p>
          <button className="bg-orange-500 rounded-lg mt-2" onClick={()=>{navigation("/restaurantes")}}>Presiona aca</button>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold text-orange-600 mb-2">Usuarios</h2>
          <p className="text-black">Gestiona los usuarios registrados en la plataforma.</p>
          <button className="bg-orange-500 rounded-lg mt-2" onClick={()=>{navigation("/restaurantes")}}>Presiona aca</button>
        </div>
      </div>
      <button onClick={handleLogout} style={{ padding: "10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px" }}>
        Cerrar sesión
      </button>
    </div>
  );
};