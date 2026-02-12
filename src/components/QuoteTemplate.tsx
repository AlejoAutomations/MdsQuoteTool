import image_7ffda72c6b306625f638691652237037550b0589 from 'figma:asset/7ffda72c6b306625f638691652237037550b0589.png';
import image_39761613774dd511b2e94fde30fa0eaeaecc8e64 from 'figma:asset/39761613774dd511b2e94fde30fa0eaeaecc8e64.png';
import React from 'react';
import motoresDelSurLogo from 'figma:asset/6f8741db144cfc4ade90fbdcbc9557454601dfac.png';
import loncinLogo from 'figma:asset/b5a6912b58ee691ab531f9ce2f0d5e35d477e2a6.png';
import vogeLogo from 'figma:asset/3118b52fc372c928acdf0995d43d2d8cbc27945f.png';
import lotusLogo from 'figma:asset/07f7525b239ea887d223048f3f5031647be97bb2.png';
import stampImage from 'figma:asset/18e3ab60aa6efb62e2a8dc2604c25832daf434f8.png';
import { MapPin, IdCard, Calendar, Mail, Phone, MapPinned } from 'lucide-react';

type Brand = 'loncin' | 'voge';
type Mode = 'cash' | 'financing';

interface MotorcycleSpecs {
  engine: string;
  transmission: string;
  brakes: string;
  tankCapacity: string;
  maxSpeed: string;
  starter: string;
  cooling: string;
  battery: string;
  tires: string;
}

interface Discount {
  description: string;
  percentage: number;
  amount: number;
}

interface FinancingOption {
  downPaymentPercentage: number;
  downPaymentAmount: number;
  installment12M: number;
  installment18M: number;
  installment24M: number;
}

export interface QuoteTemplateProps {
  // Brand & Mode
  brand: Brand;
  mode: Mode;
  
  // Client Information
  clientName: string;
  clientId: string;
  clientLocation: string;
  
  // Quote Information
  quoteNumber: string;
  quoteDate: string;
  quoteValidUntil: string;
  
  // Motorcycle Information
  motorcycleModel: string;
  motorcycleCode: string;
  motorcycleColor: string;
  motorcycleYear: string;
  motorcycleImage: string;
  motorcycleSpecs: MotorcycleSpecs;
  
  // Pricing (Cash Mode)
  unitPrice: number;
  plateAndRegistrationFee: number;
  discount?: Discount; // Optional discount
  totalNetPrice: number;
  
  // Financing Information (Financing Mode)
  financingOptions?: FinancingOption;
}

