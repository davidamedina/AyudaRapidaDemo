import React from 'react';
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
  Sparkles,
  LucideIcon
} from 'lucide-react';

interface ServiceCategory {
  icon: LucideIcon;
  title: string;
  id: string;
}

const serviceCategories: ServiceCategory[] = [
  { icon: Home, title: "Limpieza del Hogar", id: "limpieza" },
  { icon: Truck, title: "Mudanzas", id: "mudanzas" },
  { icon: Paintbrush, title: "Pintura", id: "pintura" },
  { icon: Wrench, title: "Reparaciones", id: "reparaciones" },
  { icon: Flower2, title: "Jardinería", id: "jardineria" },
  { icon: Dog, title: "Cuidado de Mascotas", id: "mascotas" },
  { icon: Scale, title: "Abogados", id: "legal" },
  { icon: Calculator, title: "Contadores", id: "contabilidad" },
  { icon: Camera, title: "Modelos", id: "modelos" },
  { icon: Music, title: "Músicos", id: "musica" },
  { icon: Palette, title: "Artistas", id: "arte" },
  { icon: ChefHat, title: "Chefs", id: "cocina" },
  { icon: MapPin, title: "Guías Turísticos", id: "turismo" },
  { icon: Laptop, title: "Técnicos IT", id: "tecnologia" },
  { icon: Car, title: "Mecánicos", id: "mecanica" },
  { icon: PhotoIcon, title: "Fotógrafos", id: "fotografia" },
  { icon: Megaphone, title: "Marketing", id: "marketing" },
  { icon: Code, title: "Programación", id: "programacion" },
  { icon: Heart, title: "Instructor de Yoga", id: "yoga" },
  { icon: Dumbbell, title: "Entrenador Personal", id: "entrenador" },
  { icon: Sparkles, title: "Terapeuta de Masajes", id: "masajes" }
];

interface ServiceCategoriesProps {
  selectedCategories: string[];
  onCategoryToggle: (categoryId: string) => void;
}

export default function ServiceCategories({ selectedCategories, onCategoryToggle }: ServiceCategoriesProps) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Categorías de Servicio
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {serviceCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryToggle(category.id)}
            className={`flex items-center gap-2 p-3 rounded-lg border transition-colors
              ${selectedCategories.includes(category.id)
                ? 'border-green-600 bg-green-50 text-green-700'
                : 'border-gray-300 hover:border-green-600'
              }`}
          >
            <category.icon className="w-5 h-5" />
            <span className="text-sm">{category.title}</span>
          </button>
        ))}
      </div>
      {selectedCategories.length === 0 && (
        <p className="text-sm text-red-500">
          Selecciona al menos una categoría de servicio
        </p>
      )}
    </div>
  );
}