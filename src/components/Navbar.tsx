import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Briefcase className="h-8 w-8 text-green-700" />
          <span className="text-2xl font-bold text-green-700">Ayuda Rápida PR</span>
        </Link>
        <nav className="flex space-x-6">
          <Link 
            to="/about" 
            className={`${location.pathname === '/about' ? 'text-green-700' : 'text-gray-600'} hover:text-green-700`}
          >
            Nosotros
          </Link>
          <Link 
            to="/services" 
            className={`${location.pathname === '/services' ? 'text-green-700' : 'text-gray-600'} hover:text-green-700`}
          >
            Servicios
          </Link>
          <Link 
            to="/ayuda" 
            className={`${location.pathname === '/ayuda' ? 'text-green-700' : 'text-gray-600'} hover:text-green-700`}
          >
            Ayuda
          </Link>
          <Link 
            to="/tareas" 
            className={`${location.pathname === '/tareas' ? 'text-green-700' : 'text-gray-600'} hover:text-green-700`}
          >
            Tareas
          </Link>
        </nav>
      </div>
    </header>
  );
}