'use client';

import { useState } from 'react';
import { mockVehicles } from '@/data/mockData';
import { MaintenanceAlert, Contact } from '@/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  ArrowLeft,
  AlertTriangle,
  Clock,
  Mail,
  Phone,
  Send,
  CheckCircle,
  Bell,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function NotificationsPage() {
  const [sentNotifications, setSentNotifications] = useState<string[]>([]);
  const [selectedAlert, setSelectedAlert] = useState<MaintenanceAlert | null>(null);
  const [isSendDialogOpen, setIsSendDialogOpen] = useState(false);

  // Generate maintenance alerts from mock data (Memoize or keep as is)
  const generateAlerts = (): MaintenanceAlert[] => {
    const alerts: MaintenanceAlert[] = [];
    const now = new Date();

    mockVehicles.forEach(vehicle => {
      vehicle.devices.forEach(device => {
        const daysUntilDue = Math.ceil((device.nextMaintenanceDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        const isOverdue = daysUntilDue < 0;
        const isDueSoon = !isOverdue && daysUntilDue <= 7;

        if (isOverdue || isDueSoon) {
          const alert: MaintenanceAlert = {
            id: `${vehicle.id}-${device.id}-alert`,
            deviceId: device.id,
            vehicleId: vehicle.id,
            type: isOverdue ? 'overdue' : 'due_soon',
            message: `${device.name} on ${vehicle.name} is ${isOverdue ? 'overdue' : 'due soon'} for maintenance`,
            priority: device.criticality === 'critical' ? 'critical' :
              device.criticality === 'high' ? 'high' :
                isOverdue ? 'high' : 'medium',
            createdAt: new Date(),
            acknowledged: false
          };
          alerts.push(alert);
        }
      });
    });

    return alerts.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority]; // Sort fixed
    });
  };

  const alerts = generateAlerts();
  const overdueAlerts = alerts.filter(a => a.type === 'overdue');
  const dueSoonAlerts = alerts.filter(a => a.type === 'due_soon');

  const handleSendNotification = async (alert: MaintenanceAlert, contact: Contact, method: 'email' | 'sms') => {
    const notificationId = `${alert.id}-${method}-${contact.id}`;
    if (!sentNotifications.includes(notificationId)) {
      setSentNotifications(prev => [...prev, notificationId]);
      // Mock API call simulation
    }
  };

  const handleSendBulkNotifications = async (alert: MaintenanceAlert, contacts: Contact[], method: 'email' | 'sms') => {
    const notificationIds = contacts.map(contact => `${alert.id}-${method}-${contact.id}`);
    setSentNotifications(prev => Array.from(new Set([...prev, ...notificationIds])));
  };

  // Helper to open dialog
  const openReminderDialog = (alert: MaintenanceAlert) => {
    setSelectedAlert(alert);
    setIsSendDialogOpen(true);
  };

  const activeVehicle = selectedAlert ? mockVehicles.find(v => v.id === selectedAlert.vehicleId) : null;
  const activeDevice = selectedAlert ? activeVehicle?.devices.find(d => d.id === selectedAlert.deviceId) : null;
  const activeContacts = activeDevice?.assignedContacts || [];
  const activeEmailContacts = activeContacts.filter(c => c.email);
  const activeSmsContacts = activeContacts.filter(c => c.phone);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500/20 text-red-200 border-red-400/30';
      case 'high': return 'bg-amber-500/20 text-amber-200 border-amber-400/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30';
      default: return 'bg-slate-500/20 text-slate-200 border-slate-400/30';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Dashboard
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent mb-2">Maintenance Center</h1>
                <p className="text-lg text-slate-400">
                  Manage and dispatch maintenance alerts for fleet equipment
                </p>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-full">
                <Bell className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Summary Cards */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <GlassCard className="border-red-500/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Overdue</span>
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-1">{overdueAlerts.length}</div>
              <p className="text-sm text-red-400">Immediate attention required</p>
            </GlassCard>

            <GlassCard className="border-amber-500/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Due Soon</span>
                <Clock className="h-5 w-5 text-amber-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-1">{dueSoonAlerts.length}</div>
              <p className="text-sm text-amber-400">Within 7 days</p>
            </GlassCard>

            <GlassCard className="border-emerald-500/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Dispatched</span>
                <Send className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-1">{sentNotifications.length}</div>
              <p className="text-sm text-emerald-400">Notifications sent this session</p>
            </GlassCard>
          </div>
        </Reveal>

        {/* Alerts List */}
        <Reveal delay={0.2}>
          <div>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Active Alerts
            </h2>

            {alerts.length === 0 ? (
              <GlassCard className="p-12 text-center">
                <CheckCircle className="h-16 w-16 text-emerald-500/50 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-white mb-2">All Systems Operational</h3>
                <p className="text-slate-400">No maintenance alerts at this time.</p>
              </GlassCard>
            ) : (
              <div className="space-y-4">
                {alerts.map((alert, index) => {
                  const vehicle = mockVehicles.find(v => v.id === alert.vehicleId);
                  const device = vehicle?.devices.find(d => d.id === alert.deviceId);
                  const contacts = device?.assignedContacts || [];

                  return (
                    <Reveal key={alert.id} delay={index * 0.05}>
                      <GlassCard hoverEffect className="group">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/5">
                              {alert.type === 'overdue' ? (
                                <AlertTriangle className="h-5 w-5 text-red-400" />
                              ) : (
                                <Clock className="h-5 w-5 text-amber-400" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-3 mb-2">
                                <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                                  {device?.name} <span className="text-slate-500 font-normal">on</span> {vehicle?.name}
                                </h3>
                                <Badge className={`${getPriorityColor(alert.priority)} border backdrop-blur-md`}>
                                  {alert.priority}
                                </Badge>
                                <Badge variant="outline" className={`border ${alert.type === 'overdue' ? 'border-red-500/50 text-red-400' : 'border-amber-500/50 text-amber-400'}`}>
                                  {alert.type.replace('_', ' ')}
                                </Badge>
                              </div>

                              <p className="text-slate-300 mb-4 leading-relaxed">{alert.message}</p>

                              <div className="flex items-center gap-6 text-xs font-medium text-slate-500 uppercase tracking-wide">
                                <div className="flex items-center gap-1.5">
                                  <Users className="h-4 w-4" />
                                  <span>{contacts.length} assigned</span>
                                </div>
                                <div>
                                  Created: {alert.createdAt.toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex md:flex-col gap-2 min-w-[160px]">
                            <Button
                              onClick={() => openReminderDialog(alert)}
                              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-500/20"
                            >
                              <Send className="h-4 w-4 mr-2" />
                              Send Reminder
                            </Button>
                          </div>
                        </div>
                      </GlassCard>
                    </Reveal>
                  );
                })}
              </div>
            )}
          </div>
        </Reveal>

        {/* Render Dialog OUTSIDE the list to correct stacking context/z-index issues */}
        <Dialog open={isSendDialogOpen} onOpenChange={setIsSendDialogOpen}>
          <DialogContent className="fixed left-[50%] top-[50%] z-[100] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-zinc-950/90 backdrop-blur-2xl p-6 shadow-2xl duration-200 sm:rounded-2xl text-white">
            <DialogHeader>
              <DialogTitle>Send Maintenance Reminder</DialogTitle>
              <DialogDescription className="text-slate-400">
                Send notification for: {activeDevice?.name} on {activeVehicle?.name}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 pt-4">
              <div className="flex flex-wrap gap-2">
                {activeEmailContacts.length > 0 && selectedAlert && (
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 text-white border-none"
                    onClick={() => handleSendBulkNotifications(selectedAlert, activeEmailContacts, 'email')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email All ({activeEmailContacts.length})
                  </Button>
                )}
                {activeSmsContacts.length > 0 && selectedAlert && (
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20 text-white border-none"
                    onClick={() => handleSendBulkNotifications(selectedAlert, activeSmsContacts, 'sms')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    SMS All ({activeSmsContacts.length})
                  </Button>
                )}
              </div>
              <div>
                <h4 className="font-medium mb-3 text-slate-200">Assigned Contacts:</h4>
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {activeContacts.map((contact) => (
                    <div key={contact.id} className="flex items-center justify-between p-3 bg-black/40 border border-white/5 rounded-lg">
                      <div>
                        <p className="font-medium text-white">{contact.name}</p>
                        <p className="text-xs text-slate-400">{contact.role}</p>
                      </div>
                      <div className="flex gap-2">
                        {contact.email && selectedAlert && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="hover:bg-white/10 hover:text-white text-slate-400"
                            onClick={() => handleSendNotification(selectedAlert, contact, 'email')}
                            disabled={sentNotifications.includes(`${selectedAlert.id}-email-${contact.id}`)}
                          >
                            <Mail className="h-4 w-4 mr-1" />
                            {sentNotifications.includes(`${selectedAlert.id}-email-${contact.id}`) ? 'Sent' : 'Email'}
                          </Button>
                        )}
                        {contact.phone && selectedAlert && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="hover:bg-white/10 hover:text-white text-slate-400"
                            onClick={() => handleSendNotification(selectedAlert, contact, 'sms')}
                            disabled={sentNotifications.includes(`${selectedAlert.id}-sms-${contact.id}`)}
                          >
                            <Phone className="h-4 w-4 mr-1" />
                            {sentNotifications.includes(`${selectedAlert.id}-sms-${contact.id}`) ? 'Sent' : 'SMS'}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setIsSendDialogOpen(false)} className="text-slate-400 hover:text-white">
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}