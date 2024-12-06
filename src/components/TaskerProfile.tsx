import React, { useState } from 'react';
import { Star, Award, MapPin, CheckCircle, Briefcase, GraduationCap, ThumbsUp, Linkedin, FileText, ExternalLink, Instagram, Calendar } from 'lucide-react';
import SchedulingModal from './SchedulingModal';

interface TaskerProfileProps {
  tasker: {
    name: string;
    image: string;
    rating: number;
    reviews: number;
    hourlyRate: number;
    location: string;
    description: string;
    portfolio: {
      images: string[];
      description: string;
    }[];
    professionalLinks: {
      linkedin?: string;
      instagram?: string;
      resume?: string;
    };
    experience: {
      years: number;
      highlights: string[];
      certifications: string[];
      specializations: string[];
    };
    lastReview: {
      rating: number;
      text: string;
      author: string;
      date: string;
    };
  };
}

export default function TaskerProfile({ tasker }: TaskerProfileProps) {
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-6">
          {/* Profile Image and Basic Info */}
          <img 
            src={tasker.image} 
            alt={tasker.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold">{tasker.name}</h2>
                <div className="flex items-center gap-2 mt-1 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{tasker.location}</span>
                </div>
                {/* Professional Links */}
                <div className="flex gap-4 mt-3">
                  {tasker.professionalLinks.linkedin && (
                    <a 
                      href={tasker.professionalLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm border border-blue-200 rounded-md px-3 py-1.5 hover:bg-blue-50 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                  {tasker.professionalLinks.resume && (
                    <a 
                      href={tasker.professionalLinks.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 hover:text-gray-700 text-sm border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Ver Resume</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                  {tasker.professionalLinks.instagram && (
                    <a 
                      href={tasker.professionalLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-pink-600 hover:text-pink-700 text-sm border border-pink-200 rounded-md px-3 py-1.5 hover:bg-pink-50 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">${tasker.hourlyRate}/hr</div>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-semibold">{tasker.rating}</span>
                  <span className="text-gray-500">({tasker.reviews} reseñas)</span>
                </div>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Experiencia</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-green-600" />
                  <span>{tasker.experience.years} años de experiencia</span>
                </div>
                {tasker.experience.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Certificaciones</h3>
              <div className="flex flex-wrap gap-2">
                {tasker.experience.certifications.map((cert, index) => (
                  <span 
                    key={index}
                    className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    <Award className="w-4 h-4" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Trabajos Anteriores</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Modern clean living room"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <p className="text-white text-sm text-center px-2">Limpieza completa de sala moderna</p>
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Clean kitchen interior"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <p className="text-white text-sm text-center px-2">Limpieza profunda de cocina</p>
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Clean bedroom"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <p className="text-white text-sm text-center px-2">Limpieza de dormitorio principal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Review */}
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Última Reseña</h3>
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < tasker.lastReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">{tasker.lastReview.text}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    {tasker.lastReview.author} - {tasker.lastReview.date}
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Button */}
            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setIsSchedulingOpen(true)}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Agendar Cita
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scheduling Modal */}
      {isSchedulingOpen && (
        <SchedulingModal
          tasker={tasker}
          onClose={() => setIsSchedulingOpen(false)}
        />
      )}
    </div>
  );
}