import { useEffect, useState } from "react";
import { FaFileAlt, FaCheck, FaClock, FaTimes, FaDollarSign } from "react-icons/fa";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setQuotes([
        {
          id: 1,
          clientName: "Juan Pérez",
          description: "Cambio de aceite y filtro",
          estimatedPrice: 25000,
          status: "pendiente",
          date: "2024-05-20"
        },
        {
          id: 2,
          clientName: "María García",
          description: "Reparación de frenos",
          estimatedPrice: 40000,
          status: "aprobada",
          date: "2024-05-19"
        },
        {
          id: 3,
          clientName: "Carlos López",
          description: "Revisión técnica completa",
          estimatedPrice: 55000,
          status: "rechazada",
          date: "2024-05-18"
        },
        {
          id: 4,
          clientName: "Ana Martínez",
          description: "Cambio de pastillas de freno",
          estimatedPrice: 18000,
          status: "pendiente",
          date: "2024-05-17"
        }
      ]);
    }, 0);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "aprobada":
        return "bg-green-100 text-green-800";
      case "pendiente":
        return "bg-yellow-100 text-yellow-800";
      case "rechazada":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "aprobada":
        return <FaCheck className="inline mr-1" />;
      case "pendiente":
        return <FaClock className="inline mr-1" />;
      case "rechazada":
        return <FaTimes className="inline mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16 px-8 rounded-2xl shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <FaFileAlt className="text-5xl" />
          <div>
            <h1 className="text-5xl font-bold">Cotizaciones</h1>
            <p className="text-blue-100 text-lg mt-2">Gestiona todas tus solicitudes de cotización</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card text-center hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold text-blue-600 mb-2">{quotes.length}</div>
          <p className="text-gray-600 text-lg">Total</p>
          <p className="text-sm text-gray-500">de cotizaciones</p>
        </div>
        <div className="card text-center hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold text-green-600 mb-2">
            {quotes.filter(q => q.status === "aprobada").length}
          </div>
          <p className="text-gray-600 text-lg">Aprobadas</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-green-600 h-2 rounded-full" style={{width: `${(quotes.filter(q => q.status === "aprobada").length / quotes.length) * 100}%`}}></div>
          </div>
        </div>
        <div className="card text-center hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold text-yellow-600 mb-2">
            {quotes.filter(q => q.status === "pendiente").length}
          </div>
          <p className="text-gray-600 text-lg">Pendientes</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-yellow-600 h-2 rounded-full" style={{width: `${(quotes.filter(q => q.status === "pendiente").length / quotes.length) * 100}%`}}></div>
          </div>
        </div>
        <div className="card text-center hover:shadow-lg transition-shadow">
          <div className="text-5xl font-bold text-red-600 mb-2">
            {quotes.filter(q => q.status === "rechazada").length}
          </div>
          <p className="text-gray-600 text-lg">Rechazadas</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-red-600 h-2 rounded-full" style={{width: `${(quotes.filter(q => q.status === "rechazada").length / quotes.length) * 100}%`}}></div>
          </div>
        </div>
      </div>

      {/* Quotes List */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">Mis Cotizaciones</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {quotes.map((q) => (
          <div key={q.id} className="card hover:scale-105 transform transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{q.clientName}</h2>
                <p className="text-gray-500 text-sm">{q.date}</p>
              </div>
              <span className={`px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(q.status)} flex items-center`}>
                {getStatusIcon(q.status)}
                {q.status.charAt(0).toUpperCase() + q.status.slice(1)}
              </span>
            </div>

            <p className="text-gray-700 mb-4 pb-4 border-b">{q.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaDollarSign className="text-green-600" />
                <span className="text-2xl font-bold text-gray-800">${q.estimatedPrice.toLocaleString()}</span>
              </div>
              <div className="flex gap-2">
                <button className="btn-primary text-sm">Ver</button>
                <button className="btn-outline text-sm">Editar</button>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      {quotes.length === 0 && (
        <div className="text-center py-12">
          <FaFileAlt className="text-6xl text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-600 mb-2">No hay cotizaciones</h3>
          <p className="text-gray-500">Solicita una cotización para comenzar</p>
        </div>
      )}
    </div>
  );
}