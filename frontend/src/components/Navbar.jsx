import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-800 text-white p-4 flex items-center justify-between shadow">
      
      {/* LOGO */}
      <div className="flex items-center gap-4">
        <button 
          className="text-xl font-bold" 
          onClick={() => navigate("/")}
        >
          Taller Mecánico
        </button>

        {/* Menú desplegable */}
        <div className="relative">
          <button 
            onClick={() => setOpenMenu(!openMenu)}
            className="px-3 py-2 bg-slate-700 rounded hover:bg-slate-600"
          >
            Menú
          </button>

          {openMenu && (
            <div className="absolute bg-white text-black mt-2 rounded shadow-md">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Inicio</Link>
              <Link to="/quotes" className="block px-4 py-2 hover:bg-gray-200">Cotizaciones</Link>
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">Perfil</Link>
            </div>
          )}
        </div>
      </div>

      {/* Búsqueda + login/register */}
      <div className="flex items-center gap-4">
        <input
          placeholder="Buscar..."
          className="px-3 py-2 rounded text-black"
        />

        <Link to="/login" className="px-3 py-2 bg-blue-600 rounded hover:bg-blue-500">
          Ingresar
        </Link>
        <Link to="/register" className="px-3 py-2 bg-green-600 rounded hover:bg-green-500">
          Crear cuenta
        </Link>

        {/* Perfil sencillo */}
        <img
          src="https://ui-avatars.com/api/?name=User"
          alt="perfil"
          className="w-9 h-9 rounded-full cursor-pointer"
          onClick={() => navigate("/profile")}
        />
      </div>
    </nav>
  );
}