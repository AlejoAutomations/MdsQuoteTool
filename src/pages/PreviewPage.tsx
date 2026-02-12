import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import QuoteTemplate, { QuoteTemplateProps } from '../components/QuoteTemplate';
import { ArrowLeft, Download } from 'lucide-react';

export default function PreviewPage() {
  const navigate = useNavigate();
  const [quoteData, setQuoteData] = useState<QuoteTemplateProps | null>(null);

  useEffect(() => {
    // Retrieve the form data from sessionStorage
    const storedData = sessionStorage.getItem('quoteData');
    
    if (!storedData) {
      // If no data, redirect back to form
      navigate('/');
      return;
    }

    const data = JSON.parse(storedData);
    const { motorcycle } = data;
    
    // Calculate discount amount if discount is applied
    const discountAmount = data.applyDiscount 
      ? (motorcycle.pricing.unitPrice + motorcycle.pricing.plateAndRegistrationFee) * (data.discountPercentage / 100)
      : 0;
    
    // Calculate total net price
    const totalBeforeDiscount = motorcycle.pricing.unitPrice + motorcycle.pricing.plateAndRegistrationFee;
    const totalNetPrice = totalBeforeDiscount - discountAmount;
    
    // Calculate down payment amount
    const downPaymentAmount = totalNetPrice * (data.downPaymentPercentage / 100);

    // Transform form data to QuoteTemplateProps format
    const quoteProps: QuoteTemplateProps = {
      brand: motorcycle.brand,
      mode: data.mode,
      clientName: data.clientName,
      clientId: data.clientId,
      clientLocation: data.clientLocation,
      quoteNumber: data.quoteNumber,
      quoteDate: data.quoteDate,
      quoteValidUntil: data.quoteValidUntil,
      motorcycleModel: motorcycle.model,
      motorcycleCode: motorcycle.code,
      motorcycleColor: data.motorcycleColor,
      motorcycleYear: motorcycle.year,
      motorcycleImage: motorcycle.image,
      motorcycleSpecs: motorcycle.specs,
      unitPrice: motorcycle.pricing.unitPrice,
      plateAndRegistrationFee: motorcycle.pricing.plateAndRegistrationFee,
      discount: data.applyDiscount ? {
        description: `Descuento Promocional (${data.discountPercentage}%)`,
        percentage: data.discountPercentage,
        amount: discountAmount,
      } : undefined,
      totalNetPrice: totalNetPrice,
      financingOptions: data.mode === 'financing' ? {
        downPaymentPercentage: data.downPaymentPercentage,
        downPaymentAmount: downPaymentAmount,
        installment12M: data.installment12M,
        installment18M: data.installment18M,
        installment24M: data.installment24M,
      } : undefined,
    };

    setQuoteData(quoteProps);
  }, [navigate]);

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    navigate('/');
  };

  if (!quoteData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando cotización...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Action Bar - Hidden when printing */}
      <div className="bg-white shadow-md border-b border-gray-200 print:hidden sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Volver al Formulario</span>
          </button>
          
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            <Download className="w-5 h-5" />
            <span>Descargar / Imprimir</span>
          </button>
        </div>
      </div>

      {/* Quote Template */}
      <QuoteTemplate {...quoteData} />
    </div>
  );
}