export default function QuoteTemplate({
  brand,
  mode,
  clientName,
  clientId,
  clientLocation,
  quoteNumber,
  quoteDate,
  quoteValidUntil,
  motorcycleModel,
  motorcycleCode,
  motorcycleColor,
  motorcycleYear,
  motorcycleImage,
  motorcycleSpecs,
  unitPrice,
  plateAndRegistrationFee,
  discount,
  totalNetPrice,
  financingOptions,
}: QuoteTemplateProps) {
  // Brand configuration
  const brandConfig = {
    loncin: {
      name: 'LONCIN',
      partnerText: 'OFFICIAL PARTNER',
      logo: image_7ffda72c6b306625f638691652237037550b0589,
      primaryColor: 'red',
      headerGradient: 'from-white via-white to-red-700',
      accentColor: 'red-600',
      accentColorDark: 'red-700',
      borderColor: 'border-red-600',
      textAccent: 'text-red-600',
      bgAccent: 'bg-red-600',
      bgAccentDark: 'bg-red-700',
      gradientAccent: 'from-red-600 to-red-700',
      footerLogoBg: 'bg-red-700',
    },
    voge: {
      name: 'VOGE',
      partnerText: 'OFFICIAL PARTNER',
      logo: vogeLogo,
      primaryColor: 'yellow',
      headerGradient: 'from-white via-white to-yellow-400',
      accentColor: 'yellow-400',
      accentColorDark: 'yellow-500',
      borderColor: 'border-yellow-400',
      textAccent: 'text-yellow-500',
      bgAccent: 'bg-yellow-400',
      bgAccentDark: 'bg-yellow-500',
      gradientAccent: 'from-yellow-400 to-yellow-500',
      footerLogoBg: 'bg-yellow-400',
    },
  };

  const config = brandConfig[brand];

  // Format currency
  const formatCurrency = (amount: number) => {
    return `RD$ ${amount.toLocaleString('es-DO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Quote Template Document */}
      <div className="quote-template max-w-5xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className={`relative h-24 ${brand === 'voge' ? 'bg-gradient-to-r from-white via-gray-100 to-black' : `bg-gradient-to-r ${config.headerGradient}`} flex items-center justify-between px-12`}>
          <div className="flex items-center gap-4">
            <img 
              src={motoresDelSurLogo} 
              alt="Motores del Sur" 
              className="h-12 w-auto"
            />
          </div>
          <div className="flex items-center gap-4 text-white">
            <div className="text-right">
              <div className="text-2xl font-bold italic tracking-wide">{config.name}</div>
              {brand === 'voge' ? (
                <div className="text-xs tracking-wider">
                  <span className="text-[rgb(253,199,0)]">PREMIUM </span>
                  <span className="text-yellow-400">MOBILITY</span>
                </div>
              ) : (
                <div className="text-xs tracking-wider">{config.partnerText}</div>
              )}
            </div>
            <div className="h-12 w-px bg-white/40"></div>
            <img 
              src={config.logo} 
              alt={config.name} 
              className="h-12 w-auto"
            />
          </div>
        </div>

        {/* Customer and Quote Info */}
        <div className={`px-12 py-8 bg-gray-50 border-b-4 ${config.borderColor}`}>
          <div className="flex justify-between items-start">
            <div>
              <div className={`text-sm ${brand === 'voge' ? 'text-black' : config.textAccent} font-semibold mb-2 tracking-wide`}>PREPARADO PARA:</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{clientName}</h1>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <IdCard className="w-4 h-4" />
                  <span className="text-sm">ID: {clientId}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{clientLocation}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-2 tracking-wide">COTIZACIÓN #</div>
              <div className="text-3xl font-bold text-gray-900 mb-4">{quoteNumber}</div>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center justify-end gap-2">
                  <span>Fecha: {quoteDate}</span>
                  <Calendar className="w-4 h-4" />
                </div>
                <div className={`${config.textAccent} font-semibold`}>
                  Válido hasta: {quoteValidUntil}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="px-12 py-10">
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 tracking-wider mb-2">ESPECIFICACIONES</h2>
          </div>
          
          <div className="grid grid-cols-5 gap-8 items-center">
            {/* Product Image */}
            <div className="col-span-2">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 shadow-md border border-gray-200">
                <img 
                  src={motorcycleImage} 
                  alt={motorcycleModel} 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="col-span-3">
              <div className="flex items-baseline gap-3 mb-6">
                <h3 className="text-3xl font-bold text-gray-900">{motorcycleModel}</h3>
                <span className={`px-4 py-1.5 ${brand === 'voge' ? 'bg-yellow-400 text-black' : 'bg-red-600 text-white'} text-sm font-bold rounded-full`}>
                  {motorcycleCode}
                </span>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 gap-5">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Motor</div>
                    <div className="text-base font-semibold text-gray-900">{motorcycleSpecs.engine}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Transmisión</div>
                    <div className="text-base font-semibold text-gray-900">{motorcycleSpecs.transmission}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Frenos</div>
                    <div className="text-base font-semibold text-gray-900">{motorcycleSpecs.brakes}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cap. Tanque</div>
                    <div className="text-base font-semibold text-gray-900">{motorcycleSpecs.tankCapacity}</div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Velocidad Máx</div>
                    <div className="text-base font-semibold text-gray-900">{motorcycleSpecs.maxSpeed}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Arranque</div>
                    <div className="text-base font-semibold text-gray-900">{motorcycleSpecs.starter}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Refrigeración</div>
                    <div className="text-base font-semibold text-gray-900">{motorcycleSpecs.cooling}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Batería</div>
                    <div className="text-base font-semibold text-gray-900">{motorcycleSpecs.battery}</div>
                  </div>
                </div>
              </div>

              {/* Additional Specs */}
              <div className="mt-5 pt-5 border-t border-gray-200">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Aros (Del / Tras)</div>
                <div className="text-sm font-semibold text-gray-900">{motorcycleSpecs.tires}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Details */}
        <div className="px-12 py-8">
          <div className="mb-6">
            <h2 className={`text-sm font-semibold ${brand === 'voge' ? 'text-black' : config.textAccent} tracking-wider mb-2 flex items-center gap-2`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
              </svg>
              DETALLE DE INVERSIÓN
            </h2>
          </div>

          {/* Pricing Table */}
          {mode === 'cash' ? (
            // CASH MODE - Traditional Pricing Table
            <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className={`border-b border-gray-300 ${brand === 'voge' ? 'bg-black' : 'bg-gray-100'}`}>
                    <th className={`text-left px-6 py-4 text-sm font-bold uppercase tracking-wider ${brand === 'voge' ? 'text-white' : 'text-gray-700'}`}>
                      Descripción
                    </th>
                    <th className={`text-center px-6 py-4 text-sm font-bold uppercase tracking-wider w-32 ${brand === 'voge' ? 'text-white' : 'text-gray-700'}`}>
                      Cant.
                    </th>
                    <th className={`text-right px-6 py-4 text-sm font-bold uppercase tracking-wider w-48 ${brand === 'voge' ? 'text-white' : 'text-gray-700'}`}>
                      Precio Unitario
                    </th>
                    <th className={`text-right px-6 py-4 text-sm font-bold uppercase tracking-wider w-48 ${brand === 'voge' ? 'text-white' : 'text-gray-700'}`}>
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3">
                      <div className="font-semibold text-gray-900 text-sm">
                        Motocicleta {brand === 'loncin' ? 'Loncin' : 'Voge'} {motorcycleModel} ({motorcycleCode})
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Color: {motorcycleColor} • Año {motorcycleYear}
                      </div>
                    </td>
                    <td className="text-center px-5 py-3 text-gray-900 font-medium text-sm">
                      1
                    </td>
                    <td className="text-right px-5 py-3 text-gray-900 font-medium text-sm">
                      {formatCurrency(unitPrice)}
                    </td>
                    <td className="text-right px-5 py-3 text-gray-900 font-semibold text-sm font-bold">
                      {formatCurrency(unitPrice)}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3">
                      <div className="font-semibold text-gray-900 text-sm">
                        Gastos de Placa y Matrícula
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Trámites Legales DGII
                      </div>
                    </td>
                    <td className="text-center px-5 py-3 text-gray-900 font-medium text-sm">
                      1
                    </td>
                    <td className="text-right px-5 py-3 text-gray-900 font-medium text-sm">
                      {formatCurrency(plateAndRegistrationFee)}
                    </td>
                    <td className="text-right px-5 py-3 text-gray-900 font-semibold text-sm font-bold">
                      {formatCurrency(plateAndRegistrationFee)}
                    </td>
                  </tr>
                  {discount && (
                    <tr className="border-b border-gray-200 bg-green-50 hover:bg-green-100 transition-colors">
                      <td className="px-5 py-3">
                        <div className="font-semibold text-green-700 text-sm">
                          {discount.description}
                        </div>
                      </td>
                      <td className="text-center px-5 py-3 text-gray-500 text-sm">
                        -
                      </td>
                      <td className="text-right px-5 py-3 text-gray-500 text-sm">
                        -
                      </td>
                      <td className="text-right px-5 py-3 text-green-700 font-semibold text-sm font-bold">
                        -{formatCurrency(discount.amount)}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Total */}
              <div className={`px-6 py-4 ${brand === 'voge' ? 'bg-gray-600' : 'bg-gray-400'}`}>
                <div className="flex justify-between items-center">
                  <div className="text-white text-base font-semibold tracking-wide uppercase">
                    Total Neto a Pagar
                  </div>
                  <div className="text-white text-2xl font-bold">
                    {formatCurrency(totalNetPrice)}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // FINANCING MODE - Credit & Financing Table
            <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm">
              <div className={`px-6 py-3 border-b border-gray-300 ${brand === 'voge' ? 'bg-black' : 'bg-gray-100'} flex items-center justify-between`}>
                <h3 className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${brand === 'voge' ? 'text-white' : 'text-gray-700'}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                  Crédito & Financiamiento
                </h3>
                <span className={`text-xs ${brand === 'voge' ? 'text-gray-300' : 'text-gray-500'}`}>
                  Fecha: {quoteDate}
                </span>
              </div>
              
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-300 bg-gray-50">
                    <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-600">
                      Color / Cant.
                    </th>
                    <th className="text-right px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-600">
                      Precio Neto
                    </th>
                    <th className="text-right px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-600">
                      Inicial
                    </th>
                    <th className={`text-right px-5 py-3 text-xs font-bold uppercase tracking-wider ${brand === 'voge' ? 'bg-yellow-50 text-yellow-800' : 'bg-red-50 text-red-700'}`}>
                      Cuotas (12 M)
                    </th>
                    <th className="text-right px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-600">
                      Cuotas (18 M)
                    </th>
                    <th className="text-right px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-600">
                      Cuotas (24 M)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="font-semibold text-gray-900 text-sm">
                        {motorcycleColor}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        1 Unidad
                      </div>
                    </td>
                    <td className="text-right px-5 py-4">
                      <div className="text-sm font-semibold text-gray-900">
                        {formatCurrency(totalNetPrice)}
                      </div>
                    </td>
                    <td className="text-right px-5 py-4">
                      <div className="text-sm font-semibold text-gray-900">
                        {formatCurrency(financingOptions?.downPaymentAmount || 0)}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {financingOptions?.downPaymentPercentage || 0}%
                      </div>
                    </td>
                    <td className={`text-right px-5 py-4 ${brand === 'voge' ? 'bg-yellow-50' : 'bg-red-50'}`}>
                      <div className={`text-base font-bold ${brand === 'voge' ? 'text-yellow-700' : 'text-red-700'}`}>
                        {formatCurrency(financingOptions?.installment12M || 0)}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        /mes
                      </div>
                    </td>
                    <td className="text-right px-5 py-4">
                      <div className="text-sm font-semibold text-gray-900">
                        {formatCurrency(financingOptions?.installment18M || 0)}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        /mes
                      </div>
                    </td>
                    <td className="text-right px-5 py-4">
                      <div className="text-sm font-semibold text-gray-900">
                        {formatCurrency(financingOptions?.installment24M || 0)}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        /mes
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Terms and Conditions and Signature */}
          <div className="mt-10 grid grid-cols-2 gap-12">
            {/* Terms and Conditions - Left */}
            <div>
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
                Términos y Condiciones
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 italic text-[12px]">
                <li className="flex items-start gap-3">
                  <span className={`${config.textAccent} mt-1`}>•</span>
                  <span>Precios sujetos a cambios sin previo aviso según la tasa del mercado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`${config.textAccent} mt-1`}>•</span>
                  <span>Garantía: <span className="font-semibold">12 meses o 12,000 KM</span> en motor y transmisión (lo que ocurra primero).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`${config.textAccent} mt-1`}>•</span>
                  <span>Esta cotización no garantiza reserva de mercancía.</span>
                </li>
              </ul>
            </div>

            {/* Authorized Signature - Right */}
            <div className="flex flex-col justify-end">
              <div className="p-8 bg-white h-48 flex items-end justify-center relative">
                <img 
                  src={stampImage} 
                  alt="Stamp" 
                  className="absolute top-2 right-8 w-48 h-48 opacity-70 z-10"
                />
                <div className="text-center w-64 relative">
                  <div className="text-4xl text-blue-900 mb-1 -rotate-3" style={{ fontFamily: 'Dancing Script, Brush Script MT, cursive' }}>Alexa Tiburcio</div>
                  <div className="border-t-2 border-gray-400 pt-3">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Firma Autorizada</div>
                    <div className="text-sm font-semibold text-gray-700">Motores del Sur S.R.L.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-12 py-5 bg-gradient-to-r from-black from-70% to-white">
          <div className="flex justify-between items-center">
            {/* Contact Info - Left */}
            <div className="flex items-center gap-8 text-gray-300">
              <div className="flex items-center gap-2.5">
                <MapPinned className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-light">Av. Luperón esq. Rómulo Betancourt</span>
              </div>
              <div className="h-4 w-px bg-gray-700"></div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-light">(809) 534-1234</span>
              </div>
              <div className="h-4 w-px bg-gray-700"></div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-light">motoresdelsur.com.do</span>
              </div>
            </div>

            {/* Brand Logos - Right */}
            <div className="flex items-center gap-3">
              {/* Loncin - Red Background */}
              <div className="bg-red-700 rounded-full w-12 h-12 flex items-center justify-center p-2">
                <img 
                  src={image_7ffda72c6b306625f638691652237037550b0589} 
                  alt="Loncin" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Voge - Black Background */}
              <div className="bg-black border border-gray-700 rounded-full w-12 h-12 flex items-center justify-center p-2">
                <img 
                  src={vogeLogo} 
                  alt="Voge" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Lotus - Yellow Background */}
              <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center p-2">
                <img 
                  src={lotusLogo} 
                  alt="Lotus" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}