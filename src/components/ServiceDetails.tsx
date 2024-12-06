import React from 'react';
import { Clock, MapPin } from 'lucide-react';

interface ServiceDetailsProps {
  details: {
    hours: number;
    description: string;
    address: string;
  };
  onChange: (details: any) => void;
  hourlyRate: number;
}

export default function ServiceDetails({ details, onChange, hourlyRate }: ServiceDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Duración del Servicio
        </label>
        <div className="flex items-center gap-4">
          <select
            value={details.hours}
            onChange={(e) => onChange({ ...details, hours: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            {[2, 3, 4, 5, 6, 7, 8].map(hours => (
              <option key={hours} value={hours}>{hours} horas</option>
            ))}
          </select>
          <div className="text-gray-600">
            Total: ${(details.hours * hourlyRate).toFixed(2)}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Dirección del Servicio
        </label>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={details.address}
            onChange={(e) => onChange({ ...details, address: e.target.value })}
            placeholder="Ingresa la dirección completa"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Detalles Adicionales
        </label>
        <textarea
          value={details.description}
          onChange={(e) => onChange({ ...details, description: e.target.value })}
          rows={4}
          placeholder="Describe los detalles específicos del servicio que necesitas..."
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        />
      </div>
    </div>
  );
}