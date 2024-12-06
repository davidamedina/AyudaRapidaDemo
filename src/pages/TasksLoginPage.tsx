import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Briefcase } from 'lucide-react';
import Footer from '../components/Footer';

export default function TasksLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically authenticate the user
    // For now, we'll just redirect to the tasks page
    navigate('/tareas/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-green-600 text-white rounded-2xl p-12 mb-12">
          <h1 className="text-5xl font-bold mb-6">¡Bienvenido a Ayuda Rápida!</h1>
          <p className="text-2xl mb-8">
            Estás a solo unos pasos de comenzar a recibir tareas y ganar dinero haciendo lo que te gusta.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8" />
              <span className="text-xl">Gana hasta $45/hora</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8" />
              <span className="text-xl">Horario flexible</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-8 h-8" />
              <span className="text-xl">Sé tu propio jefe</span>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Iniciar Sesión
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-600">¿No tienes una cuenta?</p>
              <a
                href="/register"
                className="text-green-600 font-semibold hover:text-green-700"
              >
                Completa tu perfil para comenzar →
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-green-600">3.2M+</p>
              <p className="text-gray-600">Clientes Potenciales</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600">$500M+</p>
              <p className="text-gray-600">Tamaño del Mercado</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600">$500+</p>
              <p className="text-gray-600">Ingreso Extra Mensual</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}