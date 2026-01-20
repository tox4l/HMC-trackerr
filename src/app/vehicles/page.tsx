
import { getVehicles } from '@/lib/db';
import { VehicleCard } from '@/components/VehicleCard';
import { Reveal } from '@/components/ui/Reveal';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default async function VehiclesPage() {
  const vehicles = await getVehicles();

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto space-y-8 pt-12">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Fleet Composition</h1>
              <p className="text-slate-400 mt-1">Manage and track all {vehicles.length} fleet vehicles</p>
            </div>
            <Link
              href="/vehicles/new"
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-black bg-white hover:bg-slate-200 transition-all shadow-lg shadow-white/10 group"
            >
              <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform" />
              Add Vehicle
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {vehicles.map((vehicle, index) => (
            <Reveal key={vehicle.id} delay={index * 0.05}>
              <VehicleCard vehicle={vehicle} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
