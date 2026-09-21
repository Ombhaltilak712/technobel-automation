import React, { useState } from 'react';
import ServicesSection from '../components/ServicesSection';
import Solutions from './Solutions';

export default function Services({ onOpenRFQ }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="bg-red-600/30 text-red-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/40">
            Industrial Automation & Engineering Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Comprehensive Automation Capabilities & Products
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            From PLC programming and robotic cell integration to custom Special Purpose Machines (SPMs) and heavy structural fabrication.
          </p>
        </div>
      </section>

      {/* Tab Switcher */}
      <div className="flex justify-center px-4">
        <div className="bg-slate-200 p-1.5 rounded-2xl flex items-center gap-2 max-w-md w-full">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-1/2 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'overview'
                ? 'bg-red-600 text-white shadow'
                : 'text-slate-700 hover:text-red-600'
            }`}
          >
            Services & Capabilities
          </button>
          <button
            onClick={() => setActiveTab('catalog')}
            className={`w-1/2 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'catalog'
                ? 'bg-red-600 text-white shadow'
                : 'text-slate-700 hover:text-red-600'
            }`}
          >
            Interactive Product Catalog
          </button>
        </div>
      </div>

      {activeTab === 'overview' ? (
        <ServicesSection onOpenRFQ={onOpenRFQ} />
      ) : (
        <Solutions onOpenRFQ={onOpenRFQ} />
      )}
    </div>
  );
}
