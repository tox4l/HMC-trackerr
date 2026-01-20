'use client';

import { mockMaintenanceRecords, mockVehicles } from '@/data/mockData';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/badge';
import {
  Activity,
  Wrench,
  DollarSign,
  Calendar,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export default function ReportsPage() {
  const totalRecords = mockMaintenanceRecords.length;
  const totalCost = mockMaintenanceRecords.reduce((acc, record) => acc + (record.cost || 0), 0);
  const totalVehicles = mockVehicles.length;

  const maintenanceByType = mockMaintenanceRecords.reduce((acc, record) => {
    acc[record.type] = (acc[record.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const monthlyActivity = months.map((month, index) => {
    const value = Math.max(2, Math.round((totalRecords + index * 3) % 12));
    return { month, value };
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Reveal>
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Dashboard
            </Link>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">Operational Reports</h1>
            <p className="text-lg text-slate-400">
              Analytics, maintenance trends, and cost summaries
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <GlassCard className="border-blue-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-400">Total Vehicles</span>
                <Activity className="h-4 w-4 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white">{totalVehicles}</div>
              <p className="text-xs text-blue-400 mt-1">Fleet size</p>
            </GlassCard>

            <GlassCard className="border-emerald-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-400">Work Orders</span>
                <Wrench className="h-4 w-4 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-white">{totalRecords}</div>
              <p className="text-xs text-emerald-400 mt-1">Maintenance records</p>
            </GlassCard>

            <GlassCard className="border-amber-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-400">Maintenance Cost</span>
                <DollarSign className="h-4 w-4 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-white">QAR {totalCost.toLocaleString()}</div>
              <p className="text-xs text-amber-400 mt-1">Year-to-date spend</p>
            </GlassCard>

            <GlassCard className="border-indigo-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-400">Report Cycle</span>
                <Calendar className="h-4 w-4 text-indigo-400" />
              </div>
              <div className="text-3xl font-bold text-white">Monthly</div>
              <p className="text-xs text-indigo-400 mt-1">Current reporting period</p>
            </GlassCard>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Reveal delay={0.2}>
            <GlassCard className="h-full">
              <h2 className="text-xl font-bold text-white mb-6">Maintenance Activity (Last 6 Months)</h2>
              <div className="space-y-6">
                {monthlyActivity.map((entry, index) => (
                  <div key={entry.month} className="flex items-center gap-4 group">
                    <span className="w-8 text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{entry.month}</span>
                    <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 relative"
                        style={{ width: `${entry.value * 8}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors" />
                      </div>
                    </div>
                    <span className="text-sm font-mono text-slate-300 w-12 text-right">{entry.value} jobs</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.3}>
            <GlassCard className="h-full">
              <h2 className="text-xl font-bold text-white mb-6">Work Orders by Type</h2>
              <div className="space-y-4">
                {Object.entries(maintenanceByType).map(([type, count]) => (
                  <div key={type} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${type === 'preventive' ? 'bg-emerald-500' : type === 'corrective' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                      <span className="text-sm font-medium text-slate-200 capitalize">{type}</span>
                    </div>
                    <Badge variant="secondary" className="bg-black/50 text-white border-white/10">{count} records</Badge>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <GlassCard>
            <h2 className="text-xl font-bold text-white mb-4">Executive Summary</h2>
            <div className="text-slate-300 leading-relaxed max-w-4xl">
              Maintenance activity remains on schedule with a strong focus on preventive work.
              Overdue items are actively managed through automated alerts and dispatch workflows.
              Full operational export and compliance reporting can be integrated with the hospital ERP in the next phase.
            </div>
          </GlassCard>
        </Reveal>
      </main>
    </div>
  );
}
