# HMC Equipment Management System
## Hamad Medical Corporation - Professional Fleet & Equipment Tracking

A comprehensive, government-grade management system for tracking vehicles, equipment, and maintenance schedules for Hamad Medical Corporation.

---

## 🏥 System Overview

The HMC Equipment Management System is a production-ready application designed for professional hospital fleet management. It provides:

- **Complete Vehicle Management**: Track all emergency response vehicles, ambulances, and medical helicopters
- **Equipment Inventory**: Comprehensive tracking of all equipment across all vehicles
- **Automated Maintenance Alerts**: Scheduled notifications sent automatically to assigned personnel
- **Maintenance Cost Tracking**: Full financial oversight of maintenance operations
- **Professional Reporting**: Generate detailed reports for management review
- **Role-Based Access Control**: Secure, hierarchical access management

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

```bash
cd "C:\Users\musal\OneDrive\Desktop\HMC tracker"
npm install
```

### Development Mode

```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

---

## 📋 Key Features

### 1. Fleet Management
- **Vehicles Supported**:
  - Emergency Response Cars (Toyota Prado - Charlie designation)
  - Ambulances (Ford Alpha/Bravo designation)
  - Medical Helicopters
  
- **Vehicle Information Tracked**:
  - Registration and License Plate Numbers
  - Current Mileage / Flight Hours
  - Inspection Schedules
  - Operational Status
  - Assigned Personnel

### 2. Equipment Inventory
- **Individual Equipment Pages**: Every piece of equipment has its own dedicated page
- **Equipment Details**:
  - Serial Number
  - Manufacturer & Model
  - Installation Location
  - Maintenance Cost (QAR)
  - Last Maintenance Date
  - Next Maintenance Due Date
  - Priority Level (Critical/High/Medium/Low)
  - Assigned Technician

### 3. Automated Alert System

#### How It Works
The system automatically sends maintenance reminders via EMAIL and SMS to assigned personnel.

#### Alert Schedule
- **7 days before** maintenance due date
- **3 days before** maintenance due date
- **1 day before** maintenance due date
- **Daily** for overdue maintenance (until completed)

#### Setup Instructions

**Step 1: Configure Environment Variables**

Create a `.env.local` file in the project root:

```env
# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@hamad.qa
SMTP_PASS=your-app-password
SMTP_FROM=HMC Equipment Management <no-reply@hamad.qa>

# SMS Configuration (Twilio)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_FROM=+974XXXXXXXX

# Cron Job Security
CRON_SECRET=your-secure-random-string-here
```

**Step 2: Set Up Scheduled Task (Windows)**

1. Open **Task Scheduler**
2. Create a new task: "HMC Equipment Alert System"
3. Set trigger: Daily at 8:00 AM
4. Set action: Start a program
   ```
   powershell.exe -Command "Invoke-WebRequest -Uri 'http://localhost:3000/api/alerts/automated' -Method POST -Headers @{'Authorization'='Bearer your-secure-random-string-here'}"
   ```

**Step 3: Test the System**

```bash
# Test alert generation (without sending)
curl http://localhost:3000/api/alerts/automated

# Trigger actual alert sending
curl -X POST http://localhost:3000/api/alerts/automated \
  -H "Authorization: Bearer your-secure-random-string-here"
