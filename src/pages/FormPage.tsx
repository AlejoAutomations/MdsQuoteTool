import React from 'react';
import { useNavigate } from 'react-router';
import QuoteForm from '../components/QuoteForm';

export default function FormPage() {
  const navigate = useNavigate();

  const handleFormSubmit = (data: any, motorcycle: any) => {
    // Store both form data and motorcycle info in sessionStorage
    sessionStorage.setItem('quoteData', JSON.stringify({ ...data, motorcycle }));
    
    // Navigate to preview page
    navigate('/preview');
  };

  return <QuoteForm onSubmit={handleFormSubmit} />;
}