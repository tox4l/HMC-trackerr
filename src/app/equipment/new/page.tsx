'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { mockVehicles } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function NewEquipmentPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    type: 'engine' as string,
    vehicleId: '',
    description: '',
    location: '',
    manufacturer: '',
    model: '',
    serialNumber: '',
    maintenanceIntervalDays: '90',
    criticality: 'medium' as 'low' | 'medium' | 'high' | 'critical',
    estimatedMaintenanceCost: '600'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('New equipment data:', formData);
      alert('Equipment created successfully! (This is a demo - in production, this would save to database)');
      router.push('/equipment');
    } catch (error) {
      console.error('Error creating equipment:', error);
      alert('Failed to create equipment');
    } finally {
      setIsSubmitting(false);
    }
  };

  const equipmentTypes = [
    { value: 'engine', label: 'Engine System' },
    { value: 'transmission', label: 'Transmission System' },
    { value: 'brakes', label: 'Brake System' },
    { value: 'battery', label: 'Battery System' },
    { value: 'tires', label: 'Tires & Wheels' },
    { value: 'air_conditioning', label: 'Air Conditioning' },
    { value: 'lighting', label: 'Lighting System' },
    { value: 'navigation', label: 'Navigation Equipment' },
    { value: 'communication', label: 'Communication System' },
    { value: 'safety_equipment', label: 'Safety Equipment' },
    { value: 'medical_equipment', label: 'Medical Equipment' },
    { value: 'fuel_system', label: 'Fuel System' },
    { value: 'electrical', label: 'Electrical System' },
    { value: 'hydraulics', label: 'Hydraulic System' },
    { value: 'avionics', label: 'Avionics (Aircraft)' },
    { value: 'rotor_system', label: 'Rotor System (Helicopter)' },
    { value: 'landing_gear', label: 'Landing Gear' },
    { value: 'emergency_systems', label: 'Emergency Systems' },
    { value: 'monitoring_systems', label: 'Monitoring Systems' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link
            href="/equipment"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            Return to Equipment Inventory
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Add New Equipment</h1>
          <p className="mt-1 text-sm text-gray-600">
            Register new equipment item for maintenance tracking
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-6 w-6" />
                Equipment Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Equipment Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="e.g., Primary Engine System"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                    Equipment Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="type"
                    required
                    value={formData.type}
                    onChange={(e) => handleChange('type', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  >
                    {equipmentTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="vehicleId" className="block text-sm font-medium text-gray-700 mb-1">
                    Assigned Vehicle <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="vehicleId"
                    required
                    value={formData.vehicleId}
                    onChange={(e) => handleChange('vehicleId', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  >
                    <option value="">Select a vehicle...</option>
                    {mockVehicles.map(vehicle => (
                      <option key={vehicle.id} value={vehicle.id}>
                        {vehicle.name} - {vehicle.model}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Installation Location <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    required
                    value={formData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    placeholder="e.g., Engine Compartment"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </div>

                <div>
                  <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-700 mb-1">
                    Manufacturer
                  </label>
                  <input
                    type="text"
                    id="manufacturer"
                    value={formData.manufacturer}
                    onChange={(e) => handleChange('manufacturer', e.target.value)}
                    placeholder="e.g., Bosch, Siemens"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </div>

                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                    Model Number
                  </label>
                  <input
                    type="text"
                    id="model"
                    value={formData.model}
                    onChange={(e) => handleChange('model', e.target.value)}
                    placeholder="e.g., Model XYZ-123"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </div>

                <div>
                  <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Serial Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="serialNumber"
                    required
                    value={formData.serialNumber}
                    onChange={(e) => handleChange('serialNumber', e.target.value)}
                    placeholder="e.g., SN-2026-001"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </div>

                <div>
                  <label htmlFor="criticality" className="block text-sm font-medium text-gray-700 mb-1">
                    Priority Level <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="criticality"
                    required
                    value={formData.criticality}
                    onChange={(e) => handleChange('criticality', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                    <option value="critical">Critical Priority</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="maintenanceIntervalDays" className="block text-sm font-medium text-gray-700 mb-1">
                    Maintenance Interval (Days) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    id="maintenanceIntervalDays"
                    required
                    value={formData.maintenanceIntervalDays}
                    onChange={(e) => handleChange('maintenanceIntervalDays', e.target.value)}
                    placeholder="90"
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </div>

                <div>
                  <label htmlFor="estimatedMaintenanceCost" className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated Maintenance Cost (QAR) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    id="estimatedMaintenanceCost"
                    required
                    value={formData.estimatedMaintenanceCost}
                    onChange={(e) => handleChange('estimatedMaintenanceCost', e.target.value)}
                    placeholder="600"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Equipment Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  placeholder="Provide a detailed description of the equipment and its function..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-end gap-4">
            <Link href="/equipment">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={isSubmitting || !formData.vehicleId} className="min-w-[150px]">
              <Save className="h-4 w-4 mr-2" />
              {isSubmitting ? 'Creating Equipment...' : 'Create Equipment'}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}