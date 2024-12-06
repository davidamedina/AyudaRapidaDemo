import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  Star, 
  DollarSign,
  Shield,
  Check,
  ChevronRight,
  Building2,
  Users,
  Trophy,
  Home,
  Laptop,
  Wrench,
  Camera
} from 'lucide-react';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-8">
            Convierte tu talento en ingresos<br />en Puerto Rico
          </h1>
          <p className="text-2xl mb-12">
            La plataforma que conecta expertos locales con personas que necesitan<br />servicios profesionales.
          </p>
          <div className="flex gap-4">
            <Link
              to="/ayuda"
              className="bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Buscar Servicios
            </Link>
            <Link
              to="/register"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Ofrecer Servicios
            </Link>
          </div>

          {/* Search Box */}
          <div className="mt-12 bg-white rounded-2xl p-8 max-w-3xl">
            <SearchBar
              placeholder="¿Qué servicio necesitas?"
              onSearch={() => {}}
              redirectOnSearch={true}
              className="mb-6"
            />
            <div className="flex items-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>Profesionales verificados</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Reserva según tu horario</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>Pagos seguros</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Sections */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Para Clientes</h2>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Search className="w-8 h-8 text-green-700 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Busca el servicio</h3>
              <p className="text-gray-600">Encuentra el profesional ideal para tu necesidad</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Calendar className="w-8 h-8 text-green-700 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Agenda una cita</h3>
              <p className="text-gray-600">Selecciona el horario que mejor te convenga</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Star className="w-8 h-8 text-green-700 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Recibe el servicio</h3>
              <p className="text-gray-600">Disfruta de un servicio profesional garantizado</p>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold mt-20 mb-12">Para Profesionales</h2>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Users className="w-8 h-8 text-green-700 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Crea tu perfil</h3>
              <p className="text-gray-600">Destaca tus habilidades y experiencia</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Calendar className="w-8 h-8 text-green-700 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Recibe solicitudes</h3>
              <p className="text-gray-600">Conecta con clientes que necesitan tus servicios</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <DollarSign className="w-8 h-8 text-green-700 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">Genera ingresos</h3>
              <p className="text-gray-600">Cobra de forma segura por tus servicios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Payments */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-12 h-12 text-green-700" />
                <h2 className="text-4xl font-bold">Pagos 100% Seguros</h2>
              </div>
              <div className="space-y-6">
                {[
                  "Tu pago está protegido y seguro en la plataforma hasta que el servicio sea completado.",
                  "El profesional recibirá el pago solo cuando confirmes que el trabajo está terminado.",
                  "Si algo no sale según lo acordado, tu dinero está protegido."
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-700 mt-1" />
                    <p className="text-lg text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span>Reserva</span>
                      <DollarSign className="w-5 h-5 text-green-700" />
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span>Servicio</span>
                      <Star className="w-5 h-5 text-green-700" />
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span>Pago</span>
                      <Check className="w-5 h-5 text-green-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Servicios Populares</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Home, title: "Limpieza" },
            { icon: Laptop, title: "Tecnología" },
            { icon: Wrench, title: "Mecánicos" },
            { icon: Camera, title: "Modelos" }
          ].map((service, index) => (
            <Link
              key={index}
              to="/ayuda"
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow group"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <div className="flex items-center text-green-700 group-hover:gap-2 transition-all">
                <span>Explorar</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Oportunidad en Puerto Rico</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Puerto Rico está experimentando un crecimiento sin precedentes en la demanda
              de servicios profesionales. Es el momento perfecto para aprovechar tu talento
              y convertirlo en una fuente de ingresos sostenible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-green-600 rounded-xl p-8">
              <p className="text-5xl font-bold mb-2">3.2M+</p>
              <p className="text-xl">Clientes Potenciales</p>
            </div>
            <div className="bg-green-600 rounded-xl p-8">
              <p className="text-5xl font-bold mb-2">$500M+</p>
              <p className="text-xl">Tamaño del Mercado de Servicios</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-6">¿Listo para empezar?</h3>
        <p className="text-xl mb-8">Únete hoy y comienza a generar ingresos con tu talento</p>
        <Link
          to="/register"
          className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors"
        >
          Crear Perfil Profesional
        </Link>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Beneficios de Acceso Temprano
        </h2>
        <div className="bg-green-700 rounded-2xl p-12 text-white">
          <div className="flex items-center justify-center gap-4">
            <Trophy className="w-12 h-12" />
            <p className="text-2xl">Posicionamiento prioritario por 6 meses</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}