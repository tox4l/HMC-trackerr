'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HMCLogo } from './HMCLogo';
import { cn } from '@/lib/utils';
import {
  Home,
  Car,
  Wrench,
  Bell,
  FileText,
  Settings,
  Plus
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Fleet Management', href: '/vehicles', icon: Car },
  { name: 'Equipment Inventory', href: '/equipment', icon: Wrench },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'System Settings', href: '/settings', icon: Settings },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <HMCLogo size={36} />
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'border-blue-500 text-white'
                        : 'border-transparent text-slate-400 hover:border-white/20 hover:text-white'
                    )}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/vehicles/new"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded-lg text-black bg-white hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Vehicle
            </Link>
            <Link
              href="/equipment/new"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Equipment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}