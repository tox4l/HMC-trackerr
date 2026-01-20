'use client';

import { useState } from 'react';
import { Vehicle, MaintenanceRecord } from '@/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MaintenanceTracker } from '@/components/MaintenanceTracker';
import {
  ArrowLeft,
  Car,
  Ambulance,
  Helicopter,
  MapPin,
  Calendar,
  Users,
  Wrench,
  AlertTriangle,
  Clock,
  Activity,
  CheckCircle2,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';

interface VehicleDetailsClientProps {
  vehicle: Vehicle;
}

export function VehicleDetailsClient({ vehicle }: VehicleDetailsClientProps) {
  const [currentVehicle, setCurrentVehicle] = useState<Vehicle>(vehicle);

  const handleMaintenanceCompleted = (deviceId: string, record: Omit<MaintenanceRecord, 'id'>) => {
    setCurrentVehicle(prevVehicle => {
      return {
        ...prevVehicle,
        devices: prevVehicle.devices.map(device => {
          if (device.id === deviceId) {
            const nextDueDate = record.nextDueDate || new Date(Date.now() + device.maintenanceIntervalDays * 24 * 60 * 60 * 1000);
            const isOverdue = nextDueDate < new Date();
            const isDueSoon = !isOverdue && (nextDueDate.getTime() - Date.now()) < (7 * 24 * 60 * 60 * 1000);

            let status: 'due' | 'overdue' | 'upcoming' | 'completed' = 'upcoming';
            if (isOverdue) status = 'overdue';
            else if (isDueSoon) status = 'due';
            else status = 'completed';

            return {
              ...device,
              lastMaintenanceDate: record.date,
              nextMaintenanceDate: nextDueDate,
              status
            };
          }
          return device;
        })
      };
    });
  };

  // Calculate device statistics
  const deviceStats = currentVehicle.devices.reduce((acc, device) => {
    acc[device.status] = (acc[device.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const overdueCount = deviceStats.overdue || 0;
  const dueCount = deviceStats.due || 0;
  const totalDevices = currentVehicle.devices.length;
  // Prevent division by zero
  const healthPercentage = totalDevices > 0
    ? Math.round(((totalDevices - overdueCount - dueCount) / totalDevices) * 100)
    : 100;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'overdue': return 'text-red-200 bg-red-500/20 border-red-400/30';
      case 'due': return 'text-amber-200 bg-amber-500/20 border-amber-400/30';
      case 'upcoming': return 'text-cyan-200 bg-cyan-500/20 border-cyan-400/30';
      case 'completed': return 'text-emerald-200 bg-emerald-500/20 border-emerald-400/30';
      default: return 'text-slate-200 bg-slate-500/20 border-slate-400/30';
    }
  };

  const getVehicleStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30';
      case 'maintenance': return 'bg-amber-500/20 text-amber-200 border-amber-400/30';
      case 'out_of_service': return 'bg-red-500/20 text-red-200 border-red-400/30';
      default: return 'bg-slate-500/20 text-slate-200 border-slate-400/30';
    }
  }

  const getCriticalityColor = (criticality: string) => {
    switch (criticality) {
      case 'critical': return 'text-red-200 bg-red-500/20 border-red-400/30';
      case 'high': return 'text-amber-200 bg-amber-500/20 border-amber-400/30';
      case 'medium': return 'text-yellow-200 bg-yellow-500/20 border-yellow-400/30';
      case 'low': return 'text-emerald-200 bg-emerald-500/20 border-emerald-400/30';
      default: return 'text-slate-200 bg-slate-500/20 border-slate-400/30';
    }
  };

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'car': return <Car className="h-8 w-8" />;
      case 'ambulance': return <Ambulance className="h-8 w-8" />;
      case 'helicopter': return <Helicopter className="h-8 w-8" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">

      {/* Hero Section */}
      <section className="h-[50vh] relative w-full overflow-hidden bg-black">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black opacity-50" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
          <div className="max-w-7xl mx-auto w-full">
            <Link href="/vehicles" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Fleet</span>
            </Link>

            <Reveal>
              <div className="flex items-center gap-4 mb-4">
                <Badge className={`backdrop-blur-md border ${getVehicleStatusBadge(currentVehicle.status)}`}>
                  {currentVehicle.status.replace('_', ' ')}
                </Badge>
                <Badge variant="outline" className="border-white/10 text-slate-400 bg-white/5 uppercase tracking-wider text-xs">
                  {currentVehicle.type}
                </Badge>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">{currentVehicle.name}</h1>
              <div className="flex items-center gap-6 text-lg text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  {currentVehicle.model}
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {currentVehicle.location}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative z-20">

        {/* Key Metrics Grid */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <GlassCard className="flex flex-col justify-between h-32">
              <div className="flex justify-between items-start">
                <span className="text-sm font-medium text-slate-400">Fleet Health</span>
                <Activity className={`h-5 w-5 ${healthPercentage > 80 ? 'text-emerald-400' : 'text-amber-400'}`} />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">{healthPercentage}%</div>
                <Progress value={healthPercentage} className="h-1.5 bg-white/10" />
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col justify-between h-32">
              <div className="flex justify-between items-start">
                <span className="text-sm font-medium text-slate-400">Total Items</span>
                <Wrench className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">{totalDevices}</div>
                <p className="text-xs text-slate-500">Monitored components</p>
              </div>
            </GlassCard>

            <GlassCard className={`flex flex-col justify-between h-32 ${overdueCount > 0 ? 'border-red-500/30 bg-red-500/5' : ''}`}>
              <div className="flex justify-between items-start">
                <span className="text-sm font-medium text-slate-400">Overdue</span>
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">{overdueCount}</div>
                <p className="text-xs text-slate-500">Immediate action required</p>
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col justify-between h-32">
              <div className="flex justify-between items-start">
                <span className="text-sm font-medium text-slate-400">Due Soon</span>
                <Clock className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">{dueCount}</div>
                <p className="text-xs text-slate-500">Within 7 days</p>
              </div>
            </GlassCard>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">

            <Reveal delay={0.3}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Equipment Status</h2>
                <Badge variant="outline" className="text-xs border-white/10 text-slate-400">
                  {totalDevices} Items
                </Badge>
              </div>

              <div className="space-y-4">
                {currentVehicle.devices.map((device, i) => (
                  <Reveal key={device.id} delay={i * 0.05}>
                    <GlassCard hoverEffect className="group h-full flex flex-col">
                      <div className="flex flex-col md:flex-row gap-6 h-full">
                        <div className="flex-1 space-y-4 flex flex-col">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{device.name}</h3>
                                <Badge className={`text-[10px] px-1.5 py-0 h-5 ${getCriticalityColor(device.criticality)} border`}>
                                  {device.criticality}
                                </Badge>
                              </div>
                              <p className="text-sm text-slate-400">{device.type.replace('_', ' ')} • {device.location}</p>
                            </div>
                            <Badge className={`${getStatusColor(device.status)} border whitespace-nowrap`}>
                              {device.status.replace('_', ' ')}
                            </Badge>
                          </div>

                          <p className="text-sm text-slate-300 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5 flex-grow">
                            {device.description}
                          </p>

                          <div className="grid grid-cols-2 gap-4 text-xs text-slate-400 mt-auto">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>Last: {device.lastMaintenanceDate?.toLocaleDateString() || 'Never'}</span>
                            </div>
                            <div className={`flex items-center gap-1.5 font-medium ${device.status === 'overdue' ? 'text-red-300' : device.status === 'due' ? 'text-amber-300' : 'text-slate-400'}`}>
                              <Clock className="h-3.5 w-3.5" />
                              <span>Next: {device.nextMaintenanceDate.toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-72 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 h-full">
                          <MaintenanceTracker
                            device={device}
                            onMaintenanceCompleted={handleMaintenanceCompleted}
                          />
                        </div>
                      </div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            <Reveal delay={0.4}>
              <GlassCard className="sticky top-24">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  Assigned Personnel
                </h3>

                <div className="space-y-4">
                  {currentVehicle.assignedContacts.map((contact) => (
                    <div key={contact.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-cyan-100 font-semibold bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-500 shadow-lg shadow-blue-500/20">
                        {contact.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-white">{contact.name}</p>
                        <p className="text-xs text-blue-300">{contact.role}</p>
                        <div className="flex items-center gap-3 mt-1.5">
                          {contact.email && <Mail className="h-3.5 w-3.5 text-slate-500 hover:text-white cursor-pointer transition-colors" />}
                          {contact.phone && <Phone className="h-3.5 w-3.5 text-slate-500 hover:text-white cursor-pointer transition-colors" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Specifications</h4>
                  <div className="space-y-3 text-sm">
                    {currentVehicle.mileage && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Mileage</span>
                        <span className="text-white font-mono">{currentVehicle.mileage.toLocaleString()} km</span>
                      </div>
                    )}
                    {currentVehicle.flightHours && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">Flight Hours</span>
                        <span className="text-white font-mono">{currentVehicle.flightHours.toLocaleString()} hrs</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-500">Inspection</span>
                      <span className="text-white">{currentVehicle.nextInspectionDate.toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>

      </main>
    </div>
  );
}
