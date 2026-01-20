'use client';

import { useState } from 'react';
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
  Plus,
  Menu,
  X
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          <div className="hidden sm:flex items-center gap-3">
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

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 absolute w-full left-0 top-16 min-h-screen">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center px-3 py-4 rounded-md text-base font-medium transition-colors border-l-2',
                    isActive
                      ? 'bg-blue-500/10 border-blue-500 text-white'
                      : 'border-transparent text-slate-400 hover:bg-white/5 hover:text-white'
                  )}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/vehicles/new"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-bold rounded-lg text-black bg-white hover:bg-slate-200 transition-colors"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Vehicle
              </Link>
              <Link
                href="/equipment/new"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Equipment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
