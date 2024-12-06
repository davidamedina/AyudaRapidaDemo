import React, { useState } from 'react';
import { Upload, Plus, X, Linkedin, Instagram } from 'lucide-react';
import FileUpload from '../components/FileUpload';
import ServiceCategories from '../components/ServiceCategories';
import Footer from '../components/Footer';
import userService from '../services/userService';

interface PortfolioItem {
  file: File;
  description: string;
  type: 'image' | 'video';
}

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  profileImage: File | null;
  location: string;
  hourlyRate: number;
  description: string;
  categories: string[];
  experience: {
    years: number;
    highlights: string[];
    certifications: string[];
  };
  portfolio: PortfolioItem[];
  professionalLinks: {
    linkedin?: string;
    instagram?: string;
  };
  resume: File | null;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    profileImage: null,
    location: '',
    hourlyRate: 25,
    description: '',
    categories: [],
    experience: {
      years: 0,
      highlights: [''],
      certifications: [''],
    },
    portfolio: [],
    professionalLinks: {},
    resume: null
  });

  const [portfolioPreviews, setPortfolioPreviews] = useState<string[]>([]);

  const handleCategoryToggle = (categoryId: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };

  const handlePortfolioFileAdd = (file: File) => {
    const fileType = file.type.startsWith('image/') ? 'image' : 'video';
    const newPortfolioItem: PortfolioItem = {
      file,
      description: '',
      type: fileType
    };
    
    setFormData(prev => ({
      ...prev,
      portfolio: [...prev.portfolio, newPortfolioItem]
    }));

    if (fileType === 'image') {
      setPortfolioPreviews(prev => [...prev, URL.createObjectURL(file)]);
    } else {
      setPortfolioPreviews(prev => [...prev, '/video-thumbnail-placeholder.png']);
    }
  };

  const handleHighlightAdd = () => {
    setFormData({
      ...formData,
      experience: {
        ...formData.experience,
        highlights: [...formData.experience.highlights, ''],
      },
    });
  };

  const handleCertificationAdd = () => {
    setFormData({
      ...formData,
      experience: {
        ...formData.experience,
        certifications: [...formData.experience.certifications, ''],
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (formData.categories.length === 0) {
      alert('Por favor selecciona al menos una categoría de servicio');
      return;
    }

    try {
      const user = await userService.createUser(formData);
      console.log('User created:', user);
      // Redirect to profile or dashboard
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error al crear el perfil. Por favor intenta de nuevo.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Crear Perfil Profesional</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Account Credentials */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Credenciales de la Cuenta</h2>
          
          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
              minLength={8}
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
              minLength={8}
            />
          </div>
        </section>

        {/* Basic Information */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Información Básica</h2>
          
          {/* Profile Image Upload */}
          <div className="mb-6">
            <FileUpload
              label="Foto de Perfil"
              onFileSelect={(file) => setFormData({ ...formData, profileImage: file })}
              currentFile={formData.profileImage}
              accept={{
                'image/*': ['.png', '.jpg', '.jpeg']
              }}
            />
          </div>

          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          {/* Service Categories */}
          <div className="mb-6">
            <ServiceCategories
              selectedCategories={formData.categories}
              onCategoryToggle={handleCategoryToggle}
            />
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ubicación
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="ej. San Juan, Puerto Rico"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          {/* Hourly Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tarifa por Hora ($)
            </label>
            <input
              type="number"
              min="15"
              value={formData.hourlyRate}
              onChange={(e) => setFormData({ ...formData, hourlyRate: Number(e.target.value) })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
        </section>

        {/* Portfolio */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Portafolio</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {formData.portfolio.map((item, index) => (
              <div key={index} className="relative">
                {item.type === 'image' ? (
                  <img
                    src={portfolioPreviews[index]}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ) : (
                  <video
                    src={URL.createObjectURL(item.file)}
                    className="w-full h-48 object-cover rounded-lg"
                    controls
                  />
                )}
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => {
                    const newPortfolio = [...formData.portfolio];
                    newPortfolio[index].description = e.target.value;
                    setFormData({
                      ...formData,
                      portfolio: newPortfolio
                    });
                  }}
                  placeholder="Descripción"
                  className="mt-2 w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newPortfolio = formData.portfolio.filter((_, i) => i !== index);
                    const newPreviews = portfolioPreviews.filter((_, i) => i !== index);
                    setFormData({
                      ...formData,
                      portfolio: newPortfolio
                    });
                    setPortfolioPreviews(newPreviews);
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            
            {/* Add Media Button */}
            <div className="relative w-full h-48">
              <FileUpload
                label=""
                onFileSelect={handlePortfolioFileAdd}
                currentFile={null}
                accept={{
                  'image/*': ['.png', '.jpg', '.jpeg'],
                  'video/*': ['.mp4', '.mov', '.avi']
                }}
                dropzoneClassName="h-48"
              />
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Experiencia</h2>
          
          {/* Years of Experience */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Años de Experiencia
            </label>
            <input
              type="number"
              min="0"
              value={formData.experience.years}
              onChange={(e) => setFormData({
                ...formData,
                experience: {
                  ...formData.experience,
                  years: Number(e.target.value),
                },
              })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          {/* Experience Highlights */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Aspectos Destacados
            </label>
            {formData.experience.highlights.map((highlight, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={highlight}
                  onChange={(e) => {
                    const newHighlights = [...formData.experience.highlights];
                    newHighlights[index] = e.target.value;
                    setFormData({
                      ...formData,
                      experience: {
                        ...formData.experience,
                        highlights: newHighlights,
                      },
                    });
                  }}
                  placeholder="ej. Gestión de proyectos grandes"
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      const newHighlights = formData.experience.highlights.filter((_, i) => i !== index);
                      setFormData({
                        ...formData,
                        experience: {
                          ...formData.experience,
                          highlights: newHighlights,
                        },
                      });
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleHighlightAdd}
              className="mt-2 flex items-center text-sm text-green-600 hover:text-green-700"
            >
              <Plus className="w-4 h-4 mr-1" />
              Agregar Aspecto Destacado
            </button>
          </div>

          {/* Certifications */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Certificaciones
            </label>
            {formData.experience.certifications.map((cert, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={cert}
                  onChange={(e) => {
                    const newCerts = [...formData.experience.certifications];
                    newCerts[index] = e.target.value;
                    setFormData({
                      ...formData,
                      experience: {
                        ...formData.experience,
                        certifications: newCerts,
                      },
                    });
                  }}
                  placeholder="ej. Certificación Profesional"
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      const newCerts = formData.experience.certifications.filter((_, i) => i !== index);
                      setFormData({
                        ...formData,
                        experience: {
                          ...formData.experience,
                          certifications: newCerts,
                        },
                      });
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleCertificationAdd}
              className="mt-2 flex items-center text-sm text-green-600 hover:text-green-700"
            >
              <Plus className="w-4 h-4 mr-1" />
              Agregar Certificación
            </button>
          </div>

          {/* Resume Upload */}
          <div className="mt-6">
            <FileUpload
              label="Resume/CV"
              onFileSelect={(file) => setFormData({ ...formData, resume: file })}
              currentFile={formData.resume}
              accept={{
                'application/pdf': ['.pdf'],
                'application/msword': ['.doc'],
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
              }}
            />
          </div>
        </section>

        {/* Professional Links */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Enlaces Profesionales (Opcional)</h2>
          
          <div className="space-y-4">
            {/* LinkedIn */}
            <div className="flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-blue-600" />
              <input
                type="url"
                value={formData.professionalLinks.linkedin || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  professionalLinks: {
                    ...formData.professionalLinks,
                    linkedin: e.target.value,
                  },
                })}
                placeholder="URL de LinkedIn"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-pink-600" />
              <input
                type="url"
                value={formData.professionalLinks.instagram || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  professionalLinks: {
                    ...formData.professionalLinks,
                    instagram: e.target.value,
                  },
                })}
                placeholder="URL de Instagram"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Crear Perfil
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}