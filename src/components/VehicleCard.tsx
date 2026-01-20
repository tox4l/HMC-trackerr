'use client';

import { Vehicle, MaintenanceStatus } from '@/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Car,
  Ambulance,
  Helicopter,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Users
} from 'lucide-react';
import Link from 'next/link';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  // Calculate maintenance status summary
  const deviceStats = vehicle.devices.reduce((acc, device) => {
    acc[device.status] = (acc[device.status] || 0) + 1;
    return acc;
  }, {} as Record<MaintenanceStatus, number>);

  const totalDevices = vehicle.devices.length;
  const overdueCount = deviceStats.overdue || 0;
  const dueCount = deviceStats.due || 0;
  const upcomingCount = deviceStats.upcoming || 0;
  const completedCount = deviceStats.completed || 0;

  const healthPercentage = totalDevices > 0 ? Math.round(((totalDevices - overdueCount - dueCount) / totalDevices) * 100) : 100;

  const getStatusColor = (status: Vehicle['status']) => {
    switch (status) {
      case 'active': return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30';
      case 'maintenance': return 'bg-amber-500/20 text-amber-300 border-amber-400/30';
      case 'out_of_service': return 'bg-red-500/20 text-red-300 border-red-400/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-400/30';
    }
  };

  const getVehicleIcon = (type: Vehicle['type']) => {
    switch (type) {
      case 'car': return <Car className="h-6 w-6" />;
      case 'ambulance': return <Ambulance className="h-6 w-6" />;
      case 'helicopter': return <Helicopter className="h-6 w-6" />;
    }
  };

  const getHealthColor = (percentage: number) => {
    if (percentage >= 80) return 'text-emerald-400';
    if (percentage >= 60) return 'text-amber-400';
    return 'text-red-400';
  };

  return (
    <Reveal fullHeight>
      <Link href={`/vehicle/${vehicle.id}`} className="block h-full">
        <GlassCard hoverEffect className="h-full flex flex-col justify-between group min-h-[320px]">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                  {getVehicleIcon(vehicle.type)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{vehicle.name}</h3>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{vehicle.model}</p>
                </div>
              </div>
              <Badge className={`${getStatusColor(vehicle.status)} border backdrop-blur-md`}>
                {vehicle.status.replace('_', ' ')}
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-400">Fleet Health</span>
                <span className={`font-bold ${getHealthColor(healthPercentage)}`}>
                  {healthPercentage}%
                </span>
              </div>
              <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ${healthPercentage > 80 ? 'bg-emerald-500' : healthPercentage > 50 ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                  style={{ width: `${healthPercentage}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-medium">
              <div className={`p-2.5 rounded-lg flex items-center gap-2 border transition-colors ${overdueCount > 0 ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-white/5 border-white/5 text-slate-500'}`}>
                <AlertTriangle className="h-4 w-4" />
                <span>{overdueCount} Overdue</span>
              </div>
              <div className={`p-2.5 rounded-lg flex items-center gap-2 border transition-colors ${dueCount > 0 ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-white/5 border-white/5 text-slate-500'}`}>
                <Clock className="h-4 w-4" />
                <span>{dueCount} Due Soon</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              <span className="truncate max-w-[100px]">{vehicle.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-3.5 w-3.5" />
              <span>{vehicle.assignedContacts.length} Assigned</span>
            </div>
          </div>
        </GlassCard>
      </Link>
    </Reveal>
  );
}
