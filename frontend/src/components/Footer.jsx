import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-gray-900 to-gray-800 text-white mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Taller Mecánico</h3>
            <p className="text-gray-400 mb-6">
              Tu solución confiable para mantenimiento y reparación de vehículos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/quotes" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Cotizaciones
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Mi Perfil
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Términos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Mantenimiento</li>
              <li className="text-gray-400">Reparaciones</li>
              <li className="text-gray-400">Diagnóstico</li>
              <li className="text-gray-400">Servicio de emergencia</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-blue-400" />
                <span>+34 900 000 000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-blue-400" />
                <span>info@taller.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                <span>Calle Principal 123<br />Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Taller Mecánico. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
