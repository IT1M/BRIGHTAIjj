import React from 'react';
import Navbar from '../navigation/Navbar';
import WhatsAppButton from '../contact/WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 rtl">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <WhatsAppButton />
    </div>
  );
}