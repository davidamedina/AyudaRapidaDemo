import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Truck, 
  Paintbrush, 
  Wrench, 
  Flower2, 
  Dog, 
  Scale, 
  Calculator, 
  Camera, 
  Music, 
  Palette, 
  ChefHat, 
  MapPin, 
  Laptop, 
  Car,
  Camera as PhotoIcon,
  Megaphone,
  Code,
  Heart,
  Dumbbell,
  Sparkles
} from 'lucide-react';
import Footer from '../components/Footer';

export default function ServicesPage() {
  const services = [
    { icon: Home, title: "Limpieza del Hogar", description: "Servicios profesionales de limpieza para tu hogar" },
    { icon: Truck, title: "Mudanzas", description: "Servicios de mudanza y transporte seguros" },
    { icon: Paintbrush, title: "Pintura", description: "Servicios de pintura interior y exterior" },
    { icon: Wrench, title: "Reparaciones", description: "Reparaciones y mantenimiento general" },
    { icon: Flower2, title: "Jardinería", description: "Diseño y mantenimiento de jardines" },
    { icon: Dog, title: "Cuidado de Mascotas", description: "Cuidado profesional de mascotas" },
    { icon: Scale, title: "Abogados", description: "Servicios legales profesionales" },
    { icon: Calculator, title: "Contadores", description: "Servicios de contabilidad y finanzas" },
    { icon: Camera, title: "Modelos", description: "Servicios de fotografía y modelaje" },
    { icon: Music, title: "Músicos", description: "Entretenimiento musical para eventos" },
    { icon: Palette, title: "Artistas", description: "Servicios artísticos y creativos" },
    { icon: ChefHat, title: "Chefs", description: "Servicios de chef personal y catering" },
    { icon: MapPin, title: "Guías Turísticos", description: "Guías turísticos expertos locales" },
    { icon: Laptop, title: "Técnicos IT", description: "Soporte técnico y soluciones informáticas" },
    { icon: Car, title: "Mecánicos", description: "Servicios mecánicos automotrices" },
    { icon: PhotoIcon, title: "Fotógrafos", description: "Fotografía profesional para eventos y más" },
    { icon: Megaphone, title: "Marketing", description: "Servicios de marketing digital y tradicional" },
    { icon: Code, title: "Programación", description: "Desarrollo de software y sitios web" },
    { icon: Heart, title: "Instructor de Yoga", description: "Clases personalizadas de yoga" },
    { icon: Dumbbell, title: "Entrenador Personal", description: "Entrenamiento físico personalizado" },
    { icon: Sparkles, title: "Terapeuta de Masajes", description: "Servicios profesionales de masajes" }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-8">Nuestros Servicios</h1>
          <p className="text-xl">
            Conectamos expertos locales con personas que necesitan ayuda
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to="/ayuda"
                  className="inline-block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Encontrar Profesional
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}