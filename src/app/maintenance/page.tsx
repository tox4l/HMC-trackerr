'use client';

import { useMemo, useState } from 'react';
import { mockVehicles } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  AlertTriangle,
  Clock,
  Calendar,
  Wrench,
  Search,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

type StatusFilter = 'all' | 'overdue' | 'due';
type CriticalityFilter = 'all' | 'critical' | 'high' | 'medium' | 'low';

export default function MaintenancePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [criticalityFilter, setCriticalityFilter] = useState<CriticalityFilter>('all');

  const allDevices = useMemo(() => {
    return mockVehicles.flatMap(vehicle =>
      vehicle.devices.map(device => {
        const daysUntilDue = Math.ceil((device.nextMaintenanceDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
        return {
          ...device,
          vehicleName: vehicle.name,
          vehicleId: vehicle.id,
          daysUntilDue
        };
      })
    );
  }, []);

  const maintenanceDevices = useMemo(() => {
    return allDevices
      .filter(device => device.status === 'overdue' || device.status === 'due')
      .filter(device => {
        const matchesSearch = searchTerm.trim() === '' ||
          device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          device.vehicleName.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === 'all' || device.status === statusFilter;
        const matchesCriticality = criticalityFilter === 'all' || device.criticality === criticalityFilter;

        return matchesSearch && matchesStatus && matchesCriticality;
      })
      .sort((a, b) => a.nextMaintenanceDate.getTime() - b.nextMaintenanceDate.getTime());
  }, [allDevices, searchTerm, statusFilter, criticalityFilter]);

  const overdueCount = allDevices.filter(device => device.status === 'overdue').length;
  const dueSoonCount = allDevices.filter(device => device.status === 'due').length;

  return (
    <div className="min-h-screen fade-in">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Maintenance Queue</h1>
            <p className="mt-1 text-sm text-slate-300">
              All equipment requiring maintenance with due dates and priority levels
            </p>
          </div>
          <Link href="/reports">
            <Button variant="outline" size="sm">
              View Reports <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-200">Overdue</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-200">{overdueCount}</div>
              <p className="text-xs text-slate-300">Immediate action required</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-200">Due Soon</CardTitle>
              <Clock className="h-4 w-4 text-amber-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-200">{dueSoonCount}</div>
              <p className="text-xs text-slate-300">Within 7 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-200">Total Queue</CardTitle>
              <Wrench className="h-4 w-4 text-cyan-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{maintenanceDevices.length}</div>
              <p className="text-xs text-slate-300">Devices requiring service</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search equipment or vehicle..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-white/20 rounded-md text-sm bg-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
                className="w-full px-4 py-2 border border-white/20 rounded-md text-sm bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              >
                <option value="all">All Status</option>
                <option value="overdue">Overdue</option>
                <option value="due">Due Soon</option>
              </select>

              <select
                value={criticalityFilter}
                onChange={(e) => setCriticalityFilter(e.target.value as CriticalityFilter)}
                className="w-full px-4 py-2 border border-white/20 rounded-md text-sm bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              >
                <option value="all">All Criticality</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {maintenanceDevices.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center text-slate-300">
              No devices match your filters.
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {maintenanceDevices.map((device) => (
              <Card key={device.id} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{device.name}</h3>
                      <p className="text-sm text-slate-300">{device.vehicleName}</p>
                    </div>
                    <Badge className={device.status === 'overdue'
                      ? 'bg-red-500/20 text-red-200 border border-red-400/30'
                      : 'bg-amber-500/20 text-amber-200 border border-amber-400/30'}>
                      {device.status === 'overdue' ? 'Overdue' : 'Due Soon'}
                    </Badge>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Due: {device.nextMaintenanceDate.toLocaleDateString()}</span>
                    </div>
                    <div>
                      {device.daysUntilDue < 0
                        ? `Overdue by ${Math.abs(device.daysUntilDue)} days`
                        : `Due in ${device.daysUntilDue} days`}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <Badge variant="secondary">{device.criticality} priority</Badge>
                    <Link href={`/vehicle/${device.vehicleId}`}>
                      <Button size="sm" variant="outline">
                        View Vehicle
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
