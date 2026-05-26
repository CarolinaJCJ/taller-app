import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={submit} className="w-full max-w-md">
        <div className="card">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Ingresar</h1>
            <p className="text-gray-600">Accede a tu cuenta de Taller Mecánico</p>
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Correo</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field pl-10"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Contraseña</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2 w-4 h-4" />
              Recuérdame
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Submit Button */}
          <button className="w-full btn-primary justify-center mb-4 bg-blue-600 hover:bg-blue-700">
            Iniciar Sesión
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
              Crear una ahora
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}