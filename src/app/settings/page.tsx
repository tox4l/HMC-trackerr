'use client';

import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Shield,
  KeyRound,
  Users,
  Mail,
  Cloud,
  ArrowRight
} from 'lucide-react';

const roles = [
  {
    name: 'Admin',
    description: 'Full access to system configuration and approvals',
    permissions: ['Fleet Management', 'User Management', 'Notifications', 'Reports', 'Integrations']
  },
  {
    name: 'Maintenance Manager',
    description: 'Oversees scheduling, approvals, and compliance',
    permissions: ['Maintenance Queue', 'Reports', 'Notifications']
  },
  {
    name: 'Technician',
    description: 'Executes work orders and updates equipment status',
    permissions: ['Maintenance Queue', 'Vehicle Details']
  },
  {
    name: 'Operations',
    description: 'Views fleet status and coordinates dispatch',
    permissions: ['Fleet Dashboard', 'Notifications']
  }
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Reveal>
          <div className="mb-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">System Settings</h1>
            <p className="text-lg text-slate-400">
              Authentication, role permissions, and integration governance
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <GlassCard className="border-cyan-500/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-400">Authentication</span>
                <KeyRound className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="text-xl font-bold text-white mb-2">SSO + MFA Ready</div>
              <p className="text-sm text-slate-400 mb-6 min-h-[40px]">
                Integrate with hospital identity providers for production deployment.
              </p>
              <Button size="sm" className="w-full bg-cyan-950 text-cyan-200 border border-cyan-500/30 hover:bg-cyan-900">Configure SSO</Button>
            </GlassCard>

            <GlassCard className="border-emerald-500/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-400">Email & SMS</span>
                <Mail className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="text-xl font-bold text-white mb-2">Integrations Active</div>
              <p className="text-sm text-slate-400 mb-6 min-h-[40px]">
                Twilio & SendGrid connectors are standing by.
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 border-emerald-500/30 text-emerald-300 hover:bg-emerald-950">Email</Button>
                <Button size="sm" variant="outline" className="flex-1 border-emerald-500/30 text-emerald-300 hover:bg-emerald-950">SMS</Button>
              </div>
            </GlassCard>

            <GlassCard className="border-blue-500/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-400">Data & Storage</span>
                <Cloud className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-xl font-bold text-white mb-2">Database Connected</div>
              <p className="text-sm text-slate-400 mb-6 min-h-[40px]">
                PostgreSQL primary with daily cloud snapshots.
              </p>
              <Button size="sm" variant="outline" className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-950">View Backups</Button>
            </GlassCard>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <GlassCard>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Role Permissions Matrix</h2>
                <p className="text-sm text-slate-400">Access control policies for fleet users</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {roles.map((role, i) => (
                <Reveal key={role.name} delay={0.2 + (i * 0.1)}>
                  <div className="relative p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-lg font-bold text-white flex items-center gap-2">
                        {role.name}
                        {role.name === 'Admin' && <Badge className="bg-purple-500/20 text-purple-200 border-purple-500/30">SA</Badge>}
                      </div>
                      <Users className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-sm text-slate-300 mb-4 h-[40px]">{role.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {role.permissions.map((permission) => (
                        <div key={permission} className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/40 border border-white/5 text-xs text-slate-400">
                          <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                          {permission}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </main>
    </div>
  );
}
