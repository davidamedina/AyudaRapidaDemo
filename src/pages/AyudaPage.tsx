import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import TaskerProfile from '../components/TaskerProfile';
import SearchBar from '../components/SearchBar';
import userService from '../services/userService';

export default function AyudaPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';

  const [selectedDate, setSelectedDate] = useState('');
  const [priceRange, setPriceRange] = useState(50);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredTaskers, setFilteredTaskers] = useState([]);

  const locations = [
    'San Juan',
    'Bayamón',
    'Carolina',
    'Ponce',
    'Caguas',
    'Guaynabo',
    'Mayagüez',
    'Arecibo'
  ];

  const sampleTaskers = [
    {
      name: "María Rodriguez",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 4.5,
      reviews: 156,
      hourlyRate: 25,
      location: "San Juan, Puerto Rico",
      description: "Especialista en limpieza profunda con más de 10 años de experiencia.",
      categories: ['limpieza'],
      searchKeywords: ['limpieza', 'hogar', 'casa', 'profunda', 'mantenimiento', 'servicio domestico'],
      portfolio: [
        {
          images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"],
          description: "Limpieza completa de sala moderna"
        }
      ],
      professionalLinks: {
        linkedin: "https://linkedin.com/in/maria-rodriguez",
        instagram: "https://instagram.com/maria.cleaning"
      },
      experience: {
        years: 10,
        highlights: [
          "Gestión de proyectos de limpieza para más de 200 propiedades",
          "Especialista en restauración post-construcción",
          "Experiencia con sistemas de limpieza ecológicos"
        ],
        certifications: [
          "Certificación en Manejo de Productos Químicos",
          "Certificación de Limpieza Ecológica"
        ]
      },
      lastReview: {
        rating: 5,
        text: "María hizo un trabajo excepcional. Mi casa nunca había quedado tan limpia y organizada.",
        author: "Carlos M.",
        date: "14/03/2024"
      }
    },
    {
      name: "Servicios de Limpieza CleanPro",
      image: "https://images.unsplash.com/photo-1606206873764-fd15e242df52?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 4.8,
      reviews: 342,
      hourlyRate: 35,
      location: "Todo Puerto Rico",
      description: "Empresa líder en servicios de limpieza profesional y mantenimiento.",
      categories: ['limpieza', 'comercial'],
      searchKeywords: ['limpieza', 'comercial', 'oficina', 'empresa', 'mantenimiento', 'edificios'],
      portfolio: [
        {
          images: ["https://images.unsplash.com/photo-1527515545081-5db817172677?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"],
          description: "Limpieza comercial de oficinas"
        }
      ],
      professionalLinks: {
        linkedin: "https://linkedin.com/company/cleanpro-services",
        instagram: "https://instagram.com/cleanpro_pr"
      },
      experience: {
        years: 15,
        highlights: [
          "Más de 1,000 clientes satisfechos",
          "Equipo de 50+ profesionales certificados"
        ],
        certifications: [
          "Certificación ISSA",
          "ISO 9001:2015"
        ]
      },
      lastReview: {
        rating: 5,
        text: "Excelente servicio corporativo. Han mantenido nuestras oficinas impecables.",
        author: "Enterprise Solutions Inc.",
        date: "12/03/2024"
      }
    }
  ];

  useEffect(() => {
    const filterTaskers = () => {
      let filtered = [...sampleTaskers];

      if (searchQuery) {
        const searchTerms = searchQuery.toLowerCase().split(' ');
        filtered = filtered.filter(tasker => {
          const searchableText = [
            tasker.name,
            tasker.description,
            ...tasker.searchKeywords,
            ...tasker.categories,
            ...tasker.experience.highlights
          ].join(' ').toLowerCase();

          return searchTerms.every(term => searchableText.includes(term));
        });
      }

      if (selectedLocation) {
        filtered = filtered.filter(tasker => 
          tasker.location.toLowerCase().includes(selectedLocation.toLowerCase())
        );
      }

      setFilteredTaskers(filtered);
    };

    filterTaskers();
  }, [searchQuery, selectedLocation]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Encuentra el profesional perfecto para tu tarea</h1>

      {/* Search Bars */}
      <div className="space-y-4 mb-8">
        <SearchBar
          placeholder="¿Qué tipo de servicio necesitas?"
          onSearch={setSearchQuery}
          className="mb-4"
        />
      </div>

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

          <h2 className="text-xl font-semibold mb-4">Ubicación</h2>
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-gray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="">Todas las ubicaciones</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
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
          {filteredTaskers.length > 0 ? (
            filteredTaskers.map((tasker, index) => (
              <TaskerProfile key={index} tasker={tasker} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No se encontraron profesionales que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}