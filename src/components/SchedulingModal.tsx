import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, CreditCard } from 'lucide-react';
import Calendar from './Calendar';
import TimeSlotPicker from './TimeSlotPicker';
import ServiceDetails from './ServiceDetails';
import PaymentSection from './PaymentSection';

interface SchedulingModalProps {
  tasker: {
    name: string;
    hourlyRate: number;
    image: string;
  };
  onClose: () => void;
}

export default function SchedulingModal({ tasker, onClose }: SchedulingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [serviceDetails, setServiceDetails] = useState({
    hours: 2,
    description: '',
    address: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'athmovil' | null>(null);

  const steps = [
    { number: 1, title: 'Seleccionar Fecha' },
    { number: 2, title: 'Elegir Hora' },
    { number: 3, title: 'Detalles del Servicio' },
    { number: 4, title: 'Método de Pago' },
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else handleSubmit();
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Here you would typically send the booking data to your backend
    console.log({
      date: selectedDate,
      time: selectedTime,
      ...serviceDetails,
      paymentMethod,
      taskerId: tasker.id,
    });
    onClose();
  };

  const isNextDisabled = () => {
    switch (step) {
      case 1:
        return !selectedDate;
      case 2:
        return !selectedTime;
      case 3:
        return !serviceDetails.address || !serviceDetails.description;
      case 4:
        return !paymentMethod;
      default:
        return false;
    }
  };

  const totalAmount = serviceDetails.hours * tasker.hourlyRate;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Agendar con {tasker.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b">
          <div className="flex justify-between">
            {steps.map((s, i) => (
              <div key={s.number} className="flex items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center
                  ${step >= s.number ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}
                `}>
                  {s.number}
                </div>
                <span className="ml-2 text-sm">{s.title}</span>
                {i < steps.length - 1 && (
                  <div className="mx-4 h-0.5 w-12 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <Calendar
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          )}
          
          {step === 2 && selectedDate && (
            <TimeSlotPicker
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
              date={selectedDate}
            />
          )}
          
          {step === 3 && (
            <ServiceDetails
              details={serviceDetails}
              onChange={setServiceDetails}
              hourlyRate={tasker.hourlyRate}
            />
          )}

          {step === 4 && (
            <PaymentSection
              amount={totalAmount}
              selectedMethod={paymentMethod}
              onSelectMethod={setPaymentMethod}
            />
          )}
        </div>

        {/* Footer */}
        <div className="border-t px-6 py-4 flex justify-between items-center">
          <button
            onClick={handleBack}
            className={`flex items-center ${step === 1 ? 'invisible' : ''}`}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Atrás
          </button>

          {step === 4 && (
            <div className="text-lg font-semibold text-gray-700">
              Total: ${totalAmount.toFixed(2)}
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={isNextDisabled()}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 
              disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center"
          >
            {step === 4 ? (
              <>
                <CreditCard className="w-4 h-4 mr-2" />
                Proceder al Pago
              </>
            ) : (
              <>
                Siguiente
                <ChevronRight className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}