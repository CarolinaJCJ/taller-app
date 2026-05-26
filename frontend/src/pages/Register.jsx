import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaPhone } from "react-icons/fa";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Registro:", form);
    alert("Cuenta creada exitosamente. Aquí irá la integración con el backend Nest");
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <form onSubmit={submit} className="w-full max-w-md">
        <div className="card">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Crear Cuenta</h1>
            <p className="text-gray-600">Únete a Taller Mecánico</p>
          </div>

          {/* Name Field */}
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Nombre Completo</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Juan Pérez"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="input-field pl-10"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Correo</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="input-field pl-10"
                required
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Teléfono</label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-3 text-gray-400" />
              <input
                type="tel"
                placeholder="+34 600 000 000"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Contraseña</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => handleChange("password", e.target.value)}
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

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Confirmar Contraseña</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                className="input-field pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2 w-4 h-4" required />
              Acepto los términos y condiciones
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full btn-secondary justify-center mb-4 bg-green-600 hover:bg-green-700">
            Registrarse
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}