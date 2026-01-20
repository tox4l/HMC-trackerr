'use client';

import { useState, useEffect } from 'react';
import { mockVehicles } from '@/data/mockData';
import { Device } from '@/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Wrench,
  Search,
  Filter,
  AlertTriangle,
  Calendar,
  DollarSign,
  MapPin,
  ArrowRight,
  LayoutGrid,
  List,
  AlignJustify
} from 'lucide-react';
import Link from 'next/link';

type ViewMode = 'grid' | 'list' | 'condensed';

export default function EquipmentListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterCriticality, setFilterCriticality] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('list'); // Default to list for better info density
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  // Collect all equipment
  const allEquipment: (Device & { vehicleName: string; vehicleId: string })[] = [];
  mockVehicles.forEach(vehicle => {
    vehicle.devices.forEach(device => {
      allEquipment.push({
        ...device,
        vehicleName: vehicle.name,
        vehicleId: vehicle.id
      });
    });
  });

  // Filter equipment
  const filteredEquipment = allEquipment.filter(equipment => {
    const matchesSearch = equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      equipment.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      equipment.vehicleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (equipment.serialNumber && equipment.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesType = filterType === 'all' || equipment.type === filterType;
    const matchesStatus = filterStatus === 'all' || equipment.status === filterStatus;
    const matchesCriticality = filterCriticality === 'all' || equipment.criticality === filterCriticality;

    return matchesSearch && matchesType && matchesStatus && matchesCriticality;
  });

  // Unique types
  const uniqueTypes = Array.from(new Set(allEquipment.map(e => e.type)));

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'overdue': return 'bg-red-500/20 text-red-200 border-red-400/30';
      case 'due': return 'bg-amber-500/20 text-amber-200 border-amber-400/30';
      case 'upcoming': return 'bg-blue-500/20 text-blue-200 border-blue-400/30';
      case 'completed': return 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30';
      default: return 'bg-slate-500/20 text-slate-200 border-slate-400/30';
    }
  };

  const getCriticalityBadge = (criticality: string) => {
    switch (criticality) {
      case 'critical': return 'bg-red-500/20 text-red-200 border-red-400/30';
      case 'high': return 'bg-amber-500/20 text-amber-200 border-amber-400/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30';
      case 'low': return 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30';
      default: return 'bg-slate-500/20 text-slate-200 border-slate-400/30';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Reveal>
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-2">Equipment Inventory</h1>
              <p className="text-slate-400 text-lg">
                Complete list of all equipment across all vehicles <span className="text-slate-600 mx-2">|</span> {allEquipment.length} items
              </p>
            </div>
          </div>
        </Reveal>

        {/* Filters & View Toggle */}
        <Reveal delay={0.1}>
          <GlassCard className="mb-8 overflow-visible z-20 relative">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Filter className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold text-white">Filter & View</h2>
              </div>

              <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/10">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  title="Grid View"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  title="List View"
                >
                  <List className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('condensed')}
                  className={`p-2 rounded-md transition-all ${viewMode === 'condensed' ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  title="Condensed View"
                >
                  <AlignJustify className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Search</label>
                <div className="relative group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Type</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-black transition-all appearance-none cursor-pointer"
                >
                  <option value="all">All Types</option>
                  {uniqueTypes.map(type => (
                    <option key={type} value={type}>{type.replace(/_/g, ' ').toUpperCase()}</option>
                  ))}
                </select>
              </div>
              {/* Other filters kept same logic */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-black transition-all appearance-none cursor-pointer"
                >
                  <option value="all">All Statuses</option>
                  <option value="overdue">Overdue</option>
                  <option value="due">Due Soon</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Up to Date</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Priority</label>
                <select
                  value={filterCriticality}
                  onChange={(e) => setFilterCriticality(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-black transition-all appearance-none cursor-pointer"
                >
                  <option value="all">All Priorities</option>
                  <option value="critical">Critical</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
          </GlassCard>
        </Reveal>

        {/* Equipment List */}
        {filteredEquipment.length === 0 ? (
          <Reveal>
            <GlassCard className="p-12 text-center text-slate-500">
              <Wrench className="h-16 w-16 mx-auto mb-6 opacity-20" />
              <h3 className="text-xl font-medium text-white mb-2">No Equipment Found</h3>
              <p>Try adjusting your search or filters to see results.</p>
            </GlassCard>
          </Reveal>
        ) : (
          <div className={`${viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'flex flex-col gap-4'
            }`}>
            {filteredEquipment.map((equipment, index) => {
              const isOverdue = now ? equipment.nextMaintenanceDate < now : false;

              return (
                <Reveal key={equipment.id} delay={(index % 10) * 0.05} fullHeight>
                  <Link href={`/equipment/${equipment.id}`} className="block h-full">
                    <GlassCard hoverEffect className={`group cursor-pointer h-full ${viewMode === 'condensed' ? 'p-4 flex items-center gap-4' : ''
                      }`}>
                      {viewMode === 'condensed' ? (
                        <>
                          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                            <Wrench className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                            <h3 className="text-sm font-bold text-white truncate">{equipment.name}</h3>
                            <span className="text-xs text-slate-400 truncate">{equipment.vehicleName}</span>
                            <Badge className={`${getStatusBadge(equipment.status)} border text-[10px] w-fit`}>
                              {equipment.status.replace('_', ' ')}
                            </Badge>
                            <span className={`text-xs font-mono font-medium ${isOverdue ? 'text-red-400' : 'text-slate-400'}`}>
                              {equipment.nextMaintenanceDate.toLocaleDateString()}
                            </span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-blue-400" />
                        </>
                      ) : (
                        // List & Grid Views
                        <div className="flex flex-col h-full justify-between">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent text-blue-400 border border-blue-500/10">
                                <Wrench className="h-5 w-5" />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{equipment.name}</h3>
                                <p className="text-xs text-slate-500">{equipment.type.replace(/_/g, ' ').toUpperCase()}</p>
                              </div>
                            </div>
                            <div className={`flex ${viewMode === 'grid' ? 'flex-col items-end gap-2' : 'gap-2'}`}>
                              <Badge className={`${getStatusBadge(equipment.status)} border backdrop-blur-md`}>
                                {equipment.status.replace('_', ' ')}
                              </Badge>
                              <Badge className={`${getCriticalityBadge(equipment.criticality)} border`}>
                                {equipment.criticality}
                              </Badge>
                            </div>
                          </div>

                          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 gap-3' : 'grid-cols-3 gap-6'} text-sm text-slate-400 mt-2 p-3 bg-white/5 rounded-lg border border-white/5`}>
                            <div>
                              <label className="text-[10px] font-medium text-slate-500 uppercase">Vehicle</label>
                              <div className="text-slate-200 truncate">{equipment.vehicleName}</div>
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-slate-500 uppercase">Location</label>
                              <div className="text-slate-200 truncate">{equipment.location}</div>
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-slate-500 uppercase">Due</label>
                              <div className={`font-mono ${isOverdue ? 'text-red-400' : 'text-slate-200'}`}>
                                {equipment.nextMaintenanceDate.toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </GlassCard>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}