```

### 4. Add New Vehicles & Equipment

#### Add Vehicle
1. Click **"Add Vehicle"** button in navigation
2. Fill in all required fields:
   - Vehicle Name
   - Type (Car/Ambulance/Helicopter)
   - Model (Toyota Prado for Charlie, Ford for Alpha/Bravo)
   - License Plate
   - Registration Number
   - Location
   - Mileage/Flight Hours
3. Click **"Create Vehicle"**

#### Add Equipment
1. Click **"Add Equipment"** button in navigation
2. Select vehicle to assign equipment to
3. Fill in equipment details:
   - Equipment Name
   - Type (Engine, Brakes, Medical Equipment, etc.)
   - Location on vehicle
   - Serial Number
   - Manufacturer & Model
   - Maintenance Interval (days)
   - Estimated Maintenance Cost (QAR)
   - Priority Level
4. Click **"Create Equipment"**

---

## 🎨 User Interface

### Professional Design Principles
- **Clean White Background**: Professional government-standard appearance
- **Color Coding**:
  - **Blue (#1e40af)**: Primary actions, navigation
  - **Green (#16a34a)**: Success states, up-to-date maintenance
  - **Yellow (#eab308)**: Warnings, maintenance due soon
  - **Red (#dc2626)**: Critical alerts, overdue maintenance
  - **Purple (#7c3aed)**: Information, reports
  - **Black/Gray**: Text and borders for formal appearance

- **Clear Button Labels**: Every button has descriptive text
- **Informative Headers**: All sections clearly labeled
- **Accessible Navigation**: All pages reachable from main navigation

---

## 📊 System Pages

### Dashboard (`/`)
- Overview statistics
- Fleet health status
- Priority maintenance queue
- Quick access to all sections

### Fleet Management (`/vehicles`)
- List of all vehicles
- Filter by type, status, location
- Search functionality
- Add new vehicles

### Equipment Inventory (`/equipment`)
- Complete equipment list across all vehicles
- Filter by type, status, priority, vehicle
- Search by name, serial number
- Add new equipment

### Individual Vehicle Pages (`/vehicle/[id]`)
- Complete vehicle details
- All equipment on vehicle
- Maintenance status for each equipment
- Assigned contacts
- Vehicle history

### Individual Equipment Pages (`/equipment/[id]`)
- Detailed equipment information
- Maintenance cost
- Last maintenance date
- Next maintenance due date
- Parent vehicle information
- Assigned technician details

### Notifications (`/notifications`)
- Active alerts
- Send manual reminders
- View alert history
- Contact management

### Reports (`/reports`)
- Maintenance cost analysis
- Fleet status reports
- Equipment compliance tracking
- Export functionality

### System Settings (`/settings`)
- User management
- Role permissions
- Alert preferences
- System configuration

---

## 💾 Database Integration (Production)

For production deployment, integrate with a database system:

### Recommended: PostgreSQL
```bash
npm install pg @prisma/client
npx prisma init
```

Update `schema.prisma` with the data models from `src/types/index.ts`

### Database Schema
- **Vehicles**: Store all vehicle information
- **Equipment**: Store all equipment details
- **MaintenanceRecords**: Track all maintenance activities
- **Contacts**: Personnel and technician information
- **Alerts**: Notification history
- **Users**: System users with role-based access

---

## 🔐 Authentication (Production)

For production, implement authentication:

```bash
npm install next-auth
```

Recommended providers:
- **Active Directory / LDAP**: For hospital staff integration
- **OAuth 2.0**: For government SSO systems
- **Multi-Factor Authentication**: For enhanced security

---

## 📞 Support & Maintenance

### System Administrator Contact
- **Email**: admin@hamad.qa
- **Phone**: +974 XXXX XXXX
- **Emergency**: Contact IT Department

### Backup Schedule
- **Daily**: Automated database backups at 2:00 AM
- **Weekly**: Full system backup every Sunday
- **Monthly**: Archive to off-site storage

### Maintenance Windows
- **Routine**: Every Sunday 2:00 AM - 4:00 AM
- **Emergency**: As needed with advance notice

---

## 📄 License

© 2026 Hamad Medical Corporation. All rights reserved.

This system is proprietary software developed for Hamad Medical Corporation.
Unauthorized access, use, or distribution is prohibited.

---

## 🔧 Technical Stack

- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: Nodemailer (SMTP)
- **SMS**: Twilio
- **Deployment**: Production-ready build system

---

## 📝 Version History

### Version 1.0.0 (January 2026)
- Initial production release
- Complete fleet management
- Equipment inventory system
- Automated alert scheduling
- Professional UI/UX design
- Full documentation

---

**For technical support or feature requests, contact the HMC IT Department.**