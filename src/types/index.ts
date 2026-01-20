export type VehicleType = 'car' | 'ambulance' | 'helicopter';

export type MaintenanceStatus = 'due' | 'overdue' | 'upcoming' | 'completed';

export type DeviceType =
  | 'engine'
  | 'transmission'
  | 'brakes'
  | 'battery'
  | 'tires'
  | 'air_conditioning'
  | 'lighting'
  | 'navigation'
  | 'communication'
  | 'safety_equipment'
  | 'medical_equipment'
  | 'fuel_system'
  | 'electrical'
  | 'hydraulics'
  | 'avionics'
  | 'rotor_system'
  | 'landing_gear'
  | 'emergency_systems'
  | 'monitoring_systems';

export interface Contact {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  role: string; // e.g., 'technician', 'supervisor', 'maintenance_manager'
}

export interface MaintenanceRecord {
  id: string;
  deviceId: string;
  vehicleId: string;
  date: Date;
  type: 'preventive' | 'corrective' | 'inspection';
  description: string;
  technician: string;
  cost?: number;
  notes?: string;
  nextDueDate?: Date;
}

export interface Device {
  id: string;
  vehicleId: string;
  name: string;
  type: DeviceType;
  description: string;
  maintenanceIntervalDays: number; // how often maintenance is needed
  lastMaintenanceDate?: Date;
  nextMaintenanceDate: Date;
  status: MaintenanceStatus;
  serialNumber?: string;
  manufacturer?: string;
  model?: string;
  location: string; // where on the vehicle it's located
  criticality: 'low' | 'medium' | 'high' | 'critical';
  assignedContacts: Contact[];
}

export interface Vehicle {
  id: string;
  name: string;
  type: VehicleType;
  model: string;
  licensePlate?: string;
  registrationNumber: string;
  status: 'active' | 'maintenance' | 'out_of_service';
  location: string;
  assignedContacts: Contact[];
  devices: Device[];
  purchaseDate: Date;
  lastInspectionDate?: Date;
  nextInspectionDate: Date;
  mileage?: number; // for cars/ambulances
  flightHours?: number; // for helicopters
  notes?: string;
}

export interface NotificationSettings {
  emailEnabled: boolean;
  smsEnabled: boolean;
  reminderDaysBefore: number; // days before due date to send reminder
  escalationContacts: Contact[];
}

export interface MaintenanceAlert {
  id: string;
  deviceId: string;
  vehicleId: string;
  type: 'overdue' | 'due_soon' | 'completed';
  message: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  createdAt: Date;
  acknowledged: boolean;
  acknowledgedBy?: string;
  acknowledgedAt?: Date;
}