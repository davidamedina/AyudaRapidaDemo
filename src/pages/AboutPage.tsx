import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Star } from 'lucide-react';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section with All Text */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8">¿Por qué existimos?</h1>
            <p className="text-3xl mb-8">Para crear un Puerto Rico autosuficiente.</p>
            <div className="space-y-6 text-xl">
              <p>
                Puerto Rico ha cultivado talento STEM de clase mundial, producido 
                íconos musicales globales y entrenado atletas de élite durante décadas. 
                Nuestra gente es de las más solidarias y colaborativas del mundo. 
                Es hora de que sus talentos sean reconocidos aquí en la isla.
              </p>
              <p>
                Un claro ejemplo de esto es ATH Móvil: aunque Venmo es una empresa 
                mucho más grande y quizás con un producto más avanzado, los puertorriqueños 
                prefieren ATH Móvil porque es una empresa local. Esta lealtad demuestra que 
                el mayor recurso de Puerto Rico es, sin duda, su gente.
              </p>
              <p className="text-2xl font-semibold mt-8">
                Ayuda Rápida existe para cerrar esa brecha y asegurar que el talento 
                puertorriqueño sea visto, valorado y recompensado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Talento Local</h3>
            <p className="text-gray-600">
              Impulsamos el crecimiento económico aprovechando el talento puertorriqueño.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Solidaridad</h3>
            <p className="text-gray-600">
              Fomentamos una comunidad que se apoya mutuamente para crecer juntos.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-10 h-10 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excelencia</h3>
            <p className="text-gray-600">
              Promovemos los más altos estándares de calidad en cada servicio.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-green-50 rounded-xl p-12 text-center">
          <p className="text-2xl font-semibold text-green-700">
            Juntos podemos construir un Puerto Rico más próspero y autosuficiente.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20 text-center">
        <h3 className="text-3xl font-bold mb-6">¿Listo para ser parte del cambio?</h3>
        <p className="text-xl mb-8">Únete a nuestra comunidad de profesionales locales</p>
        <Link
          to="/register"
          className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors"
        >
          Regístrate como Profesional
        </Link>
      </section>

      <Footer />
    </div>
  );
}