"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Activity,
  Truck,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Clock,
  Wrench,
  Search
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { mockVehicles } from "@/data/mockData"; // We'll use this to populate real data
import { Badge } from "@/components/ui/badge";

export default function Home() {
  // 1. Calculate Summary Stats
  const totalVehicles = mockVehicles.length;
  const criticalIssues = mockVehicles.filter(v => v.healthStatus === 'Critical').length;
  const activeAlerts = mockVehicles.reduce((acc, v) => acc + (v.devices.filter(d => d.status === 'Warning' || d.status === 'Critical').length), 0);
  const operationalRate = Math.round(((totalVehicles - criticalIssues) / totalVehicles) * 100);

  // 2. Get Recent Critical Items (Simulated "Critical" Feed)
  const criticalVehicles = mockVehicles
    .filter(v => v.healthStatus === 'Critical' || v.healthStatus === 'Attention')
    .slice(0, 3); // Top 3

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">

      {/* Dashboard Header */}
      <section className="pt-8 pb-8 px-6 border-b border-white/5 bg-gradient-to-b from-blue-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-2">
                <ShieldCheck className="w-3 h-3" />
                <span>HMC Fleet Command</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Operational Overview
              </h1>
              <p className="text-slate-400 mt-1">Real-time fleet status and maintenance intelligence.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/reports">
                <Button variant="outline" className="h-10 border-white/10 hover:bg-white/5">
                  View Reports
                </Button>
              </Link>
              <Link href="/notifications">
                <Button className="h-10 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Maintenance Alerts
                  {activeAlerts > 0 && <span className="ml-2 bg-white/20 px-1.5 rounded-full text-xs">{activeAlerts}</span>}
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCard
              label="Total Fleet"
              value={totalVehicles.toString()}
              icon={<Truck className="w-4 h-4 text-blue-400" />}
              trend="Active"
              trendColor="text-blue-400"
            />
            <StatsCard
              label="Operational Rate"
              value={`${operationalRate}%`}
              icon={<Activity className="w-4 h-4 text-emerald-400" />}
              trend="Optimal"
              trendColor="text-emerald-400"
            />
            <StatsCard
              label="Critical Issues"
              value={criticalIssues.toString()}
              icon={<AlertTriangle className="w-4 h-4 text-red-500" />}
              trend="Requires Action"
              trendColor="text-red-500"
              alert
            />
            <StatsCard
              label="Pending Maintenance"
              value={activeAlerts.toString()}
              icon={<Wrench className="w-4 h-4 text-amber-500" />}
              trend="Scheduled"
              trendColor="text-amber-500"
            />
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column: Priority Attention (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Priority Action Required
            </h2>
            <Link href="/vehicles?filter=critical" className="text-sm text-blue-400 hover:text-blue-300 flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {criticalVehicles.length > 0 ? (
            <div className="grid gap-4">
              {criticalVehicles.map((vehicle, i) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="p-0 overflow-hidden hover:border-red-500/30 transition-colors group">
                    <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
                          <Truck className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-lg">{vehicle.name}</h3>
                            <Badge className="bg-red-500/20 text-red-200 border-red-500/30">Critical</Badge>
                          </div>
                          <p className="text-sm text-slate-400">
                            {vehicle.type} • {vehicle.devices.filter(d => d.status === 'Critical').length} Critical Components
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right hidden md:block mr-4">
                          <div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Next Service</div>
                          <div className="text-sm font-medium text-white">ASAP</div>
                        </div>
                        <Link href={`/vehicle/${vehicle.id}`}>
                          <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white border-none">
                            Inspect
                          </Button>
                        </Link>
                      </div>
                    </div>
                    {/* Issues Bar */}
                    <div className="bg-red-500/5 px-5 py-2 border-t border-red-500/10 flex items-center gap-2 text-xs text-red-300">
                      <AlertTriangle className="w-3 h-3" />
                      <span>Detected Issues: {vehicle.devices.filter(d => d.status !== 'Good').map(d => d.name).join(', ')}</span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          ) : (
            <GlassCard className="p-8 text-center flex flex-col items-center justify-center">
              <CheckCircle className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-lg font-medium">All Systems Operational</h3>
              <p className="text-slate-400 max-w-sm">There are no critical issues reported across the fleet at this time.</p>
            </GlassCard>
          )}

          {/* Quick Actions / Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <QuickActionCard title="Browse Fleet" icon={<Truck />} href="/vehicles" glow="blue" />
            <QuickActionCard title="Equipment" icon={<Wrench />} href="/equipment" glow="amber" />
            <QuickActionCard title="Maintenance" icon={<Clock />} href="/notifications" glow="emerald" />
          </div>
        </div>

        {/* Right Column: Recent Activity / Status (1/3 width) */}
        <div className="space-y-6">
          <GlassCard className="h-full">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-400" />
              System Status
            </h3>

            <div className="space-y-4">
              <StatusRow label="Database Connection" status="Operational" />
              <StatusRow label="GPS Tracking API" status="Operational" />
              <StatusRow label="Notification Service" status="Operational" />
              <StatusRow label="Maintenance Scheduler" status="Processing" color="text-amber-400" />
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <h3 className="font-bold text-sm text-slate-400 uppercase tracking-wider mb-4">Recent Logs</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2"></div>
                    <div>
                      <p className="text-slate-300">Vehicle check completed for <span className="text-white font-medium">Ambulance {i + 4}</span></p>
                      <p className="text-xs text-slate-500">2 mins ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="ghost" className="w-full mt-6 text-slate-400 hover:text-white text-sm">
              View All Logs
            </Button>
          </GlassCard>
        </div>

      </div>
    </div>
  );
}

function StatsCard({ label, value, icon, trend, trendColor, alert = false }: any) {
  return (
    <GlassCard className={`p-4 flex flex-col justify-between h-full ${alert ? 'border-red-500/30 bg-red-500/5' : ''}`}>
      <div className="flex items-start justify-between mb-2">
        <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">{label}</span>
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className={`text-xs font-medium ${trendColor} mt-1`}>{trend}</div>
      </div>
    </GlassCard>
  );
}

function QuickActionCard({ title, icon, href, glow }: any) {
  const glowColors: any = {
    blue: "hover:bg-blue-500/10 hover:border-blue-500/30",
    amber: "hover:bg-amber-500/10 hover:border-amber-500/30",
    emerald: "hover:bg-emerald-500/10 hover:border-emerald-500/30",
  };

  return (
    <Link href={href}>
      <GlassCard className={`p-4 h-full flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:-translate-y-1 ${glowColors[glow]}`}>
        <div className="p-3 rounded-full bg-white/5 border border-white/10">
          {icon}
        </div>
        <span className="font-medium text-sm">{title}</span>
      </GlassCard>
    </Link>
  );
}

function StatusRow({ label, status, color = "text-emerald-400" }: any) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-slate-400">{label}</span>
      <span className={`font-medium ${color}`}>{status}</span>
    </div>
  );
}
