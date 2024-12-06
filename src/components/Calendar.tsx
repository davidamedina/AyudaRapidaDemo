import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export default function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const days = [...Array(daysInMonth)].map((_, i) => i + 1);
  const weeks = [];
  let week = Array(7).fill(null);

  days.forEach((day, i) => {
    const dayIndex = (firstDayOfMonth + i) % 7;
    week[dayIndex] = day;
    
    if (dayIndex === 6 || i === days.length - 1) {
      weeks.push([...week]);
      week = Array(7).fill(null);
    }
  });

  const isDateDisabled = (date: Date) => {
    return date < new Date(new Date().setHours(0, 0, 0, 0));
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="text-lg font-semibold">
          {currentMonth.toLocaleDateString('es', { month: 'long', year: 'numeric' })}
        </h3>
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
            {day}
          </div>
        ))}
        
        {weeks.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((day, dayIndex) => {
              if (!day) return <div key={`empty-${dayIndex}`} className="aspect-square" />;
              
              const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
              const isSelected = selectedDate?.toDateString() === date.toDateString();
              const isDisabled = isDateDisabled(date);

              return (
                <button
                  key={`day-${day}`}
                  onClick={() => !isDisabled && onSelectDate(date)}
                  disabled={isDisabled}
                  className={`
                    aspect-square flex items-center justify-center rounded-full
                    ${isSelected ? 'bg-green-600 text-white' : 'hover:bg-gray-100'}
                    ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer'}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}