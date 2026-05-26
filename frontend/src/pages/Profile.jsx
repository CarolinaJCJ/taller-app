import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCar, FaEdit, FaSave, FaSignOutAlt } from "react-icons/fa";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Juan Pérez García",
    email: "juan@example.com",
    phone: "+34 600 000 000",
    address: "Calle Principal 123, Madrid",
    vehicle: "Toyota Camry 2020",
    licensePlate: "ABC-1234"
  });

  const [formData, setFormData] = useState(profile);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-linear-to-r from-purple-600 to-purple-800 text-white py-12 px-6 rounded-xl mb-8 shadow-lg">
        <div className="flex items-center gap-6">
          <img
            src="https://ui-avatars.com/api/?name=Juan+Perez&size=100&background=0D8ABC&color=fff"
            alt="Perfil"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <div>
            <h1 className="text-4xl font-bold">{profile.name}</h1>
            <p className="text-purple-100">Usuario Premium</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile Info */}
        <div className="lg:col-span-2">
          <div className="card mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Información Personal</h2>
              <button
                onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                className="btn-primary"
              >
                {isEditing ? (
                  <>
                    <FaSave /> Guardar
                  </>
                ) : (
                  <>
                    <FaEdit /> Editar
                  </>
                )}
              </button>
            </div>

            {/* Profile Fields */}
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <FaUser className="text-blue-600" /> Nombre
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="input-field"
                  />
                ) : (
                  <p className="text-gray-600 text-lg">{profile.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <FaEnvelope className="text-blue-600" /> Correo
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="input-field"
                  />
                ) : (
                  <p className="text-gray-600 text-lg">{profile.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <FaPhone className="text-blue-600" /> Teléfono
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="input-field"
                  />
                ) : (
                  <p className="text-gray-600 text-lg">{profile.phone}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <FaMapMarkerAlt className="text-blue-600" /> Dirección
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    className="input-field"
                  />
                ) : (
                  <p className="text-gray-600 text-lg">{profile.address}</p>
                )}
              </div>
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaCar className="text-blue-600" /> Información del Vehículo
            </h2>

            <div className="space-y-6">
              {/* Vehicle */}
              <div>
                <label className="text-gray-700 font-semibold mb-2 block">Vehículo</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.vehicle}
                    onChange={(e) => handleChange("vehicle", e.target.value)}
                    className="input-field"
                  />
                ) : (
                  <p className="text-gray-600 text-lg">{profile.vehicle}</p>
                )}
              </div>

              {/* License Plate */}
              <div>
                <label className="text-gray-700 font-semibold mb-2 block">Placa</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.licensePlate}
                    onChange={(e) => handleChange("licensePlate", e.target.value)}
                    className="input-field"
                  />
                ) : (
                  <p className="text-gray-600 text-lg font-mono bg-gray-100 inline-block px-4 py-2 rounded">
                    {profile.licensePlate}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Account Stats */}
          <div className="card mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Estadísticas</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 text-sm">Cotizaciones solicitadas</p>
                <p className="text-3xl font-bold text-blue-600">12</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Trabajos completados</p>
                <p className="text-3xl font-bold text-green-600">8</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Gasto total</p>
                <p className="text-3xl font-bold text-purple-600">$2,450</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Acciones</h3>
            <div className="space-y-3">
              <button className="w-full btn-primary justify-center">
                Cambiar Contraseña
              </button>
              <button className="w-full btn-outline justify-center">
                Descargar datos
              </button>
              <button className="w-full px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 flex items-center justify-center gap-2">
                <FaSignOutAlt /> Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}