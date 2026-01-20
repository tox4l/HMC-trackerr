'use client';

import { useState, useEffect } from 'react';
import { Device, MaintenanceRecord } from '@/types';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  CheckCircle,
  Wrench,
  Calendar,
  FileText
} from 'lucide-react';

interface MaintenanceTrackerProps {
  device: Device;
  onMaintenanceCompleted: (deviceId: string, record: Omit<MaintenanceRecord, 'id'>) => void;
}

export function MaintenanceTracker({ device, onMaintenanceCompleted }: MaintenanceTrackerProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [technician, setTechnician] = useState(device.assignedContacts[0]?.name || '');
  const [cost, setCost] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
  }, []);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const record: Omit<MaintenanceRecord, 'id'> = {
      deviceId: device.id,
      vehicleId: device.vehicleId,
      date: new Date(),
      type: 'preventive',
      description: `Maintenance completed for ${device.name}`,
      technician,
      cost: cost ? parseFloat(cost) : undefined,
      notes: notes || undefined,
      nextDueDate: new Date(Date.now() + device.maintenanceIntervalDays * 24 * 60 * 60 * 1000)
    };

    onMaintenanceCompleted(device.id, record);
    setIsDialogOpen(false);
    setIsSubmitting(false);
    setCost('');
    setNotes('');
  };

  const isOverdue = now ? device.nextMaintenanceDate < now : false;
  const daysUntilDue = now ? Math.ceil((device.nextMaintenanceDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) : 0;

  return (
    <div className="space-y-4">
      {/* Status and Action */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-200">
          {device.status === 'completed' ? (
            <CheckCircle className="h-5 w-5 text-emerald-300" />
          ) : isOverdue ? (
            <Wrench className="h-5 w-5 text-red-300" />
          ) : (
            <Calendar className="h-5 w-5 text-amber-300" />
          )}
          <span className="font-medium">
            {device.status === 'completed' ? 'Up to date' :
              isOverdue ? `Overdue by ${Math.abs(daysUntilDue)} days` :
                `Due in ${daysUntilDue} days`}
          </span>
        </div>

        {device.status !== 'completed' && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-emerald-400/90 hover:bg-emerald-400 text-slate-900">
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark Completed
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] glass-card text-white">
              <DialogHeader>
                <DialogTitle className="text-white">Complete Maintenance</DialogTitle>
                <DialogDescription>
                  Record maintenance completion for {device.name}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="technician" className="text-right text-sm font-medium text-slate-200">
                    Technician
                  </label>
                  <input
                    id="technician"
                    value={technician}
                    onChange={(e) => setTechnician(e.target.value)}
                    className="col-span-3 flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                    placeholder="Enter technician name"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="cost" className="text-right text-sm font-medium text-slate-200">
                    Cost (QAR)
                  </label>
                  <input
                    id="cost"
                    type="number"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    className="col-span-3 flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                    placeholder="Optional"
                  />
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <label htmlFor="notes" className="text-right text-sm font-medium text-slate-200 pt-2">
                    Notes
                  </label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="col-span-3 bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                    placeholder="Maintenance notes..."
                    rows={3}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !technician.trim()}
                  className="bg-emerald-400/90 hover:bg-emerald-400 text-slate-900"
                >
                  {isSubmitting ? 'Recording...' : 'Complete Maintenance'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Maintenance History */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-slate-200 flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Maintenance History
        </h4>
        <div className="text-sm text-slate-300">
          {device.lastMaintenanceDate ? (
            <div className="flex items-center gap-2">
              <Calendar className="h-3 w-3" />
              <span>Last maintenance: {device.lastMaintenanceDate.toLocaleDateString()}</span>
            </div>
          ) : (
            <span className="text-slate-400 italic">No maintenance history available</span>
          )}
        </div>
      </div>
    </div>
  );
}
