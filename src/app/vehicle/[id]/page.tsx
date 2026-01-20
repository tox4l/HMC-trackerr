import { notFound } from 'next/navigation';
import { getVehicles } from '@/lib/db';
import { EquipmentMaintenanceClient } from '@/components/EquipmentMaintenanceClient';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  AlertTriangle,
  Clock,
  Package,
  Building,
  FileText,
  MapPin,
  User,
  CheckCircle2,
  Wrench,
  Activity,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';


export default async function EquipmentPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const vehicles = await getVehicles();

  // Find equipment across all vehicles
  let equipment = null;
  let parentVehicle = null;

  for (const vehicle of vehicles) {
    const found = vehicle.devices.find(d => d.id === resolvedParams.id);
    if (found) {
      equipment = found;
      parentVehicle = vehicle;
      break;
    }
  }

  if (!equipment || !parentVehicle) {
    notFound();
  }

  const now = new Date();
  const isOverdue = equipment.nextMaintenanceDate < now;
  const daysUntilDue = Math.ceil((equipment.nextMaintenanceDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  // Estimate maintenance cost based on criticality
  const estimatedCost = equipment.criticality === 'critical' ? 1500 :
    equipment.criticality === 'high' ? 1000 :
      equipment.criticality === 'medium' ? 600 : 300;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'overdue': return 'bg-red-500/20 text-red-200 border-red-400/30';
      case 'due': return 'bg-amber-500/20 text-amber-200 border-amber-400/30';
      case 'upcoming': return 'bg-cyan-500/20 text-cyan-200 border-cyan-400/30';
      case 'completed': return 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30';
      default: return 'bg-slate-500/20 text-slate-200 border-slate-400/30';
    }
  };

  const getCriticalityColor = (criticality: string) => {
    switch (criticality) {
      case 'critical': return 'bg-red-500/20 text-red-200 border-red-400/30';
      case 'high': return 'bg-amber-500/20 text-amber-200 border-amber-400/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30';
      case 'low': return 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30';
      default: return 'bg-slate-500/20 text-slate-200 border-slate-400/30';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Reveal>
          {/* Header */}
          <div className="mb-8">
            <Link
              href={`/vehicle/${parentVehicle.id}`}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 bg-white/5 px-4 py-2 rounded-full border border-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Vehicle
            </Link>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold tracking-tight text-white">{equipment.name}</h1>
                  <Badge variant="outline" className="text-slate-400 border-white/10">{equipment.type.replace(/_/g, ' ')}</Badge>
                </div>
                <p className="text-lg text-slate-300 flex items-center gap-2">
                  <Package className="h-4 w-4 text-blue-400" />
                  ID: <span className="font-mono text-slate-400">{equipment.id}</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={`${getStatusColor(equipment.status)} border px-3 py-1 text-sm`}>
                  {equipment.status.replace('_', ' ')}
                </Badge>
                <Badge className={`${getCriticalityColor(equipment.criticality)} border px-3 py-1 text-sm`}>
                  {equipment.criticality} Priority
                </Badge>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Reveal delay={0.1}>
              <GlassCard className="p-8">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-400" />
                  Technical Specifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                  <SpecItem label="Manufacturer" value={equipment.manufacturer} icon={<Building className="h-4 w-4" />} />
                  <SpecItem label="Model Number" value={equipment.model} icon={<FileText className="h-4 w-4" />} />
                  <SpecItem label="Serial Number" value={equipment.serialNumber} icon={<Package className="h-4 w-4" />} monospace />
                  <SpecItem label="Location" value={equipment.location} icon={<MapPin className="h-4 w-4" />} />
                  <SpecItem label="Maintenance Interval" value={`${equipment.maintenanceIntervalDays} days`} icon={<Clock className="h-4 w-4" />} />
                  <SpecItem label="Assigned To" value={equipment.assignedContacts[0]?.name} icon={<User className="h-4 w-4" />} />
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-sm font-medium text-slate-400 mb-2">Description</h3>
                  <p className="text-slate-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                    {equipment.description}
                  </p>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="text-xl font-bold text-white mb-4 mt-8">Parent Vehicle</h3>
              <GlassCard hoverEffect className="group cursor-pointer">
                <Link href={`/vehicle/${parentVehicle.id}`} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Attached to</div>
                    <div className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{parentVehicle.name}</div>
                    <div className="text-slate-500 font-mono mt-1">{parentVehicle.licensePlate}</div>
                  </div>
                  <ArrowLeft className="h-6 w-6 text-slate-500 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GlassCard>
            </Reveal>
          </div>



          {/* Sidebar */}
          <div className="space-y-8">
            <Reveal delay={0.3}>
              <EquipmentMaintenanceClient initialDevice={equipment} vehicle={parentVehicle} />
            </Reveal>

            {equipment.assignedContacts[0] && (
              <Reveal delay={0.4}>
                <GlassCard>
                  <h3 className="text-lg font-bold text-white mb-4">Primary Contact</h3>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                      {equipment.assignedContacts[0].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{equipment.assignedContacts[0].name}</p>
                      <p className="text-sm text-slate-400">{equipment.assignedContacts[0].role}</p>
                      <div className="mt-3 space-y-1">
                        {equipment.assignedContacts[0].email && (
                          <div className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                            <Mail className="h-3.5 w-3.5" />
                            {equipment.assignedContacts[0].email}
                          </div>
                        )}
                        {equipment.assignedContacts[0].phone && (
                          <div className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                            <Phone className="h-3.5 w-3.5" />
                            {equipment.assignedContacts[0].phone}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function SpecItem({ label, value, icon, monospace = false }: any) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-400 flex items-center gap-2 mb-1">
        {icon}
        {label}
      </label>
      <p className={`text-white text-lg ${monospace ? 'font-mono tracking-wide' : ''}`}>
        {value || 'N/A'}
      </p>
    </div>
  )
}
