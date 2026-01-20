(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/HMC tracker/src/data/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/HMC tracker/src/components/ui/GlassCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlassCard",
    ()=>GlassCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function GlassCard({ children, className, onClick, hoverEffect = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("glass-card p-6 border border-white/10 bg-black/40 backdrop-blur-xl text-white", hoverEffect && "cursor-pointer hover:bg-white/5 active:scale-95", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/GlassCard.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_c = GlassCard;
var _c;
__turbopack_context__.k.register(_c, "GlassCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/HMC tracker/src/components/ui/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Reveal = ({ children, width = 'fit-content', delay = 0.25, className = "", fullHeight = false })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: false,
        amount: 0.2
    }); // Trigger every time? No, once is better usually. But user said "scrolling fast".
    // If fast scrolling, we want delay to be minimal for items already in view.
    // We'll keep it simple: consume className.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        style: {
            position: 'relative',
            width,
            height: fullHeight ? '100%' : 'auto',
            overflow: 'visible'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: {
                hidden: {
                    opacity: 0,
                    y: 30
                },
                visible: {
                    opacity: 1,
                    y: 0
                }
            },
            initial: "hidden",
            animate: isInView ? 'visible' : 'hidden',
            transition: {
                duration: 0.6,
                delay: delay,
                ease: [
                    0.25,
                    0.25,
                    0.25,
                    0.75
                ]
            },
            style: {
                height: fullHeight ? '100%' : 'auto'
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/Reveal.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/Reveal.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Reveal, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/HMC tracker/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Badge = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant = 'default', ...props }, ref)=>{
    const variantClasses = {
        default: 'border-transparent bg-blue-100 text-blue-800',
        secondary: 'border-transparent bg-gray-100 text-gray-800',
        destructive: 'border-transparent bg-red-100 text-red-800',
        outline: 'text-gray-700 border-gray-300',
        success: 'border-transparent bg-green-100 text-green-800',
        warning: 'border-transparent bg-yellow-100 text-yellow-800'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantClasses[variant]} ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/badge.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Badge;
Badge.displayName = "Badge";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Badge$React.forwardRef");
__turbopack_context__.k.register(_c1, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/HMC tracker/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant = 'default', size = 'default', ...props }, ref)=>{
    const variantClasses = {
        default: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20',
        destructive: 'bg-red-500 text-white hover:bg-red-600 shadow-md shadow-red-500/20',
        outline: 'border border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm',
        secondary: 'bg-slate-800 text-white hover:bg-slate-700',
        ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
        success: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-md shadow-emerald-500/20',
        warning: 'bg-amber-500 text-black hover:bg-amber-600 shadow-md shadow-amber-500/20'
    };
    const sizeClasses = {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-sm',
        lg: 'h-12 rounded-full px-8 text-base',
        icon: 'h-10 w-10 rounded-full'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95", variantClasses[variant], sizeClasses[size], className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/button.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/HMC tracker/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
const DialogContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
const Dialog = ({ children, open, onOpenChange })=>{
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Dialog.useEffect": ()=>{
            if (open) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
            return ({
                "Dialog.useEffect": ()=>{
                    document.body.style.overflow = 'unset';
                }
            })["Dialog.useEffect"];
        }
    }["Dialog.useEffect"], [
        open
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Dialog.useEffect": ()=>{
            const handleKeyDown = {
                "Dialog.useEffect.handleKeyDown": (event)=>{
                    if (event.key === 'Escape') {
                        onOpenChange(false);
                    }
                }
            }["Dialog.useEffect.handleKeyDown"];
            if (open) {
                window.addEventListener('keydown', handleKeyDown);
            }
            return ({
                "Dialog.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["Dialog.useEffect"];
        }
    }["Dialog.useEffect"], [
        open,
        onOpenChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogContext.Provider, {
        value: {
            open,
            onOpenChange
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/dialog.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Dialog, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = Dialog;
const DialogContent = ({ children, className })=>{
    _s1();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DialogContext);
    if (!context?.open) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4",
        onClick: ()=>context.onOpenChange(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `glass-card rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto ${className || ''}`,
            onClick: (e)=>e.stopPropagation(),
            children: children
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/dialog.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/dialog.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(DialogContent, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c1 = DialogContent;
const DialogHeader = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 pb-0",
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/dialog.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = DialogHeader;
const DialogTitle = ({ children, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: `text-lg font-semibold ${className || ''}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/dialog.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = DialogTitle;
const DialogDescription = ({ children, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `text-sm text-muted-foreground ${className || ''}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/dialog.tsx",
        lineNumber: 90,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = DialogDescription;
const DialogFooter = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-end gap-2 p-6 pt-0",
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/dialog.tsx",
        lineNumber: 96,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = DialogFooter;
const DialogTrigger = ({ children, asChild })=>{
    _s2();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DialogContext);
    if (!context) {
        throw new Error('DialogTrigger must be used within a Dialog');
    }
    const { onOpenChange } = context;
    if (asChild) {
        const child = children;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](child, {
            onClick: (event)=>{
                child.props.onClick?.(event);
                onOpenChange(true);
            }
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>onOpenChange(true),
        className: "w-full text-left",
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/components/ui/dialog.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(DialogTrigger, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c6 = DialogTrigger;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogContent");
__turbopack_context__.k.register(_c2, "DialogHeader");
__turbopack_context__.k.register(_c3, "DialogTitle");
__turbopack_context__.k.register(_c4, "DialogDescription");
__turbopack_context__.k.register(_c5, "DialogFooter");
__turbopack_context__.k.register(_c6, "DialogTrigger");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotificationsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/GlassCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function NotificationsPage() {
    _s();
    const [sentNotifications, setSentNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAlert, setSelectedAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSendDialogOpen, setIsSendDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Generate maintenance alerts from mock data (Memoize or keep as is)
    const generateAlerts = ()=>{
        const alerts = [];
        const now = new Date();
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockVehicles"].forEach((vehicle)=>{
            vehicle.devices.forEach((device)=>{
                const daysUntilDue = Math.ceil((device.nextMaintenanceDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
                const isOverdue = daysUntilDue < 0;
                const isDueSoon = !isOverdue && daysUntilDue <= 7;
                if (isOverdue || isDueSoon) {
                    const alert = {
                        id: `${vehicle.id}-${device.id}-alert`,
                        deviceId: device.id,
                        vehicleId: vehicle.id,
                        type: isOverdue ? 'overdue' : 'due_soon',
                        message: `${device.name} on ${vehicle.name} is ${isOverdue ? 'overdue' : 'due soon'} for maintenance`,
                        priority: device.criticality === 'critical' ? 'critical' : device.criticality === 'high' ? 'high' : isOverdue ? 'high' : 'medium',
                        createdAt: new Date(),
                        acknowledged: false
                    };
                    alerts.push(alert);
                }
            });
        });
        return alerts.sort((a, b)=>{
            const priorityOrder = {
                critical: 0,
                high: 1,
                medium: 2,
                low: 3
            };
            return priorityOrder[a.priority] - priorityOrder[b.priority]; // Sort fixed
        });
    };
    const alerts = generateAlerts();
    const overdueAlerts = alerts.filter((a)=>a.type === 'overdue');
    const dueSoonAlerts = alerts.filter((a)=>a.type === 'due_soon');
    const handleSendNotification = async (alert, contact, method)=>{
        const notificationId = `${alert.id}-${method}-${contact.id}`;
        if (!sentNotifications.includes(notificationId)) {
            setSentNotifications((prev)=>[
                    ...prev,
                    notificationId
                ]);
        // Mock API call simulation
        }
    };
    const handleSendBulkNotifications = async (alert, contacts, method)=>{
        const notificationIds = contacts.map((contact)=>`${alert.id}-${method}-${contact.id}`);
        setSentNotifications((prev)=>Array.from(new Set([
                ...prev,
                ...notificationIds
            ])));
    };
    // Helper to open dialog
    const openReminderDialog = (alert)=>{
        setSelectedAlert(alert);
        setIsSendDialogOpen(true);
    };
    const activeVehicle = selectedAlert ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockVehicles"].find((v)=>v.id === selectedAlert.vehicleId) : null;
    const activeDevice = selectedAlert ? activeVehicle?.devices.find((d)=>d.id === selectedAlert.deviceId) : null;
    const activeContacts = activeDevice?.assignedContacts || [];
    const activeEmailContacts = activeContacts.filter((c)=>c.email);
    const activeSmsContacts = activeContacts.filter((c)=>c.phone);
    const getPriorityColor = (priority)=>{
        switch(priority){
            case 'critical':
                return 'bg-red-500/20 text-red-200 border-red-400/30';
            case 'high':
                return 'bg-amber-500/20 text-amber-200 border-amber-400/30';
            case 'medium':
                return 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30';
            default:
                return 'bg-slate-500/20 text-slate-200 border-slate-400/30';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "h-4 w-4 group-hover:-translate-x-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    "Back to Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-4xl font-bold bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent mb-2",
                                                children: "Maintenance Center"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-slate-400",
                                                children: "Manage and dispatch maintenance alerts for fleet equipment"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-white/5 border border-white/10 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                            className: "h-6 w-6 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                                className: "border-red-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-slate-400 uppercase tracking-wider",
                                                children: "Overdue"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "h-5 w-5 text-red-400"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl font-bold text-white mb-1",
                                        children: overdueAlerts.length
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-400",
                                        children: "Immediate attention required"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                                className: "border-amber-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-slate-400 uppercase tracking-wider",
                                                children: "Due Soon"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "h-5 w-5 text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl font-bold text-white mb-1",
                                        children: dueSoonAlerts.length
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-amber-400",
                                        children: "Within 7 days"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                                className: "border-emerald-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-slate-400 uppercase tracking-wider",
                                                children: "Dispatched"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "h-5 w-5 text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl font-bold text-white mb-1",
                                        children: sentNotifications.length
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-emerald-400",
                                        children: "Notifications sent this session"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-white mb-6 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    "Active Alerts"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            alerts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                                className: "p-12 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "h-16 w-16 text-emerald-500/50 mx-auto mb-6"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-medium text-white mb-2",
                                        children: "All Systems Operational"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400",
                                        children: "No maintenance alerts at this time."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: alerts.map((alert, index)=>{
                                    const vehicle = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockVehicles"].find((v)=>v.id === alert.vehicleId);
                                    const device = vehicle?.devices.find((d)=>d.id === alert.deviceId);
                                    const contacts = device?.assignedContacts || [];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                        delay: index * 0.05,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                                            hoverEffect: true,
                                            className: "group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col md:flex-row md:items-start justify-between gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-4 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1 p-2 rounded-lg bg-white/5 border border-white/5",
                                                                children: alert.type === 'overdue' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                    className: "h-5 w-5 text-red-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                    lineNumber: 196,
                                                                    columnNumber: 33
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "h-5 w-5 text-amber-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-wrap items-center gap-3 mb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-bold text-lg text-white group-hover:text-blue-400 transition-colors",
                                                                                children: [
                                                                                    device?.name,
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-500 font-normal",
                                                                                        children: "on"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                                        lineNumber: 204,
                                                                                        columnNumber: 50
                                                                                    }, this),
                                                                                    " ",
                                                                                    vehicle?.name
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                                lineNumber: 203,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                className: `${getPriorityColor(alert.priority)} border backdrop-blur-md`,
                                                                                children: alert.priority
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                                lineNumber: 206,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                variant: "outline",
                                                                                className: `border ${alert.type === 'overdue' ? 'border-red-500/50 text-red-400' : 'border-amber-500/50 text-amber-400'}`,
                                                                                children: alert.type.replace('_', ' ')
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                                lineNumber: 209,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                        lineNumber: 202,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-slate-300 mb-4 leading-relaxed",
                                                                        children: alert.message
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-6 text-xs font-medium text-slate-500 uppercase tracking-wide",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-1.5",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                                        className: "h-4 w-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                                        lineNumber: 218,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: [
                                                                                            contacts.length,
                                                                                            " assigned"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                                        lineNumber: 219,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                                lineNumber: 217,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    "Created: ",
                                                                                    alert.createdAt.toLocaleDateString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                                lineNumber: 221,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                        lineNumber: 216,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex md:flex-col gap-2 min-w-[160px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: ()=>openReminderDialog(alert),
                                                            className: "w-full bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-500/20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 31
                                                                }, this),
                                                                "Send Reminder"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                lineNumber: 192,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 23
                                        }, this)
                                    }, alert.id, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                    open: isSendDialogOpen,
                    onOpenChange: setIsSendDialogOpen,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                        className: "fixed left-[50%] top-[50%] z-[100] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-zinc-950/90 backdrop-blur-2xl p-6 shadow-2xl duration-200 sm:rounded-2xl text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        children: "Send Maintenance Reminder"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                        className: "text-slate-400",
                                        children: [
                                            "Send notification for: ",
                                            activeDevice?.name,
                                            " on ",
                                            activeVehicle?.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            activeEmailContacts.length > 0 && selectedAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "secondary",
                                                className: "bg-white/10 hover:bg-white/20 text-white border-none",
                                                onClick: ()=>handleSendBulkNotifications(selectedAlert, activeEmailContacts, 'email'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Email All (",
                                                    activeEmailContacts.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this),
                                            activeSmsContacts.length > 0 && selectedAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "secondary",
                                                className: "bg-white/10 hover:bg-white/20 text-white border-none",
                                                onClick: ()=>handleSendBulkNotifications(selectedAlert, activeSmsContacts, 'sms'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this),
                                                    "SMS All (",
                                                    activeSmsContacts.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                lineNumber: 270,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-medium mb-3 text-slate-200",
                                                children: "Assigned Contacts:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar",
                                                children: activeContacts.map((contact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-3 bg-black/40 border border-white/5 rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-white",
                                                                        children: contact.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                        lineNumber: 287,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-slate-400",
                                                                        children: contact.role
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                        lineNumber: 288,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    contact.email && selectedAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        size: "sm",
                                                                        variant: "ghost",
                                                                        className: "hover:bg-white/10 hover:text-white text-slate-400",
                                                                        onClick: ()=>handleSendNotification(selectedAlert, contact, 'email'),
                                                                        disabled: sentNotifications.includes(`${selectedAlert.id}-email-${contact.id}`),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                                className: "h-4 w-4 mr-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                                lineNumber: 299,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            sentNotifications.includes(`${selectedAlert.id}-email-${contact.id}`) ? 'Sent' : 'Email'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                        lineNumber: 292,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    contact.phone && selectedAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        size: "sm",
                                                                        variant: "ghost",
                                                                        className: "hover:bg-white/10 hover:text-white text-slate-400",
                                                                        onClick: ()=>handleSendNotification(selectedAlert, contact, 'sms'),
                                                                        disabled: sentNotifications.includes(`${selectedAlert.id}-sms-${contact.id}`),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                                className: "h-4 w-4 mr-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                                lineNumber: 311,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            sentNotifications.includes(`${selectedAlert.id}-sms-${contact.id}`) ? 'Sent' : 'SMS'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                        lineNumber: 304,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, contact.id, true, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    onClick: ()=>setIsSendDialogOpen(false),
                                    className: "text-slate-400 hover:text-white",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/notifications/page.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(NotificationsPage, "c//byKiG+g1hDYRP4eUnoXpMcK8=");
_c = NotificationsPage;
var _c;
__turbopack_context__.k.register(_c, "NotificationsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_HMC%20tracker_src_2aab1312._.js.map