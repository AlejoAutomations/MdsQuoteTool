import image_39761613774dd511b2e94fde30fa0eaeaecc8e64 from 'figma:asset/39761613774dd511b2e94fde30fa0eaeaecc8e64.png';

export interface MotorcycleModel {
  id: string;
  brand: 'loncin' | 'voge';
  model: string;
  code: string;
  year: string;
  image: string;
  specs: {
    engine: string;
    transmission: string;
    brakes: string;
    tankCapacity: string;
    maxSpeed: string;
    starter: string;
    cooling: string;
    battery: string;
    tires: string;
  };
  pricing: {
    unitPrice: number;
    plateAndRegistrationFee: number;
  };
  availableColors: string[];
}

// Sample motorcycle data - can be managed through Settings page
export let motorcycleInventory: MotorcycleModel[] = [
  {
    id: 'loncin-pruss-200',
    brand: 'loncin',
    model: 'PRUSS 200',
    code: 'LX200GY-3',
    year: '2024',
    image: image_39761613774dd511b2e94fde30fa0eaeaecc8e64,
    specs: {
      engine: '197cc, 4T',
      transmission: '6 Velocidades',
      brakes: 'Disco / Disco',
      tankCapacity: '2.9 Gal',
      maxSpeed: '100 KM/H',
      starter: 'Eléctrico',
      cooling: 'Por Aire',
      battery: '12V 7AH',
      tires: '90/90-19 / 110/90-17',
    },
    pricing: {
      unitPrice: 125775.00,
      plateAndRegistrationFee: 4500.00,
    },
    availableColors: ['Rojo / Negro', 'Azul / Negro', 'Negro'],
  },
  {
    id: 'loncin-adventure-250',
    brand: 'loncin',
    model: 'ADVENTURE 250',
    code: 'LX250GY-5',
    year: '2024',
    image: image_39761613774dd511b2e94fde30fa0eaeaecc8e64,
    specs: {
      engine: '250cc, 4T',
      transmission: '6 Velocidades',
      brakes: 'Disco / Disco',
      tankCapacity: '3.5 Gal',
      maxSpeed: '120 KM/H',
      starter: 'Eléctrico',
      cooling: 'Por Líquido',
      battery: '12V 9AH',
      tires: '100/90-19 / 120/90-17',
    },
    pricing: {
      unitPrice: 165000.00,
      plateAndRegistrationFee: 4500.00,
    },
    availableColors: ['Rojo', 'Negro', 'Blanco'],
  },
  {
    id: 'voge-sr4-400',
    brand: 'voge',
    model: 'SR4 400',
    code: 'VG400',
    year: '2024',
    image: image_39761613774dd511b2e94fde30fa0eaeaecc8e64,
    specs: {
      engine: '400cc, 4T',
      transmission: '6 Velocidades',
      brakes: 'Disco / Disco ABS',
      tankCapacity: '4.2 Gal',
      maxSpeed: '150 KM/H',
      starter: 'Eléctrico',
      cooling: 'Por Líquido',
      battery: '12V 10AH',
      tires: '110/70-17 / 140/70-17',
    },
    pricing: {
      unitPrice: 285000.00,
      plateAndRegistrationFee: 4500.00,
    },
    availableColors: ['Negro / Amarillo', 'Gris / Amarillo', 'Blanco / Amarillo'],
  },
];

// Helper functions for managing inventory
export const getMotorcycleById = (id: string): MotorcycleModel | undefined => {
  return motorcycleInventory.find(m => m.id === id);
};

export const getMotorcyclesByBrand = (brand: 'loncin' | 'voge'): MotorcycleModel[] => {
  return motorcycleInventory.filter(m => m.brand === brand);
};

export const addMotorcycle = (motorcycle: MotorcycleModel): void => {
  motorcycleInventory.push(motorcycle);
};

export const updateMotorcycle = (id: string, updates: Partial<MotorcycleModel>): boolean => {
  const index = motorcycleInventory.findIndex(m => m.id === id);
  if (index !== -1) {
    motorcycleInventory[index] = { ...motorcycleInventory[index], ...updates };
    return true;
  }
  return false;
};

export const deleteMotorcycle = (id: string): boolean => {
  const index = motorcycleInventory.findIndex(m => m.id === id);
  if (index !== -1) {
    motorcycleInventory.splice(index, 1);
    return true;
  }
  return false;
};
