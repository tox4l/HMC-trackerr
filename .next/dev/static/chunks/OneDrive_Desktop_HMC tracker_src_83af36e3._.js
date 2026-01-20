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
"[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EquipmentListPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/GlassCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$justify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignJustify$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/HMC tracker/node_modules/lucide-react/dist/esm/icons/text-align-justify.js [app-client] (ecmascript) <export default as AlignJustify>");
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
function EquipmentListPage() {
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [filterCriticality, setFilterCriticality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('list'); // Default to list for better info density
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EquipmentListPage.useEffect": ()=>{
            setNow(new Date());
        }
    }["EquipmentListPage.useEffect"], []);
    // Collect all equipment
    const allEquipment = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockVehicles"].forEach((vehicle)=>{
        vehicle.devices.forEach((device)=>{
            allEquipment.push({
                ...device,
                vehicleName: vehicle.name,
                vehicleId: vehicle.id
            });
        });
    });
    // Filter equipment
    const filteredEquipment = allEquipment.filter((equipment)=>{
        const matchesSearch = equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) || equipment.type.toLowerCase().includes(searchTerm.toLowerCase()) || equipment.vehicleName.toLowerCase().includes(searchTerm.toLowerCase()) || equipment.serialNumber && equipment.serialNumber.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === 'all' || equipment.type === filterType;
        const matchesStatus = filterStatus === 'all' || equipment.status === filterStatus;
        const matchesCriticality = filterCriticality === 'all' || equipment.criticality === filterCriticality;
        return matchesSearch && matchesType && matchesStatus && matchesCriticality;
    });
    // Unique types
    const uniqueTypes = Array.from(new Set(allEquipment.map((e)=>e.type)));
    const getStatusBadge = (status)=>{
        switch(status){
            case 'overdue':
                return 'bg-red-500/20 text-red-200 border-red-400/30';
            case 'due':
                return 'bg-amber-500/20 text-amber-200 border-amber-400/30';
            case 'upcoming':
                return 'bg-blue-500/20 text-blue-200 border-blue-400/30';
            case 'completed':
                return 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30';
            default:
                return 'bg-slate-500/20 text-slate-200 border-slate-400/30';
        }
    };
    const getCriticalityBadge = (criticality)=>{
        switch(criticality){
            case 'critical':
                return 'bg-red-500/20 text-red-200 border-red-400/30';
            case 'high':
                return 'bg-amber-500/20 text-amber-200 border-amber-400/30';
            case 'medium':
                return 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30';
            case 'low':
                return 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30';
            default:
                return 'bg-slate-500/20 text-slate-200 border-slate-400/30';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white selection:bg-cyan-500/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-2",
                                    children: "Equipment Inventory"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-lg",
                                    children: [
                                        "Complete list of all equipment across all vehicles ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-600 mx-2",
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 68
                                        }, this),
                                        " ",
                                        allEquipment.length,
                                        " items"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                        className: "mb-8 overflow-visible z-20 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-blue-500/10 rounded-lg text-blue-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold text-white",
                                                children: "Filter & View"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center bg-white/5 rounded-lg p-1 border border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setViewMode('grid'),
                                                className: `p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`,
                                                title: "Grid View",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setViewMode('list'),
                                                className: `p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`,
                                                title: "List View",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setViewMode('condensed'),
                                                className: `p-2 rounded-md transition-all ${viewMode === 'condensed' ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`,
                                                title: "Condensed View",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$justify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignJustify$3e$__["AlignJustify"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-4 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider",
                                                children: "Search"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Search...",
                                                        value: searchTerm,
                                                        onChange: (e)=>setSearchTerm(e.target.value),
                                                        className: "w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider",
                                                children: "Type"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: filterType,
                                                onChange: (e)=>setFilterType(e.target.value),
                                                className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-black transition-all appearance-none cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "all",
                                                        children: "All Types"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this),
                                                    uniqueTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: type,
                                                            children: type.replace(/_/g, ' ').toUpperCase()
                                                        }, type, false, {
                                                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: filterStatus,
                                                onChange: (e)=>setFilterStatus(e.target.value),
                                                className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-black transition-all appearance-none cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "all",
                                                        children: "All Statuses"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "overdue",
                                                        children: "Overdue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "due",
                                                        children: "Due Soon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "upcoming",
                                                        children: "Upcoming"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "completed",
                                                        children: "Up to Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider",
                                                children: "Priority"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: filterCriticality,
                                                onChange: (e)=>setFilterCriticality(e.target.value),
                                                className: "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-black transition-all appearance-none cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "all",
                                                        children: "All Priorities"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "critical",
                                                        children: "Critical"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "high",
                                                        children: "High"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "medium",
                                                        children: "Medium"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "low",
                                                        children: "Low"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                filteredEquipment.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                        className: "p-12 text-center text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                className: "h-16 w-16 mx-auto mb-6 opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-medium text-white mb-2",
                                children: "No Equipment Found"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                lineNumber: 203,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Try adjusting your search or filters to see results."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                        lineNumber: 201,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                    lineNumber: 200,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4'}`,
                    children: filteredEquipment.map((equipment, index)=>{
                        const isOverdue = now ? equipment.nextMaintenanceDate < now : false;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: index % 10 * 0.05,
                            fullHeight: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/equipment/${equipment.id}`,
                                className: "block h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                                    hoverEffect: true,
                                    className: `group cursor-pointer h-full ${viewMode === 'condensed' ? 'p-4 flex items-center gap-4' : ''}`,
                                    children: viewMode === 'condensed' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 rounded-lg bg-blue-500/10 text-blue-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0 grid grid-cols-2 md:grid-cols-4 gap-4 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-bold text-white truncate",
                                                        children: equipment.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-400 truncate",
                                                        children: equipment.vehicleName
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        className: `${getStatusBadge(equipment.status)} border text-[10px] w-fit`,
                                                        children: equipment.status.replace('_', ' ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs font-mono font-medium ${isOverdue ? 'text-red-400' : 'text-slate-400'}`,
                                                        children: equipment.nextMaintenanceDate.toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-4 w-4 text-slate-600 group-hover:text-blue-400"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true) : // List & Grid Views
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col h-full justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent text-blue-400 border border-blue-500/10",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-bold text-white group-hover:text-blue-400 transition-colors",
                                                                        children: equipment.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-slate-500",
                                                                        children: equipment.type.replace(/_/g, ' ').toUpperCase()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                                        lineNumber: 247,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex ${viewMode === 'grid' ? 'flex-col items-end gap-2' : 'gap-2'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                className: `${getStatusBadge(equipment.status)} border backdrop-blur-md`,
                                                                children: equipment.status.replace('_', ' ')
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                className: `${getCriticalityBadge(equipment.criticality)} border`,
                                                                children: equipment.criticality
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `grid ${viewMode === 'grid' ? 'grid-cols-1 gap-3' : 'grid-cols-3 gap-6'} text-sm text-slate-400 mt-2 p-3 bg-white/5 rounded-lg border border-white/5`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-medium text-slate-500 uppercase",
                                                                children: "Vehicle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-slate-200 truncate",
                                                                children: equipment.vehicleName
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-medium text-slate-500 uppercase",
                                                                children: "Location"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-slate-200 truncate",
                                                                children: equipment.location
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-medium text-slate-500 uppercase",
                                                                children: "Due"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$HMC__tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `font-mono ${isOverdue ? 'text-red-400' : 'text-slate-200'}`,
                                                                children: equipment.nextMaintenanceDate.toLocaleDateString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                                lineNumber: 217,
                                columnNumber: 19
                            }, this)
                        }, equipment.id, false, {
                            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                            lineNumber: 216,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
                    lineNumber: 208,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/HMC tracker/src/app/equipment/page.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(EquipmentListPage, "brpDuUA9IcVhosKuulM6hmjEKGw=");
_c = EquipmentListPage;
var _c;
__turbopack_context__.k.register(_c, "EquipmentListPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_HMC%20tracker_src_83af36e3._.js.map