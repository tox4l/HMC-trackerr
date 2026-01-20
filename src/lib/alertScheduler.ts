import { mockVehicles } from '@/data/mockData';
import { MaintenanceAlert } from '@/types';

export interface AlertSchedule {
  deviceId: string;
  vehicleId: string;
  equipmentName: string;
  vehicleName: string;
  daysUntilDue: number;
  nextMaintenanceDate: Date;
  contacts: Array<{ email?: string; phone?: string; name: string }>;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

/**
 * Generate maintenance alerts for all equipment
 * This function would be called by a cron job/scheduled task
 */
export function generateMaintenanceAlerts(): MaintenanceAlert[] {
  const alerts: MaintenanceAlert[] = [];
  const now = new Date();

  mockVehicles.forEach(vehicle => {
    vehicle.devices.forEach(device => {
      const daysUntilDue = Math.ceil((device.nextMaintenanceDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

      // Generate alert if overdue
      if (daysUntilDue < 0) {
        alerts.push({
          id: `alert-${device.id}-overdue`,
          deviceId: device.id,
          vehicleId: vehicle.id,
          type: 'overdue',
          message: `URGENT: Maintenance for ${device.name} on ${vehicle.name} is ${Math.abs(daysUntilDue)} days overdue.`,
          priority: device.criticality === 'critical' ? 'critical' : 'high',
          createdAt: now,
          acknowledged: false
        });
      }
      // Generate alert if due within 7 days
      else if (daysUntilDue <= 7 && daysUntilDue >= 0) {
        alerts.push({
          id: `alert-${device.id}-due-soon`,
          deviceId: device.id,
          vehicleId: vehicle.id,
          type: 'due_soon',
          message: `Maintenance for ${device.name} on ${vehicle.name} is due in ${daysUntilDue} days (${device.nextMaintenanceDate.toLocaleDateString()}).`,
          priority: device.criticality === 'critical' ? 'high' : device.criticality === 'high' ? 'medium' : 'low',
          createdAt: now,
          acknowledged: false
        });
      }
    });
  });

  return alerts;
}

/**
 * Schedule alerts for upcoming mainten ance
 * Returns a list of equipment that needs alerts sent
 */
export function getScheduledAlerts(): AlertSchedule[] {
  const scheduled: AlertSchedule[] = [];
  const now = new Date();

  mockVehicles.forEach(vehicle => {
    vehicle.devices.forEach(device => {
      const daysUntilDue = Math.ceil((device.nextMaintenanceDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

      // Schedule alerts for:
      // - Overdue items (every day)
      // - Items due in 7 days
      // - Items due in 3 days
      // - Items due in 1 day
      if (daysUntilDue < 0 || daysUntilDue === 7 || daysUntilDue === 3 || daysUntilDue === 1) {
        scheduled.push({
          deviceId: device.id,
          vehicleId: vehicle.id,
          equipmentName: device.name,
          vehicleName: vehicle.name,
          daysUntilDue,
          nextMaintenanceDate: device.nextMaintenanceDate,
          contacts: device.assignedContacts.map(c => ({
            email: c.email,
            phone: c.phone,
            name: c.name
          })),
          priority: device.criticality
        });
      }
    });
  });

  return scheduled;
}

/**
 * Send automated alerts
 * This would be called by a scheduled task (e.g., daily at 8 AM)
 */
export async function sendAutomatedAlerts(): Promise<{ sent: number; failed: number }> {
  const scheduledAlerts = getScheduledAlerts();
  let sent = 0;
  let failed = 0;

  for (const alert of scheduledAlerts) {
    try {
      // Prepare message
      const message = alert.daysUntilDue < 0
        ? `URGENT: Maintenance for ${alert.equipmentName} on ${alert.vehicleName} is ${Math.abs(alert.daysUntilDue)} days overdue. Please schedule immediately.`
        : `Reminder: Maintenance for ${alert.equipmentName} on ${alert.vehicleName} is due ${alert.daysUntilDue === 0 ? 'TODAY' : `in ${alert.daysUntilDue} day(s)`} on ${alert.nextMaintenanceDate.toLocaleDateString()}.`;

      // Send to each contact
      for (const contact of alert.contacts) {
        if (contact.email || contact.phone) {
          await fetch('/api/notifications/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contactName: contact.name,
              email: contact.email,
              phone: contact.phone,
              message,
              subject: `Equipment Maintenance ${alert.daysUntilDue < 0 ? 'OVERDUE' : 'Reminder'} - ${alert.equipmentName}`,
              sendEmail: !!contact.email,
              sendSMS: !!contact.phone
            })
          });
          sent++;
        }
      }
    } catch (error) {
      console.error(`Failed to send alert for ${alert.equipmentName}:`, error);
      failed++;
    }
  }

  return { sent, failed };
}

/**
 * Get alert statistics
 */
export function getAlertStatistics() {
  const alerts = generateMaintenanceAlerts();

  return {
    total: alerts.length,
    overdue: alerts.filter(a => a.type === 'overdue').length,
    dueSoon: alerts.filter(a => a.type === 'due_soon').length,
    critical: alerts.filter(a => a.priority === 'critical').length,
    high: alerts.filter(a => a.priority === 'high').length,
    acknowledged: alerts.filter(a => a.acknowledged).length,
    unacknowledged: alerts.filter(a => !a.acknowledged).length
  };
}