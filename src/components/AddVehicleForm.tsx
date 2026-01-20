
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button'; // Assuming this exists or use standard button
import { Car, AlertTriangle, Check } from 'lucide-react';
import { VehicleType } from '@/types';

export function AddVehicleForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        type: 'car' as VehicleType,
        model: '',
        licensePlate: '',
        registrationNumber: '',
        location: '',
        status: 'active',
        notes: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Create defaults
            const payload = {
                ...formData,
                id: `${formData.type}-${Date.now()}`,
                purchaseDate: new Date(),
                lastInspectionDate: new Date(),
                nextInspectionDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000), // 6 months
                assignedContacts: [], // Can add logic to assign later
                devices: [] // Can add logic to generate templates here
            };

            const res = await fetch('/api/vehicles', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error('Failed to add vehicle');

            const data = await res.json();

            // Send Email Notification to Fleet Manager (Mock Contact)
            await fetch('/api/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: 'fleet.manager@hamad.qa',
                    subject: `New Vehicle Registered: ${payload.name}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; color: #333;">
                            <h1 style="color: #0071e3;">New Vehicle Added to Fleet</h1>
                            <p>A new vehicle has been registered in the system.</p>
                            <ul>
                                <li><strong>Name:</strong> ${payload.name}</li>
                                <li><strong>Type:</strong> ${payload.type}</li>
                                <li><strong>Model:</strong> ${payload.model}</li>
                                <li><strong>License Plate:</strong> ${payload.licensePlate}</li>
                            </ul>
                            <p>Please review the vehicle specification in the <a href="${window.location.origin}/vehicle/${data.vehicle.id}">dashboard</a>.</p>
                        </div>
                    `
                })
            });

            router.push(`/vehicle/${data.vehicle.id}`);
            router.refresh();

        } catch (error) {
            console.error(error);
            alert('Error adding vehicle');
        } finally {
            setLoading(false);
        }
    };

    return (
        <GlassCard className="max-w-2xl mx-auto p-8">
            <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">Register New Vehicle</h2>
                <p className="text-slate-400">Add a new unit to the fleet management system</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Vehicle Name</label>
                        <input
                            required
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="e.g. Charlie Response 5"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Type</label>
                        <select
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all [&>option]:bg-slate-900"
                            value={formData.type}
                            onChange={e => setFormData({ ...formData, type: e.target.value as VehicleType })}
                        >
                            <option value="car">Response Car</option>
                            <option value="ambulance">Ambulance</option>
                            <option value="helicopter">Helicopter</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Model</label>
                        <input
                            required
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="e.g. Toyota Prado"
                            value={formData.model}
                            onChange={e => setFormData({ ...formData, model: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">License Plate</label>
                        <input
                            required
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-mono"
                            placeholder="HMC-XXX"
                            value={formData.licensePlate}
                            onChange={e => setFormData({ ...formData, licensePlate: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Location</label>
                        <input
                            required
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="e.g. Emergency Bay 1"
                            value={formData.location}
                            onChange={e => setFormData({ ...formData, location: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Registration No.</label>
                        <input
                            required
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all font-mono"
                            placeholder="REG-XXX"
                            value={formData.registrationNumber}
                            onChange={e => setFormData({ ...formData, registrationNumber: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Notes</label>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all h-24"
                        placeholder="Operational notes..."
                        value={formData.notes}
                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    />
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Registering...' : (
                        <>
                            <Check className="h-5 w-5" />
                            Register Vehicle
                        </>
                    )}
                </button>
            </form>
        </GlassCard>
    );
}
