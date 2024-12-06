import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import TaskerProfile from '../components/TaskerProfile';

export default function TasksPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [priceRange, setPriceRange] = useState(50);

  const sampleTasker = {
    name: "María Rodriguez",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4.5,
    reviews: 156,
    hourlyRate: 25,
    location: "San Juan, Puerto Rico",
    description: "Especialista en limpieza profunda con más de 10 años de experiencia.",
    portfolio: [
      {
        images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"],
        description: "Limpieza completa de sala moderna"
      },
      {
        images: ["https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"],
        description: "Limpieza profunda de cocina"
      },
      {
        images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"],
        description: "Limpieza de dormitorio principal"
      }
    ],
    professionalLinks: {
      linkedin: "https://linkedin.com/in/maria-rodriguez",
      resume: "https://example.com/maria-resume.pdf",
      instagram: "https://instagram.com/maria.cleaning"
    },
    experience: {
      years: 10,
      highlights: [
        "Gestión de proyectos de limpieza para más de 200 propiedades",
        "Especialista en restauración post-construcción",
        "Experiencia con sistemas de limpieza ecológicos",
        "Capacitación de equipos de limpieza profesional"
      ],
      certifications: [
        "Certificación en Manejo de Productos Químicos",
        "Certificación de Limpieza Ecológica",
        "Certificación de Seguridad y Salud Ocupacional",
        "Certificación de Primeros Auxilios"
      ]
    },
    lastReview: {
      rating: 5,
      text: "María hizo un trabajo excepcional. Mi casa nunca había quedado tan limpia y organizada. Muy profesional y puntual.",
      author: "Carlos M.",
      date: "3/14/2024"
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Encuentra el profesional perfecto para tu tarea</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold mb-6">Fecha</h2>
          <div className="grid grid-cols-2 gap-3 mb-8">
            <button 
              className="px-4 py-2 rounded-full border border-gray-300 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setSelectedDate('today')}
            >
              Hoy
            </button>
            <button 
              className="px-4 py-2 rounded-full border border-gray-300 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              3 días
            </button>
            <button 
              className="px-4 py-2 rounded-full border border-gray-300 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Una semana
            </button>
            <button 
              className="px-4 py-2 rounded-full border border-gray-300 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Elegir fecha
            </button>
          </div>

          <h2 className="text-xl font-semibold mb-4">Hora del día</h2>
          <div className="space-y-3 mb-8">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="form-checkbox text-green-600 rounded" />
              <span>Mañana (8am - 12pm)</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="form-checkbox text-green-600 rounded" />
              <span>Tarde (12pm - 5pm)</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="form-checkbox text-green-600 rounded" />
              <span>Noche (5pm - 9:30pm)</span>
            </label>
          </div>

          <h2 className="text-xl font-semibold mb-4">Precio por hora</h2>
          <input 
            type="range" 
            min="15" 
            max="100" 
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
          <div className="text-sm text-gray-600 mt-2">Hasta ${priceRange}/hr</div>
        </div>

        {/* Right Column - Tasker Profiles */}
        <div className="lg:col-span-2 space-y-6">
          <TaskerProfile tasker={sampleTasker} />
        </div>
      </div>
    </main>
  );
}