import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { Link } from 'react-router';
import { motorcycleInventory, getMotorcycleById, type MotorcycleModel } from '../data/motorcycles';

interface QuoteFormData {
  // Quote Info
  quoteNumber: string;
  quoteDate: string;
  quoteValidUntil: string;
  
  // Client Info
  clientName: string;
  clientId: string;
  clientLocation: string;
  
  // Motorcycle Selection
  selectedMotorcycleId: string;
  motorcycleColor: string;
  quantity: number;
  
  // Payment Options
  mode: 'cash' | 'financing';
  applyDiscount: boolean;
  discountPercentage: number;
  
  // Financing
  downPaymentPercentage: number;
  installment12M: number;
  installment18M: number;
  installment24M: number;
}

interface QuoteFormProps {
  onSubmit: (data: QuoteFormData, motorcycle: MotorcycleModel) => void;
}

export default function QuoteForm({ onSubmit }: QuoteFormProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    // Quote Info
    quoteNumber: 'QT-2024-00842',
    quoteDate: '23 Mayo, 2024',
    quoteValidUntil: '06 Junio, 2024',
    
    // Client Info
    clientName: '',
    clientId: '',
    clientLocation: '',
    
    // Motorcycle Selection
    selectedMotorcycleId: motorcycleInventory[0]?.id || '',
    motorcycleColor: motorcycleInventory[0]?.availableColors[0] || '',
    quantity: 1,
    
    // Payment Options
    mode: 'cash',
    applyDiscount: false,
    discountPercentage: 10,
    
    // Financing
    downPaymentPercentage: 30,
    installment12M: 7450.00,
    installment18M: 5210.00,
    installment24M: 4085.00,
  });

  const selectedMotorcycle = getMotorcycleById(formData.selectedMotorcycleId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMotorcycle) {
      onSubmit(formData, selectedMotorcycle);
    }
  };

  const updateField = (field: keyof QuoteFormData, value: any) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      
      // When motorcycle changes, update available color to first option
      if (field === 'selectedMotorcycleId') {
        const motorcycle = getMotorcycleById(value);
        if (motorcycle) {
          updated.motorcycleColor = motorcycle.availableColors[0];
        }
      }
      
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-blue-100 to-cyan-200 py-12 px-4 relative">
      {/* Settings Button - Top Right */}
      <Link
        to="/settings"
        className="absolute top-6 right-6 p-3 bg-white/60 backdrop-blur-md hover:bg-white/80 rounded-2xl transition shadow-lg"
      >
        <Settings className="w-5 h-5 text-gray-700" />
      </Link>

      <div className="max-w-2xl mx-auto">
        {/* Main Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-semibold text-gray-900 mb-3 tracking-tight">
              Generador de cotizaciones
            </h1>
            <p className="text-gray-500 text-lg font-light">
              MDS — Calidad sobre ruedas
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Quote Information Row */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2 font-light">
                  Cotización #
                </label>
                <input
                  type="text"
                  value={formData.quoteNumber}
                  onChange={(e) => updateField('quoteNumber', e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition text-gray-900 font-light"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2 font-light">
                  Fecha
                </label>
                <input
                  type="text"
                  value={formData.quoteDate}
                  onChange={(e) => updateField('quoteDate', e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition text-gray-900 font-light"
                  required
                />
              </div>
            </div>

            {/* Client Information */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2 font-light">
                  Nombre del Cliente
                </label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => updateField('clientName', e.target.value)}
                  placeholder="Ej. Juan Pérez"
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition text-gray-900 font-light placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2 font-light">
                  ID o RNC
                </label>
                <input
                  type="text"
                  value={formData.clientId}
                  onChange={(e) => updateField('clientId', e.target.value)}
                  placeholder="001-0000000-0"
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition text-gray-900 font-light placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2 font-light">
                  Dirección
                </label>
                <input
                  type="text"
                  value={formData.clientLocation}
                  onChange={(e) => updateField('clientLocation', e.target.value)}
                  placeholder="Calle, Sector, Ciudad..."
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition text-gray-900 font-light placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            {/* Motorcycle Selection */}
            <div className="grid grid-cols-[1fr_auto] gap-x-12 gap-y-6 items-end">
              <div>
                <label className="block text-sm text-gray-600 mb-2 font-light">
                  Modelo de Motocicleta
                </label>
                <select
                  value={formData.selectedMotorcycleId}
                  onChange={(e) => updateField('selectedMotorcycleId', e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition text-gray-900 font-light appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>Seleccionar modelo...</option>
                  {motorcycleInventory.map((motorcycle) => (
                    <option key={motorcycle.id} value={motorcycle.id}>
                      {motorcycle.brand.toUpperCase()} - {motorcycle.model}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-20">
                <input
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={(e) => updateField('quantity', parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition text-gray-900 font-light text-center"
                  required
                />
              </div>
            </div>

            {/* Color Selection */}
            {selectedMotorcycle && selectedMotorcycle.availableColors.length > 0 && (
              <div>
                <label className="block text-sm text-gray-600 mb-2 font-light">
                  Color
                </label>
                <select
                  value={formData.motorcycleColor}
                  onChange={(e) => updateField('motorcycleColor', e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition text-gray-900 font-light appearance-none cursor-pointer"
                  required
                >
                  {selectedMotorcycle.availableColors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Payment Mode */}
            <div>
              <label className="block text-sm text-gray-600 mb-3 font-light">
                Modo de Pago
              </label>
              <div className="inline-flex rounded-2xl bg-gray-100/60 p-1 w-full">
                <button
                  type="button"
                  onClick={() => updateField('mode', 'cash')}
                  className={`flex-1 px-6 py-3 rounded-xl font-light text-sm transition-all ${
                    formData.mode === 'cash'
                      ? 'bg-white text-gray-900 shadow-md'
                      : 'text-gray-600'
                  }`}
                >
                  Efectivo
                </button>
                <button
                  type="button"
                  onClick={() => updateField('mode', 'financing')}
                  className={`flex-1 px-6 py-3 rounded-xl font-light text-sm transition-all ${
                    formData.mode === 'financing'
                      ? 'bg-white text-gray-900 shadow-md'
                      : 'text-gray-600'
                  }`}
                >
                  Financiamiento
                </button>
              </div>
            </div>

            {/* Financing Options - Only show when financing is selected */}
            {formData.mode === 'financing' && (
              <div className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-gray-500 mb-2 font-light">
                      Inicial (%)
                    </label>
                    <input
                      type="number"
                      step="1"
                      value={formData.downPaymentPercentage}
                      onChange={(e) => updateField('downPaymentPercentage', parseFloat(e.target.value))}
                      className="w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition text-gray-900 text-sm font-light"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-2 font-light">
                      12 Meses (RD$)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.installment12M}
                      onChange={(e) => updateField('installment12M', parseFloat(e.target.value))}
                      className="w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition text-gray-900 text-sm font-light"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-2 font-light">
                      18 Meses (RD$)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.installment18M}
                      onChange={(e) => updateField('installment18M', parseFloat(e.target.value))}
                      className="w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition text-gray-900 text-sm font-light"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-2 font-light">
                      24 Meses (RD$)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.installment24M}
                      onChange={(e) => updateField('installment24M', parseFloat(e.target.value))}
                      className="w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition text-gray-900 text-sm font-light"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Discount Toggle */}
            <div className="flex items-center justify-between py-2">
              <label className="text-sm text-gray-600 font-light">
                ¿Aplicar descuento?
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.applyDiscount}
                  onChange={(e) => updateField('applyDiscount', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
              </label>
            </div>

            {/* Discount Percentage */}
            {formData.applyDiscount && (
              <div>
                <label className="block text-sm text-gray-600 mb-2 font-light">
                  Descuento (%)
                </label>
                <input
                  type="number"
                  step="1"
                  min="0"
                  max="100"
                  value={formData.discountPercentage}
                  onChange={(e) => updateField('discountPercentage', parseFloat(e.target.value))}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition text-gray-900 font-light"
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gray-900 text-white rounded-2xl font-light text-lg hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl mt-12"
            >
              Generar Cotización
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-xs text-gray-400 tracking-widest font-light">
              POWERED BY ALEJOAUTOMATIONS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
