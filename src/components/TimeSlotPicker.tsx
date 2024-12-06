import React from 'react';
import { Clock } from 'lucide-react';

interface TimeSlotPickerProps {
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
  date: Date;
}

export default function TimeSlotPicker({ selectedTime, onSelectTime, date }: TimeSlotPickerProps) {
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  const isTimeDisabled = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    const slotTime = new Date(date);
    slotTime.setHours(hours, minutes);
    return slotTime < new Date();
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Horarios disponibles para {date.toLocaleDateString('es', { weekday: 'long', day: 'numeric', month: 'long' })}
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {timeSlots.map(time => {
          const disabled = isTimeDisabled(time);
          return (
            <button
              key={time}
              onClick={() => !disabled && onSelectTime(time)}
              disabled={disabled}
              className={`
                p-3 rounded-lg border flex items-center justify-center gap-2
                ${selectedTime === time ? 'border-green-600 bg-green-50 text-green-700' : 'border-gray-200'}
                ${disabled ? 'bg-gray-50 text-gray-300 cursor-not-allowed' : 'hover:border-green-600'}
              `}
            >
              <Clock className="w-4 h-4" />
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
}