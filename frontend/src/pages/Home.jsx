import { Link } from "react-router-dom";
import { FaQuoteLeft, FaUser, FaTools, FaCalendarAlt, FaCheck, FaStar, FaClock } from "react-icons/fa";

export default function Home() {
  const services = [
    {
      icon: <FaTools className="text-5xl text-blue-500" />,
      title: "Mantenimiento Preventivo",
      description: "Servicio completo de mantenimiento para tu vehículo"
    },
    {
      icon: <FaQuoteLeft className="text-5xl text-green-500" />,
      title: "Cotizaciones Rápidas",
      description: "Solicita cotizaciones sin compromiso"
    },
    {
      icon: <FaCalendarAlt className="text-5xl text-purple-500" />,
      title: "Reservas en Línea",
      description: "Agenda tu cita de forma fácil y rápida"
    },
    {
      icon: <FaUser className="text-5xl text-orange-500" />,
      title: "Gestión de Cuenta",
      description: "Controla tu información y solicitudes"
    }
  ];

  const features = [
    { icon: <FaCheck />, title: "Profesionales Certificados", desc: "Técnicos con amplia experiencia" },
    { icon: <FaStar />, title: "Garantía Garantizada", desc: "Calidad asegurada en todos los trabajos" },
    { icon: <FaClock />, title: "Servicio Rápido", desc: "Atención ágil y eficiente" }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-24 px-6 rounded-2xl shadow-2xl overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Bienvenido a Taller Mecánico
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Tu solución confiable para el mantenimiento y reparación de tu vehículo. Contamos con profesionales certificados y equipos modernos.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/quotes" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-lg">
                  Solicitar Cotización
                </Link>
                <Link to="/register" className="btn-secondary bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 text-lg">
                  Crear Cuenta
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🔧</div>
                <p className="text-lg text-blue-100">Somos tu taller de confianza</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="card text-center p-8">
              <div className="text-5xl text-blue-500 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios para mantener tu vehículo en perfecto estado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="card hover:shadow-2xl hover:scale-105 transform transition-all duration-300 text-center p-8">
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link to="/quotes" className="btn-primary text-sm">
                Más Información
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-linear-to-r from-gray-900 to-gray-800 text-white py-16 px-6 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold mb-2">500+</div>
            <p className="text-xl text-gray-300">Clientes Satisfechos</p>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">15+</div>
            <p className="text-xl text-gray-300">Años de Experiencia</p>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">1000+</div>
            <p className="text-xl text-gray-300">Trabajos Completados</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20 px-6 rounded-2xl shadow-2xl text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para cuidar tu vehículo?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Solicita una cotización hoy y descubre por qué somos la mejor opción para tu taller
        </p>
        <Link to="/quotes" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
          Solicitar Cotización Ahora
        </Link>
      </section>
    </div>
  );
}