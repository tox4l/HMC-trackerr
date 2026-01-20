
import fs from 'fs';
import path from 'path';
import { Vehicle } from '@/types';
import { mockVehicles } from '@/data/mockData';

const DB_PATH = path.join(process.cwd(), 'src', 'data', 'db.json');

// Ensure the directory exists
function ensureDbDefined() {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

export async function getVehicles(): Promise<Vehicle[]> {
    ensureDbDefined();

    if (!fs.existsSync(DB_PATH)) {
        // Seed with mock data if no DB exists
        await saveVehicles(mockVehicles);
        return mockVehicles;
    }

    try {
        const fileContent = fs.readFileSync(DB_PATH, 'utf-8');
        const data = JSON.parse(fileContent);

        // Revive dates (JSON doesn't store Date objects)
        return data.map((v: any) => ({
            ...v,
            purchaseDate: new Date(v.purchaseDate),
            lastInspectionDate: new Date(v.lastInspectionDate),
            nextInspectionDate: new Date(v.nextInspectionDate),
            devices: v.devices.map((d: any) => ({
                ...d,
                lastMaintenanceDate: d.lastMaintenanceDate ? new Date(d.lastMaintenanceDate) : undefined,
                nextMaintenanceDate: new Date(d.nextMaintenanceDate)
            }))
        }));
    } catch (error) {
        console.error('Error reading DB:', error);
        return mockVehicles;
    }
}

export async function saveVehicles(vehicles: Vehicle[]): Promise<void> {
    ensureDbDefined();
    fs.writeFileSync(DB_PATH, JSON.stringify(vehicles, null, 2), 'utf-8');
}

export async function addVehicle(vehicle: Vehicle): Promise<void> {
    const vehicles = await getVehicles();
    vehicles.push(vehicle);
    await saveVehicles(vehicles);
}

export async function getVehicleById(id: string): Promise<Vehicle | undefined> {
    const vehicles = await getVehicles();
    return vehicles.find(v => v.id === id);
}
