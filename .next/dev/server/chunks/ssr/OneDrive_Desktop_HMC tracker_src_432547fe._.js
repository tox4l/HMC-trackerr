module.exports = [
"[project]/OneDrive/Desktop/HMC tracker/src/data/mockData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockContacts",
    ()=>mockContacts,
    "mockMaintenanceRecords",
    ()=>mockMaintenanceRecords,
    "mockVehicles",
    ()=>mockVehicles
]);
const mockContacts = [
    {
        id: '1',
        name: 'Ahmed Al-Mansoori',
        email: 'ahmed.almansoori@hamad.qa',
        phone: '+974-555-0101',
        role: 'Senior Maintenance Technician'
    },
    {
        id: '2',
        name: 'Fatima Al-Khalifa',
        email: 'fatima.alkhalifa@hamad.qa',
        phone: '+974-555-0102',
        role: 'Vehicle Maintenance Supervisor'
    },
    {
        id: '3',
        name: 'Mohammed Al-Thani',
        email: 'mohammed.althani@hamad.qa',
        phone: '+974-555-0103',
        role: 'Aviation Maintenance Specialist'
    },
    {
        id: '4',
        name: 'Sara Al-Sulaiti',
        email: 'sara.alsulaiti@hamad.qa',
        phone: '+974-555-0104',
        role: 'Medical Equipment Technician'
    },
    {
        id: '5',
        name: 'Khalid Al-Mahmoud',
        email: 'khalid.almahmoud@hamad.qa',
        phone: '+974-555-0105',
        role: 'Fleet Manager'
    }
];
// Device templates for different vehicle types
const carDeviceTemplates = [
    {
        name: 'Engine Oil System',
        type: 'engine',
        intervalDays: 90,
        criticality: 'high',
        location: 'Engine Bay'
    },
    {
        name: 'Transmission Fluid',
        type: 'transmission',
        intervalDays: 180,
        criticality: 'high',
        location: 'Under Vehicle'
    },
    {
        name: 'Brake Pads',
        type: 'brakes',
        intervalDays: 120,
        criticality: 'critical',
        location: 'Wheel Assemblies'
    },
    {
        name: 'Brake Fluid',
        type: 'brakes',
        intervalDays: 365,
        criticality: 'high',
        location: 'Brake Reservoir'
    },
    {
        name: 'Battery',
        type: 'battery',
        intervalDays: 180,
        criticality: 'medium',
        location: 'Engine Bay'
    },
    {
        name: 'Air Filter',
        type: 'engine',
        intervalDays: 150,
        criticality: 'medium',
        location: 'Engine Bay'
    },
    {
        name: 'Cabin Air Filter',
        type: 'air_conditioning',
        intervalDays: 180,
        criticality: 'low',
        location: 'Under Dashboard'
    },
    {
        name: 'Tires',
        type: 'tires',
        intervalDays: 180,
        criticality: 'high',
        location: 'All Wheels'
    },
    {
        name: 'Cooling System',
        type: 'engine',
        intervalDays: 365,
        criticality: 'high',
        location: 'Engine Bay'
    },
    {
        name: 'Fuel Filter',
        type: 'fuel_system',
        intervalDays: 300,
        criticality: 'medium',
        location: 'Under Vehicle'
    },
    {
        name: 'Spark Plugs',
        type: 'engine',
        intervalDays: 600,
        criticality: 'medium',
        location: 'Engine Bay'
    },
    {
        name: 'Timing Belt',
        type: 'engine',
        intervalDays: 1200,
        criticality: 'critical',
        location: 'Engine Bay'
    },
    {
        name: 'Suspension System',
        type: 'landing_gear',
        intervalDays: 365,
        criticality: 'high',
        location: 'Wheel Assemblies'
    },
    {
        name: 'Exhaust System',
        type: 'engine',
        intervalDays: 365,
        criticality: 'medium',
        location: 'Under Vehicle'
    },
    {
        name: 'Electrical System',
        type: 'electrical',
        intervalDays: 180,
        criticality: 'medium',
        location: 'Various'
    },
    {
        name: 'Lighting System',
        type: 'lighting',
        intervalDays: 180,
        criticality: 'low',
        location: 'Exterior/Interior'
    },
    {
        name: 'Wiper System',
        type: 'electrical',
        intervalDays: 180,
        criticality: 'low',
        location: 'Windshield'
    },
    {
        name: 'Air Conditioning',
        type: 'air_conditioning',
        intervalDays: 180,
        criticality: 'medium',
        location: 'Engine Bay'
    },
    {
        name: 'GPS/Navigation',
        type: 'navigation',
        intervalDays: 365,
        criticality: 'low',
        location: 'Dashboard'
    },
    {
        name: 'Radio/Communication',
        type: 'communication',
        intervalDays: 180,
        criticality: 'low',
        location: 'Dashboard'
    }
];
const ambulanceDeviceTemplates = [
    {
        name: 'Engine System',
        type: 'engine',
        intervalDays: 90,
        criticality: 'critical',
        location: 'Engine Compartment'
    },
    {
        name: 'Transmission',
        type: 'transmission',
        intervalDays: 180,
        criticality: 'high',
        location: 'Under Vehicle'
    },
    {
        name: 'Brake System',
        type: 'brakes',
        intervalDays: 120,
        criticality: 'critical',
        location: 'Wheel Assemblies'
    },
    {
        name: 'Emergency Lighting',
        type: 'lighting',
        intervalDays: 90,
        criticality: 'critical',
        location: 'Roof/Exterior'
    },
    {
        name: 'Siren System',
        type: 'communication',
        intervalDays: 180,
        criticality: 'critical',
        location: 'Roof/Dashboard'
    },
    {
        name: 'Medical Oxygen System',
        type: 'medical_equipment',
        intervalDays: 180,
        criticality: 'critical',
        location: 'Patient Compartment'
    },
    {
        name: 'Defibrillator',
        type: 'medical_equipment',
        intervalDays: 365,
        criticality: 'critical',
        location: 'Patient Compartment'
    },
    {
        name: 'Patient Monitor',
        type: 'monitoring_systems',
        intervalDays: 180,
        criticality: 'critical',
        location: 'Patient Compartment'
    },
    {
        name: 'Ventilator',
        type: 'medical_equipment',
        intervalDays: 90,
        criticality: 'critical',
        location: 'Patient Compartment'
    },
    {
        name: 'Stretcher System',
        type: 'safety_equipment',
        intervalDays: 365,
        criticality: 'high',
        location: 'Patient Compartment'
    },
    {
        name: 'Air Conditioning',
        type: 'air_conditioning',
        intervalDays: 90,
        criticality: 'high',
        location: 'Cabin'
    },
    {
        name: 'Battery System',
        type: 'battery',
        intervalDays: 180,
        criticality: 'high',
        location: 'Engine Compartment'
    },
    {
        name: 'Tires',
        type: 'tires',
        intervalDays: 120,
        criticality: 'high',
        location: 'All Wheels'
    },
    {
        name: 'Fuel System',
        type: 'fuel_system',
        intervalDays: 180,
        criticality: 'medium',
        location: 'Under Vehicle'
    },
    {
        name: 'Electrical System',
        type: 'electrical',
        intervalDays: 180,
        criticality: 'high',
        location: 'Various'
    },
    {
        name: 'GPS Tracking',
        type: 'navigation',
        intervalDays: 365,
        criticality: 'medium',
        location: 'Dashboard'
    },
    {
        name: 'Radio Communication',
        type: 'communication',
        intervalDays: 90,
        criticality: 'critical',
        location: 'Dashboard'
    },
    {
        name: 'Emergency Power Supply',
        type: 'electrical',
        intervalDays: 180,
        criticality: 'critical',
        location: 'Under Floor'
    },
    {
        name: 'Safety Equipment',
        type: 'safety_equipment',
        intervalDays: 180,
        criticality: 'high',
        location: 'Various'
    },
    {
        name: 'Cooling System',
        type: 'engine',
        intervalDays: 180,
        criticality: 'medium',
        location: 'Engine Compartment'
    }
];
const helicopterDeviceTemplates = [
    {
        name: 'Main Rotor System',
        type: 'rotor_system',
        intervalDays: 90,
        criticality: 'critical',
        location: 'Main Rotor'
    },
    {
        name: 'Tail Rotor System',
        type: 'rotor_system',
        intervalDays: 90,
        criticality: 'critical',
        location: 'Tail Rotor'
    },
    {
        name: 'Engine System',
        type: 'engine',
        intervalDays: 50,
        criticality: 'critical',
        location: 'Engine Compartment'
    },
    {
        name: 'Transmission System',
        type: 'transmission',
        intervalDays: 180,
        criticality: 'critical',
        location: 'Transmission Bay'
    },
    {
        name: 'Avionics System',
        type: 'avionics',
        intervalDays: 180,
        criticality: 'critical',
        location: 'Cockpit'
    },
    {
        name: 'Hydraulic System',
        type: 'hydraulics',
        intervalDays: 90,
        criticality: 'critical',
        location: 'Various'
    },
    {
        name: 'Fuel System',
        type: 'fuel_system',
        intervalDays: 180,
        criticality: 'high',
        location: 'Fuel Tanks'
    },
    {
        name: 'Electrical System',
        type: 'electrical',
        intervalDays: 90,
        criticality: 'critical',
        location: 'Various'
    },
    {
        name: 'Landing Gear',
        type: 'landing_gear',
        intervalDays: 365,
        criticality: 'high',
        location: 'Undercarriage'
    },
    {
        name: 'Emergency Systems',
        type: 'emergency_systems',
        intervalDays: 180,
        criticality: 'critical',
        location: 'Various'
    },
    {
        name: 'Navigation System',
        type: 'navigation',
        intervalDays: 180,
        criticality: 'high',
        location: 'Cockpit'
    },
    {
        name: 'Communication System',
        type: 'communication',
        intervalDays: 90,
        criticality: 'critical',
        location: 'Cockpit'
    },
    {
        name: 'Medical Equipment',
        type: 'medical_equipment',
        intervalDays: 180,
        criticality: 'high',
        location: 'Cabin'
    },
    {
        name: 'Monitoring Systems',
        type: 'monitoring_systems',
        intervalDays: 90,
        criticality: 'high',
        location: 'Cockpit'
    },
    {
        name: 'Lighting System',
        type: 'lighting',
        intervalDays: 180,
        criticality: 'medium',
        location: 'Exterior'
    },
    {
        name: 'Air Conditioning',
        type: 'air_conditioning',
        intervalDays: 90,
        criticality: 'medium',
        location: 'Cabin'
    },
    {
        name: 'Battery System',
        type: 'battery',
        intervalDays: 180,
        criticality: 'high',
        location: 'Various'
    },
    {
        name: 'Safety Equipment',
        type: 'safety_equipment',
        intervalDays: 180,
        criticality: 'critical',
        location: 'Various'
    },
    {
        name: 'Fuel Monitoring',
        type: 'monitoring_systems',
        intervalDays: 90,
        criticality: 'high',
        location: 'Cockpit'
    },
    {
        name: 'Vibration Monitoring',
        type: 'monitoring_systems',
        intervalDays: 60,
        criticality: 'high',
        location: 'Various'
    }
];
// Helper function to generate devices for a vehicle
function generateDevices(vehicleId, templates) {
    const now = new Date();
    return templates.map((template, index)=>{
        const lastMaintenance = new Date(now.getTime() - Math.random() * template.intervalDays * 24 * 60 * 60 * 1000);
        const nextMaintenance = new Date(lastMaintenance.getTime() + template.intervalDays * 24 * 60 * 60 * 1000);
        const isOverdue = nextMaintenance < now;
        const isDueSoon = !isOverdue && nextMaintenance.getTime() - now.getTime() < 7 * 24 * 60 * 60 * 1000; // 7 days
        let status = 'upcoming';
        if (isOverdue) status = 'overdue';
        else if (isDueSoon) status = 'due';
        return {
            id: `${vehicleId}-device-${index + 1}`,
            vehicleId,
            name: template.name,
            type: template.type,
            description: `${template.name} maintenance and inspection`,
            maintenanceIntervalDays: template.intervalDays,
            lastMaintenanceDate: lastMaintenance,
            nextMaintenanceDate: nextMaintenance,
            status,
            serialNumber: `SN-${vehicleId}-${index + 1}`,
            manufacturer: 'Various Manufacturers',
            model: `Model-${index + 1}`,
            location: template.location,
            criticality: template.criticality,
            assignedContacts: [
                mockContacts[Math.floor(Math.random() * mockContacts.length)]
            ]
        };
    });
}
const mockVehicles = [
    // Cars
    {
        id: 'car-1',
        name: 'Charlie Response Car 1',
        type: 'car',
        model: 'Toyota Prado',
        licensePlate: 'HMC-001',
        registrationNumber: 'REG-001',
        status: 'active',
        location: 'Main Hospital Parking',
        assignedContacts: [
            mockContacts[1],
            mockContacts[4]
        ],
        devices: generateDevices('car-1', carDeviceTemplates),
        purchaseDate: new Date('2022-01-15'),
        lastInspectionDate: new Date('2025-12-01'),
        nextInspectionDate: new Date('2026-06-01'),
        mileage: 45000,
        notes: 'Primary emergency response vehicle'
    },
    {
        id: 'car-2',
        name: 'Charlie Response Car 2',
        type: 'car',
        model: 'Toyota Prado',
        licensePlate: 'HMC-002',
        registrationNumber: 'REG-002',
        status: 'active',
        location: 'Emergency Department',
        assignedContacts: [
            mockContacts[0],
            mockContacts[1]
        ],
        devices: generateDevices('car-2', carDeviceTemplates),
        purchaseDate: new Date('2022-03-20'),
        lastInspectionDate: new Date('2025-11-15'),
        nextInspectionDate: new Date('2026-05-15'),
        mileage: 38000,
        notes: 'Backup emergency response vehicle'
    },
    {
        id: 'car-3',
        name: 'Charlie Support Car 1',
        type: 'car',
        model: 'Toyota Prado',
        licensePlate: 'HMC-003',
        registrationNumber: 'REG-003',
        status: 'active',
        location: 'Administration Building',
        assignedContacts: [
            mockContacts[1],
            mockContacts[4]
        ],
        devices: generateDevices('car-3', carDeviceTemplates),
        purchaseDate: new Date('2023-01-10'),
        lastInspectionDate: new Date('2025-12-15'),
        nextInspectionDate: new Date('2026-06-15'),
        mileage: 25000,
        notes: 'Administrative and transport duties'
    },
    {
        id: 'car-4',
        name: 'Charlie Transport Car 1',
        type: 'car',
        model: 'Toyota Prado',
        licensePlate: 'HMC-004',
        registrationNumber: 'REG-004',
        status: 'maintenance',
        location: 'Maintenance Bay',
        assignedContacts: [
            mockContacts[0],
            mockContacts[1]
        ],
        devices: generateDevices('car-4', carDeviceTemplates),
        purchaseDate: new Date('2022-08-05'),
        lastInspectionDate: new Date('2025-10-20'),
        nextInspectionDate: new Date('2026-04-20'),
        mileage: 52000,
        notes: 'Currently undergoing scheduled maintenance'
    },
    {
        id: 'car-5',
        name: 'Charlie Transport Car 2',
        type: 'car',
        model: 'Toyota Prado',
        licensePlate: 'HMC-005',
        registrationNumber: 'REG-005',
        status: 'active',
        location: 'Medical Transport Bay',
        assignedContacts: [
            mockContacts[1],
            mockContacts[3]
        ],
        devices: generateDevices('car-5', carDeviceTemplates),
        purchaseDate: new Date('2023-02-28'),
        lastInspectionDate: new Date('2025-12-10'),
        nextInspectionDate: new Date('2026-06-10'),
        mileage: 28000,
        notes: 'Dedicated medical transport vehicle'
    },
    // Ambulances
    {
        id: 'ambulance-1',
        name: 'Ambulance Alpha 1',
        type: 'ambulance',
        model: 'Ford Transit',
        licensePlate: 'AMB-001',
        registrationNumber: 'AMB-REG-001',
        status: 'active',
        location: 'Emergency Department',
        assignedContacts: [
            mockContacts[0],
            mockContacts[3]
        ],
        devices: generateDevices('ambulance-1', ambulanceDeviceTemplates),
        purchaseDate: new Date('2021-06-15'),
        lastInspectionDate: new Date('2025-12-05'),
        nextInspectionDate: new Date('2026-06-05'),
        mileage: 65000,
        notes: 'Fully equipped ALS ambulance'
    },
    {
        id: 'ambulance-2',
        name: 'Ambulance Bravo 1',
        type: 'ambulance',
        model: 'Ford Transit',
        licensePlate: 'AMB-002',
        registrationNumber: 'AMB-REG-002',
        status: 'active',
        location: 'Ambulance Bay 1',
        assignedContacts: [
            mockContacts[1],
            mockContacts[3]
        ],
        devices: generateDevices('ambulance-2', ambulanceDeviceTemplates),
        purchaseDate: new Date('2022-01-20'),
        lastInspectionDate: new Date('2025-11-25'),
        nextInspectionDate: new Date('2026-05-25'),
        mileage: 48000,
        notes: 'BLS ambulance for routine transports'
    },
    {
        id: 'ambulance-3',
        name: 'Ambulance Alpha 2',
        type: 'ambulance',
        model: 'Ford Transit',
        licensePlate: 'AMB-003',
        registrationNumber: 'AMB-REG-003',
        status: 'active',
        location: 'Ambulance Bay 2',
        assignedContacts: [
            mockContacts[0],
            mockContacts[2]
        ],
        devices: generateDevices('ambulance-3', ambulanceDeviceTemplates),
        purchaseDate: new Date('2021-09-10'),
        lastInspectionDate: new Date('2025-12-08'),
        nextInspectionDate: new Date('2026-06-08'),
        mileage: 72000,
        notes: 'Critical care transport ambulance'
    },
    {
        id: 'ambulance-4',
        name: 'Ambulance Bravo 2',
        type: 'ambulance',
        model: 'Ford Transit',
        licensePlate: 'AMB-004',
        registrationNumber: 'AMB-REG-004',
        status: 'maintenance',
        location: 'Maintenance Facility',
        assignedContacts: [
            mockContacts[1],
            mockContacts[3]
        ],
        devices: generateDevices('ambulance-4', ambulanceDeviceTemplates),
        purchaseDate: new Date('2022-04-15'),
        lastInspectionDate: new Date('2025-10-30'),
        nextInspectionDate: new Date('2026-04-30'),
        mileage: 35000,
        notes: 'Specialized neonatal transport - in maintenance'
    },
    {
        id: 'ambulance-5',
        name: 'Ambulance Alpha 3',
        type: 'ambulance',
        model: 'Ford Transit',
        licensePlate: 'AMB-005',
        registrationNumber: 'AMB-REG-005',
        status: 'active',
        location: 'Emergency Response Station',
        assignedContacts: [
            mockContacts[0],
            mockContacts[1]
        ],
        devices: generateDevices('ambulance-5', ambulanceDeviceTemplates),
        purchaseDate: new Date('2023-01-05'),
        lastInspectionDate: new Date('2025-12-12'),
        nextInspectionDate: new Date('2026-06-12'),
        mileage: 29000,
        notes: 'Heavy rescue and extrication ambulance'
    },
    // Helicopters
    {
        id: 'helicopter-1',
        name: 'Air Ambulance 1',
        type: 'helicopter',
        model: 'Airbus H145',
        licensePlate: 'HEL-001',
        registrationNumber: 'HEL-REG-001',
        status: 'active',
        location: 'Helipad A',
        assignedContacts: [
            mockContacts[2],
            mockContacts[3]
        ],
        devices: generateDevices('helicopter-1', helicopterDeviceTemplates),
        purchaseDate: new Date('2020-08-20'),
        lastInspectionDate: new Date('2025-12-03'),
        nextInspectionDate: new Date('2026-06-03'),
        flightHours: 1250,
        notes: 'Primary air ambulance helicopter'
    },
    {
        id: 'helicopter-2',
        name: 'Medical Transport Helicopter 1',
        type: 'helicopter',
        model: 'AgustaWestland AW169',
        licensePlate: 'HEL-002',
        registrationNumber: 'HEL-REG-002',
        status: 'active',
        location: 'Helipad B',
        assignedContacts: [
            mockContacts[2],
            mockContacts[4]
        ],
        devices: generateDevices('helicopter-2', helicopterDeviceTemplates),
        purchaseDate: new Date('2021-11-30'),
        lastInspectionDate: new Date('2025-11-28'),
        nextInspectionDate: new Date('2026-05-28'),
        flightHours: 890,
        notes: 'Secondary medical transport helicopter'
    }
];
const mockMaintenanceRecords = [
    {
        id: 'record-1',
        deviceId: 'car-1-device-1',
        vehicleId: 'car-1',
        date: new Date('2025-11-15'),
        type: 'preventive',
        description: 'Regular engine oil change and filter replacement',
        technician: 'Ahmed Al-Mansoori',
        cost: 150,
        notes: 'All systems operating normally',
        nextDueDate: new Date('2026-02-15')
    },
    {
        id: 'record-2',
        deviceId: 'ambulance-1-device-3',
        vehicleId: 'ambulance-1',
        date: new Date('2025-12-01'),
        type: 'corrective',
        description: 'Brake system inspection and pad replacement',
        technician: 'Fatima Al-Khalifa',
        cost: 320,
        notes: 'Front brake pads worn, replaced both front and rear for safety',
        nextDueDate: new Date('2026-03-01')
    },
    {
        id: 'record-3',
        deviceId: 'helicopter-1-device-1',
        vehicleId: 'helicopter-1',
        date: new Date('2025-11-20'),
        type: 'inspection',
        description: 'Main rotor system inspection',
        technician: 'Mohammed Al-Thani',
        cost: 450,
        notes: 'Rotor system in good condition, minor balancing adjustment performed',
        nextDueDate: new Date('2026-02-20')
    }
];
}),
"[project]/OneDrive/Desktop/HMC tracker/src/components/ui/GlassCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlassCard",
    ()=>GlassCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function GlassCard({ children, className, onClick, hoverEffect = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("glass-card p-6 border border-white/10 bg-black/40 backdrop-blur-xl text-white", hoverEffect && "cursor-pointer hover:bg-white/5 active:scale-95", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/GlassCard.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
"[project]/OneDrive/Desktop/HMC tracker/src/components/ui/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const Reveal = ({ children, width = 'fit-content', delay = 0.25 })=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            position: 'relative',
            width,
            overflow: 'hidden'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: {
                hidden: {
                    opacity: 0,
                    y: 75
                },
                visible: {
                    opacity: 1,
                    y: 0
                }
            },
            initial: "hidden",
            animate: isInView ? 'visible' : 'hidden',
            transition: {
                duration: 0.5,
                delay: delay
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/Reveal.tsx",
            lineNumber: 18,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/Reveal.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/OneDrive/Desktop/HMC tracker/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const Badge = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant = 'default', ...props }, ref)=>{
    const variantClasses = {
        default: 'border-transparent bg-blue-100 text-blue-800',
        secondary: 'border-transparent bg-gray-100 text-gray-800',
        destructive: 'border-transparent bg-red-100 text-red-800',
        outline: 'text-gray-700 border-gray-300',
        success: 'border-transparent bg-green-100 text-green-800',
        warning: 'border-transparent bg-yellow-100 text-yellow-800'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantClasses[variant]} ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/badge.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Badge.displayName = "Badge";
;
}),
"[project]/OneDrive/Desktop/HMC tracker/src/components/ui/progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, value = 0, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `relative h-2 w-full overflow-hidden rounded-full bg-gray-200 ${className || ''}`,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full bg-blue-700 transition-all duration-300",
            style: {
                width: `${value || 0}%`
            }
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/progress.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/progress.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Progress.displayName = "Progress";
;
}),
"[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VehicleCard",
    ()=>VehicleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$GlassCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/GlassCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ambulance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ambulance$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/ambulance.js [app-ssr] (ecmascript) <export default as Ambulance>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$helicopter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Helicopter$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/helicopter.js [app-ssr] (ecmascript) <export default as Helicopter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function VehicleCard({ vehicle }) {
    // Calculate maintenance status summary
    const deviceStats = vehicle.devices.reduce((acc, device)=>{
        acc[device.status] = (acc[device.status] || 0) + 1;
        return acc;
    }, {});
    const totalDevices = vehicle.devices.length;
    const overdueCount = deviceStats.overdue || 0;
    const dueCount = deviceStats.due || 0;
    const upcomingCount = deviceStats.upcoming || 0;
    const completedCount = deviceStats.completed || 0;
    const healthPercentage = totalDevices > 0 ? Math.round((totalDevices - overdueCount - dueCount) / totalDevices * 100) : 100;
    const getStatusColor = (status)=>{
        switch(status){
            case 'active':
                return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30';
            case 'maintenance':
                return 'bg-amber-500/20 text-amber-300 border-amber-400/30';
            case 'out_of_service':
                return 'bg-red-500/20 text-red-300 border-red-400/30';
            default:
                return 'bg-slate-500/20 text-slate-300 border-slate-400/30';
        }
    };
    const getVehicleIcon = (type)=>{
        switch(type){
            case 'car':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                    lineNumber: 50,
                    columnNumber: 26
                }, this);
            case 'ambulance':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ambulance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ambulance$3e$__["Ambulance"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                    lineNumber: 51,
                    columnNumber: 32
                }, this);
            case 'helicopter':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$helicopter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Helicopter$3e$__["Helicopter"], {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                    lineNumber: 52,
                    columnNumber: 33
                }, this);
        }
    };
    const getHealthColor = (percentage)=>{
        if (percentage >= 80) return 'text-emerald-400';
        if (percentage >= 60) return 'text-amber-400';
        return 'text-red-400';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: `/vehicle/${vehicle.id}`,
            className: "block h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$GlassCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassCard"], {
                hoverEffect: true,
                className: "h-full flex flex-col justify-between group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-xl bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-emerald-400/20 text-cyan-100 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300",
                                                children: getVehicleIcon(vehicle.type)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-white tracking-tight",
                                                        children: vehicle.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: vehicle.model
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        className: `${getStatusColor(vehicle.status)} border backdrop-blur-md`,
                                        children: vehicle.status.replace('_', ' ')
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-sm text-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: "Fleet Health"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold ${getHealthColor(healthPercentage)}`,
                                                children: [
                                                    healthPercentage,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                        value: healthPercentage,
                                        className: "h-1.5 bg-gray-800"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 rounded-lg bg-white/5 flex items-center gap-2 text-red-300 border border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    overdueCount,
                                                    " Overdue"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 rounded-lg bg-white/5 flex items-center gap-2 text-amber-300 border border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    dueCount,
                                                    " Due Soon"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-4 border-t border-white/10 space-y-2 text-sm text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: vehicle.location
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            vehicle.assignedContacts.length,
                                            " contacts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/Desktop/HMC tracker/src/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `rounded-lg border border-gray-200 bg-white shadow-sm ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `flex flex-col space-y-1.5 p-6 ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/card.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: `text-xl font-semibold leading-none tracking-tight text-gray-900 ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/card.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: `text-sm text-gray-600 ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `p-6 pt-0 ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/card.tsx",
        lineNumber: 55,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `flex items-center p-6 pt-0 ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[project]/OneDrive/Desktop/HMC tracker/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant = 'default', size = 'default', ...props }, ref)=>{
    const variantClasses = {
        default: 'bg-blue-700 text-white hover:bg-blue-800 shadow-sm',
        destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
        outline: 'border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        ghost: 'text-gray-700 hover:bg-gray-100',
        success: 'bg-green-600 text-white hover:bg-green-700 shadow-sm',
        warning: 'bg-yellow-500 text-gray-900 hover:bg-yellow-600 shadow-sm'
    };
    const sizeClasses = {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-sm',
        lg: 'h-11 rounded-md px-8 text-base',
        icon: 'h-10 w-10'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`,
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/button.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VehiclesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/data/mockData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$VehicleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/VehicleCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/car.js [app-ssr] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function VehiclesPage() {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [typeFilter, setTypeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const filteredVehicles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockVehicles"].filter((vehicle)=>{
            const matchesSearch = searchTerm.trim() === '' || vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) || vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) || (vehicle.licensePlate?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) || vehicle.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = typeFilter === 'all' || vehicle.type === typeFilter;
            const matchesStatus = statusFilter === 'all' || vehicle.status === statusFilter;
            return matchesSearch && matchesType && matchesStatus;
        });
    }, [
        searchTerm,
        typeFilter,
        statusFilter
    ]);
    const totalVehicles = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockVehicles"].length;
    const activeVehicles = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockVehicles"].filter((v)=>v.status === 'active').length;
    const maintenanceVehicles = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockVehicles"].filter((v)=>v.status === 'maintenance').length;
    const totalDevices = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockVehicles"].reduce((acc, vehicle)=>acc + vehicle.devices.length, 0);
    const overdueDevices = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockVehicles"].reduce((acc, vehicle)=>acc + vehicle.devices.filter((d)=>d.status === 'overdue').length, 0);
    const dueSoonDevices = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockVehicles"].reduce((acc, vehicle)=>acc + vehicle.devices.filter((d)=>d.status === 'due').length, 0);
    const clearFilters = ()=>{
        setSearchTerm('');
        setTypeFilter('all');
        setStatusFilter('all');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-white",
                                        children: "Fleet Management"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-slate-300",
                                        children: "Manage and track all vehicles and their equipment status"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/notifications",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        "Alerts (",
                                        overdueDevices + dueSoonDevices,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-sm font-medium text-slate-200",
                                            children: "Total Vehicles"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                            className: "h-4 w-4 text-slate-300"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-white",
                                            children: totalVehicles
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-300",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockVehicles"].filter((v)=>v.type === 'car').length,
                                                " cars • ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockVehicles"].filter((v)=>v.type === 'ambulance').length,
                                                " ambulances • ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockVehicles"].filter((v)=>v.type === 'helicopter').length,
                                                " helicopters"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-sm font-medium text-slate-200",
                                            children: "Active Fleet"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "h-4 w-4 text-emerald-300"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-emerald-200",
                                            children: activeVehicles
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-300",
                                            children: [
                                                maintenanceVehicles,
                                                " in maintenance"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-sm font-medium text-slate-200",
                                            children: "Total Devices"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                            className: "h-4 w-4 text-slate-300"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-white",
                                            children: totalDevices
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-300",
                                            children: "Across all vehicles"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-sm font-medium text-slate-200",
                                            children: "Maintenance Alerts"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "h-4 w-4 text-red-300"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-red-200",
                                            children: overdueDevices + dueSoonDevices
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-300",
                                            children: [
                                                overdueDevices,
                                                " overdue, ",
                                                dueSoonDevices,
                                                " due soon"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "h-5 w-5 text-slate-300"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-white",
                                        children: "Filter Vehicles"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    (searchTerm || typeFilter !== 'all' || statusFilter !== 'all') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: clearFilters,
                                        children: "Clear Filters"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 top-3 h-4 w-4 text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search by name, model, plate...",
                                                value: searchTerm,
                                                onChange: (e)=>setSearchTerm(e.target.value),
                                                className: "w-full pl-10 pr-4 py-2 border border-white/20 rounded-md text-sm bg-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: typeFilter,
                                        onChange: (e)=>setTypeFilter(e.target.value),
                                        className: "w-full px-4 py-2 border border-white/20 rounded-md text-sm bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "all",
                                                children: "All Types"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "car",
                                                children: "Cars"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "ambulance",
                                                children: "Ambulances"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "helicopter",
                                                children: "Helicopters"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: statusFilter,
                                        onChange: (e)=>setStatusFilter(e.target.value),
                                        className: "w-full px-4 py-2 border border-white/20 rounded-md text-sm bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "all",
                                                children: "All Status"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "active",
                                                children: "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "maintenance",
                                                children: "Maintenance"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "out_of_service",
                                                children: "Out of Service"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-white",
                                    children: [
                                        "Vehicle List (",
                                        filteredVehicles.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        typeFilter !== 'all' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            children: typeFilter
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        statusFilter !== 'all' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            children: statusFilter.replace('_', ' ')
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        filteredVehicles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-8 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-slate-300",
                                    children: "No vehicles match your current filters."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                            children: filteredVehicles.map((vehicle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$VehicleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VehicleCard"], {
                                    vehicle: vehicle
                                }, vehicle.id, false, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/vehicles/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=OneDrive_Desktop_HMC%20tracker_src_432547fe._.js.map