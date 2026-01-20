
import { NextResponse } from 'next/server';
import { getVehicles, addVehicle } from '@/lib/db';
import { Vehicle } from '@/types';

export async function GET() {
    const vehicles = await getVehicles();
    return NextResponse.json(vehicles);
}

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Basic validation could go here
        const newVehicle: Vehicle = {
            ...data,
            // Ensure dates are parsed correctly from the client
            purchaseDate: new Date(data.purchaseDate),
            lastInspectionDate: new Date(data.lastInspectionDate),
            nextInspectionDate: new Date(data.nextInspectionDate),
            devices: [], // Start with no devices, or generate default ones
        };

        await addVehicle(newVehicle);

        return NextResponse.json({ success: true, vehicle: newVehicle });
    } catch (error) {
        console.error('Failed to add vehicle:', error);
        return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 });
    }
}
