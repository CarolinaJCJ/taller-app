import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaWrench, FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-linear-to-r from-gray-900 to-gray-800 text-white px-6 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
      {/* LOGO */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
        <FaWrench className="text-blue-500 text-2xl" />
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Taller Mecánico
        </span>
      </div>

      {/* Menú en pantalla grande */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-blue-400 transition-colors duration-200">
          Inicio
        </Link>
        <Link to="/quotes" className="hover:text-blue-400 transition-colors duration-200">
          Cotizaciones
        </Link>
        <Link to="/profile" className="hover:text-blue-400 transition-colors duration-200">
          Perfil
        </Link>
      </div>

      {/* Búsqueda + Autenticación */}
      <div className="hidden md:flex items-center gap-4">
        <div className="relative">
          <input
            placeholder="Buscar..."
            className="px-4 py-2 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>

        <Link to="/login" className="btn-primary">
          Ingresar
        </Link>
        <Link to="/register" className="btn-secondary">
          Crear cuenta
        </Link>

        <img
          src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff"
          alt="perfil"
          className="w-10 h-10 rounded-full cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all duration-200"
          onClick={() => navigate("/profile")}
        />
      </div>

      {/* Menú móvil */}
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="md:hidden text-2xl"
      >
        {openMenu ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menú desplegable móvil */}
      {openMenu && (
        <div className="absolute top-16 right-6 bg-gray-800 text-white rounded-lg shadow-xl w-48 z-40 md:hidden">
          <Link to="/" className="block px-4 py-3 hover:bg-gray-700 transition-colors duration-200">
            Inicio
          </Link>
          <Link to="/quotes" className="block px-4 py-3 hover:bg-gray-700 transition-colors duration-200">
            Cotizaciones
          </Link>
          <Link to="/profile" className="block px-4 py-3 hover:bg-gray-700 transition-colors duration-200">
            Perfil
          </Link>
          <hr className="border-gray-700" />
          <Link to="/login" className="block px-4 py-3 hover:bg-gray-700 transition-colors duration-200">
            Ingresar
          </Link>
          <Link to="/register" className="block px-4 py-3 hover:bg-gray-700 transition-colors duration-200">
            Crear cuenta
          </Link>
        </div>
      )}
    </nav>
  );
}