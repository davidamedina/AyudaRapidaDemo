import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Bell, CheckCircle, Star } from 'lucide-react';
import Footer from '../components/Footer';

interface Task {
  id: string;
  title: string;
  location: string;
  distance: string;
  date: string;
  time: string;
  duration: string;
  description: string;
  price: number;
  isUrgent?: boolean;
  status: 'available' | 'upcoming' | 'completed';
  clientName?: string;
  clientRating?: number;
  clientReview?: string;
}

export default function TasksDashboardPage() {
  const [activeTab, setActiveTab] = useState<'available' | 'upcoming' | 'completed'>('available');

  const tasks: Task[] = [
    // Available Tasks (from user requests)
    {
      id: '1',
      title: 'Limpieza de Casa',
      location: 'Condado',
      distance: '2.3 km',
      date: 'Hoy',
      time: '2:00 PM',
      duration: '3 horas',
      description: 'Limpieza general de apartamento de 2 cuartos',
      price: 105,
      isUrgent: true,
      status: 'available'
    },
    {
      id: '2',
      title: 'Limpieza de Oficina',
      location: 'Santurce',
      distance: '3.1 km',
      date: 'Mañana',
      time: '9:00 AM',
      duration: '4 horas',
      description: 'Limpieza de oficina comercial',
      price: 140,
      status: 'available'
    },
    {
      id: '3',
      title: 'Mantenimiento de Jardín',
      location: 'Guaynabo',
      distance: '4.2 km',
      date: 'Mañana',
      time: '3:00 PM',
      duration: '2 horas',
      description: 'Podar arbustos y cortar grama',
      price: 80,
      status: 'available'
    },
    // Upcoming Tasks (confirmed by tasker)
    {
      id: '4',
      title: 'Limpieza de Piscina',
      location: 'Isla Verde',
      distance: '5.7 km',
      date: 'Jueves, 21 Mar',
      time: '10:00 AM',
      duration: '2 horas',
      description: 'Mantenimiento regular de piscina residencial',
      price: 90,
      status: 'upcoming',
      clientName: 'Roberto Méndez'
    },
    {
      id: '5',
      title: 'Pintura de Interior',
      location: 'Miramar',
      distance: '1.8 km',
      date: 'Viernes, 22 Mar',
      time: '9:00 AM',
      duration: '6 horas',
      description: 'Pintar sala y comedor, incluye materiales',
      price: 280,
      status: 'upcoming',
      clientName: 'Ana Rivera'
    },
    // Completed Tasks
    {
      id: '6',
      title: 'Limpieza de Apartamento',
      location: 'Condado',
      distance: '2.1 km',
      date: '15 Mar',
      time: '1:00 PM',
      duration: '4 horas',
      description: 'Limpieza profunda de apartamento',
      price: 140,
      status: 'completed',
      clientName: 'Carmen Vega',
      clientRating: 5,
      clientReview: 'Excelente servicio, muy profesional y puntual. Definitivamente lo recomiendo.'
    },
    {
      id: '7',
      title: 'Reparación de Aire',
      location: 'Ocean Park',
      distance: '3.4 km',
      date: '14 Mar',
      time: '11:00 AM',
      duration: '2 horas',
      description: 'Mantenimiento de aire acondicionado',
      price: 120,
      status: 'completed',
      clientName: 'Luis Torres',
      clientRating: 5,
      clientReview: 'Muy buen trabajo, rápido y eficiente.'
    }
  ];

  const filteredTasks = tasks.filter(task => task.status === activeTab);

  const renderTaskCard = (task: Task) => {
    return (
      <div key={task.id} className="bg-white rounded-lg shadow-sm p-6">
        {task.isUrgent && (
          <div className="flex items-center gap-2 text-red-500 mb-4">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Urgente</span>
          </div>
        )}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-semibold">{task.title}</h2>
          <span className="text-3xl font-bold text-green-600">${task.price}</span>
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>{task.location} • {task.distance}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span>{task.date} - {task.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>{task.duration}</span>
          </div>
          {task.clientName && (
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-medium">Cliente:</span>
              <span>{task.clientName}</span>
            </div>
          )}
        </div>
        <p className="text-gray-600 mb-6">{task.description}</p>
        
        {task.status === 'completed' && task.clientReview && (
          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              {[...Array(task.clientRating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 italic">"{task.clientReview}"</p>
            <p className="text-sm text-gray-500 mt-2">- {task.clientName}</p>
          </div>
        )}

        <div className="flex justify-end gap-4">
          {task.status === 'available' && (
            <>
              <button className="px-6 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors">
                Detalles
              </button>
              <button className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">
                Aceptar Tarea
              </button>
            </>
          )}
          {task.status === 'upcoming' && (
            <button className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">
              Ver Detalles
            </button>
          )}
          {task.status === 'completed' && (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span>Completada</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Tus Tareas</h1>
          <button className="relative">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('available')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
              activeTab === 'available' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Clock className="w-5 h-5" />
            Disponibles
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
              activeTab === 'upcoming'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Calendar className="w-5 h-5" />
            Próximas
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
              activeTab === 'completed'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            Completadas
          </button>
        </div>

        <div className="space-y-6">
          {filteredTasks.length > 0 ? (
            filteredTasks.map(renderTaskCard)
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-600">No hay tareas {activeTab === 'available' ? 'disponibles' : activeTab === 'upcoming' ? 'próximas' : 'completadas'} en este momento.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}