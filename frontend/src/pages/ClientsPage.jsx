import React from 'react';
import ClientSection from '../components/ClientSection';

export default function ClientsPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="bg-brand-blue/30 text-brand-blue-light text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-brand-blue/40">
            Client Ecosystem
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Trusted Industry Clients
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Leading automotive OEMs, robotic cell integrators, and global enterprise manufacturers across India trust Technobel Automation for turnkey project delivery.
          </p>
        </div>
      </section>

      <ClientSection />
    </div>
  );
}
