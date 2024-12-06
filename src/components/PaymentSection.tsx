import React from 'react';
import { CreditCard } from 'lucide-react';

interface PaymentSectionProps {
  amount: number;
  selectedMethod: 'paypal' | 'athmovil' | null;
  onSelectMethod: (method: 'paypal' | 'athmovil') => void;
}

export default function PaymentSection({ amount, selectedMethod, onSelectMethod }: PaymentSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Selecciona el método de pago</h3>
      
      <div className="space-y-4">
        <button
          onClick={() => onSelectMethod('paypal')}
          className={`w-full p-4 rounded-lg border-2 flex items-center gap-4 transition-colors
            ${selectedMethod === 'paypal' 
              ? 'border-green-600 bg-green-50' 
              : 'border-gray-200 hover:border-green-600'
            }`}
        >
          <img 
            src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" 
            alt="PayPal"
            className="h-8"
          />
          <div className="flex-1 text-left">
            <h4 className="font-semibold">PayPal</h4>
            <p className="text-sm text-gray-600">Paga de forma segura con tu cuenta PayPal</p>
          </div>
          <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center
            ${selectedMethod === 'paypal' ? 'border-green-600' : 'border-gray-300'}">
            {selectedMethod === 'paypal' && (
              <div className="w-3 h-3 rounded-full bg-green-600" />
            )}
          </div>
        </button>

        <button
          onClick={() => onSelectMethod('athmovil')}
          className={`w-full p-4 rounded-lg border-2 flex items-center gap-4 transition-colors
            ${selectedMethod === 'athmovil' 
              ? 'border-green-600 bg-green-50' 
              : 'border-gray-200 hover:border-green-600'
            }`}
        >
          <img 
            src="https://athmovilpr.com/wp-content/uploads/2021/01/ATH-Movil-Logo.png" 
            alt="ATH Móvil"
            className="h-8"
          />
          <div className="flex-1 text-left">
            <h4 className="font-semibold">ATH Móvil</h4>
            <p className="text-sm text-gray-600">Paga directamente desde tu cuenta bancaria</p>
          </div>
          <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center
            ${selectedMethod === 'athmovil' ? 'border-green-600' : 'border-gray-300'}">
            {selectedMethod === 'athmovil' && (
              <div className="w-3 h-3 rounded-full bg-green-600" />
            )}
          </div>
        </button>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold mb-2">Resumen del Pago</h4>
        <div className="flex justify-between items-center">
          <span>Total a Pagar:</span>
          <span className="text-xl font-bold text-green-600">${amount.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          El pago se procesará de forma segura a través del método seleccionado
        </p>
      </div>
    </div>
  );
}