import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HMC Equipment Management System | Hamad Medical Corporation",
  description: "Professional equipment and vehicle maintenance management system for Hamad Medical Corporation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-[-120px] right-[-80px] h-72 w-72 rounded-full bg-blue-500/20 blur-[140px] float-slow" />
          <div className="absolute bottom-[-160px] left-[-60px] h-80 w-80 rounded-full bg-emerald-500/20 blur-[160px] float-slow" />
          <div className="absolute top-[30%] left-[40%] h-64 w-64 rounded-full bg-cyan-500/10 blur-[140px]" />
        </div>
        <Navigation />
        <div className="relative z-10 pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
