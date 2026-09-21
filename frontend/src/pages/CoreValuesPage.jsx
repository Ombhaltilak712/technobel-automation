import React from 'react';
import CoreValuesSection from '../components/CoreValuesSection';

export default function CoreValuesPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="bg-brand-amber/20 text-brand-amber text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-brand-amber/30">
            Corporate Culture & Integrity
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Core Values & Engineering Rigor
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            The foundation of Technobel Automation rests upon quality fulfillment, safety compliance, zero-defect engineering, and client-centric execution.
          </p>
        </div>
      </section>

      <CoreValuesSection />
    </div>
  );
}
