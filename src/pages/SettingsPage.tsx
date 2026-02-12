import React, { useState } from 'react';
import { Link } from 'react-router';
import { Plus, Edit2, Trash2, ArrowLeft, Package, DollarSign } from 'lucide-react';
import { motorcycleInventory, addMotorcycle, updateMotorcycle, deleteMotorcycle, type MotorcycleModel } from '../data/motorcycles';
import image_39761613774dd511b2e94fde30fa0eaeaecc8e64 from 'figma:asset/39761613774dd511b2e94fde30fa0eaeaecc8e64.png';

export default function SettingsPage() {
  const [inventory, setInventory] = useState<MotorcycleModel[]>([...motorcycleInventory]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<MotorcycleModel>>({});

  const startNewMotorcycle = () => {
    setFormData({
      id: `motorcycle-${Date.now()}`,
      brand: 'loncin',
      model: '',
      code: '',
      year: '2024',
      image: image_39761613774dd511b2e94fde30fa0eaeaecc8e64,
      specs: {
        engine: '',
        transmission: '',
        brakes: '',
        tankCapacity: '',
        maxSpeed: '',
        starter: '',
        cooling: '',
        battery: '',
        tires: '',
      },
      pricing: {
        unitPrice: 0,
        plateAndRegistrationFee: 4500,
      },
      availableColors: [''],
    });
    setIsAddingNew(true);
    setEditingId(null);
  };

  const startEdit = (motorcycle: MotorcycleModel) => {
    setFormData(motorcycle);
    setEditingId(motorcycle.id);
    setIsAddingNew(false);
  };

  const cancelEdit = () => {
    setFormData({});
    setIsAddingNew(false);
    setEditingId(null);
  };

  const saveMotorcycle = () => {
    if (!formData.model || !formData.code) {
      alert('Por favor complete los campos requeridos (Modelo y Código)');
      return;
    }

    if (isAddingNew) {
      addMotorcycle(formData as MotorcycleModel);
    } else if (editingId) {
      updateMotorcycle(editingId, formData);
    }

    setInventory([...motorcycleInventory]);
    cancelEdit();
  };

  const handleDelete = (id: string) => {
    if (confirm('¿Está seguro que desea eliminar esta motocicleta?')) {
      deleteMotorcycle(id);
      setInventory([...motorcycleInventory]);
    }
  };

  const updateFormField = (field: keyof MotorcycleModel, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateSpecField = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      specs: { ...(prev.specs || {}), [field]: value } as any,
    }));
  };

  const updatePricingField = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      pricing: { ...(prev.pricing || {}), [field]: value } as any,
    }));
  };

  const updateColors = (index: number, value: string) => {
    const colors = [...(formData.availableColors || [''])];
    colors[index] = value;
    setFormData(prev => ({ ...prev, availableColors: colors }));
  };

  const addColorField = () => {
    const colors = [...(formData.availableColors || []), ''];
    setFormData(prev => ({ ...prev, availableColors: colors }));
  };

  const removeColorField = (index: number) => {
    const colors = [...(formData.availableColors || [])];
    colors.splice(index, 1);
    setFormData(prev => ({ ...prev, availableColors: colors }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Volver al Formulario</span>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-semibold text-gray-900 mb-2">Inventario de Motocicletas</h1>
              <p className="text-gray-500">Administre los modelos, especificaciones y precios</p>
            </div>
            {!isAddingNew && !editingId && (
              <button
                onClick={startNewMotorcycle}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-sm"
              >
                <Plus className="w-5 h-5" />
                Agregar Motocicleta
              </button>
            )}
          </div>
        </div>

        {/* Edit/Add Form */}
        {(isAddingNew || editingId) && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {isAddingNew ? 'Nueva Motocicleta' : 'Editar Motocicleta'}
            </h2>

            {/* Basic Info */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Información Básica</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Marca</label>
                  <select
                    value={formData.brand}
                    onChange={(e) => updateFormField('brand', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="loncin">Loncin</option>
                    <option value="voge">Voge</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Modelo *</label>
                  <input
                    type="text"
                    value={formData.model || ''}
                    onChange={(e) => updateFormField('model', e.target.value)}
                    placeholder="PRUSS 200"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Código *</label>
                  <input
                    type="text"
                    value={formData.code || ''}
                    onChange={(e) => updateFormField('code', e.target.value)}
                    placeholder="LX200GY-3"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Año</label>
                  <input
                    type="text"
                    value={formData.year || ''}
                    onChange={(e) => updateFormField('year', e.target.value)}
                    placeholder="2024"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Specs */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Especificaciones</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Motor</label>
                  <input
                    type="text"
                    value={formData.specs?.engine || ''}
                    onChange={(e) => updateSpecField('engine', e.target.value)}
                    placeholder="197cc, 4T"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Transmisión</label>
                  <input
                    type="text"
                    value={formData.specs?.transmission || ''}
                    onChange={(e) => updateSpecField('transmission', e.target.value)}
                    placeholder="6 Velocidades"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Frenos</label>
                  <input
                    type="text"
                    value={formData.specs?.brakes || ''}
                    onChange={(e) => updateSpecField('brakes', e.target.value)}
                    placeholder="Disco / Disco"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Tanque</label>
                  <input
                    type="text"
                    value={formData.specs?.tankCapacity || ''}
                    onChange={(e) => updateSpecField('tankCapacity', e.target.value)}
                    placeholder="2.9 Gal"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Vel. Máx</label>
                  <input
                    type="text"
                    value={formData.specs?.maxSpeed || ''}
                    onChange={(e) => updateSpecField('maxSpeed', e.target.value)}
                    placeholder="100 KM/H"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Arranque</label>
                  <input
                    type="text"
                    value={formData.specs?.starter || ''}
                    onChange={(e) => updateSpecField('starter', e.target.value)}
                    placeholder="Eléctrico"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Refrigeración</label>
                  <input
                    type="text"
                    value={formData.specs?.cooling || ''}
                    onChange={(e) => updateSpecField('cooling', e.target.value)}
                    placeholder="Por Aire"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Batería</label>
                  <input
                    type="text"
                    value={formData.specs?.battery || ''}
                    onChange={(e) => updateSpecField('battery', e.target.value)}
                    placeholder="12V 7AH"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium text-gray-600 mb-1">Aros (Del / Tras)</label>
                <input
                  type="text"
                  value={formData.specs?.tires || ''}
                  onChange={(e) => updateSpecField('tires', e.target.value)}
                  placeholder="90/90-19 / 110/90-17"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Precios</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Precio Unitario (RD$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.pricing?.unitPrice || 0}
                    onChange={(e) => updatePricingField('unitPrice', parseFloat(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Gastos de Placa (RD$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.pricing?.plateAndRegistrationFee || 0}
                    onChange={(e) => updatePricingField('plateAndRegistrationFee', parseFloat(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700">Colores Disponibles</h3>
                <button
                  onClick={addColorField}
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                >
                  + Agregar Color
                </button>
              </div>
              <div className="space-y-2">
                {(formData.availableColors || ['']).map((color, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={color}
                      onChange={(e) => updateColors(index, e.target.value)}
                      placeholder="Ej: Rojo / Negro"
                      className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {(formData.availableColors?.length || 0) > 1 && (
                      <button
                        onClick={() => removeColorField(index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 justify-end pt-4 border-t border-gray-200">
              <button
                onClick={cancelEdit}
                className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={saveMotorcycle}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Guardar
              </button>
            </div>
          </div>
        )}

        {/* Inventory List */}
        <div className="grid grid-cols-1 gap-4">
          {inventory.map((motorcycle) => (
            <div
              key={motorcycle.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-4 flex-1">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={motorcycle.image}
                      alt={motorcycle.model}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                            motorcycle.brand === 'loncin' 
                              ? 'bg-red-100 text-red-700' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {motorcycle.brand.toUpperCase()}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {motorcycle.model}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500">
                          Código: {motorcycle.code} • Año: {motorcycle.year}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-gray-600 mb-3">
                      <div>
                        <Package className="w-3 h-3 inline mr-1 text-gray-400" />
                        {motorcycle.specs.engine}
                      </div>
                      <div>{motorcycle.specs.transmission}</div>
                      <div>{motorcycle.specs.maxSpeed}</div>
                      <div>
                        <DollarSign className="w-3 h-3 inline mr-1 text-gray-400" />
                        RD$ {motorcycle.pricing.unitPrice.toLocaleString('es-DO')}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {motorcycle.availableColors.map((color, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => startEdit(motorcycle)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(motorcycle.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {inventory.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No hay motocicletas en el inventario</p>
            <button
              onClick={startNewMotorcycle}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Agregar la primera motocicleta
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
