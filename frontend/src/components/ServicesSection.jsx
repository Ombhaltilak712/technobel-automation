import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Wrench, Truck, Factory, CheckCircle2 } from 'lucide-react';
import { CORE_SERVICES } from '../data/companyData';

export default function ServicesSection({ onOpenRFQ }) {
  const serviceIcons = {
    Cpu: Cpu,
    Bot: Bot,
    Wrench: Wrench,
    Truck: Truck,
    Factory: Factory,
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
          Our <span className="text-red-600">Services</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          We provide comprehensive customer support for industrial automation services including PLC Programming, HMI Graphic Development, VFD Installation & Commissioning, Robotic Cell Integration, SPM Manufacturing, and Machining.
        </p>
      </div>

      {/* Services List Stack */}
      <div className="space-y-8">
        {CORE_SERVICES.map((service, idx) => {
          const IconComponent = serviceIcons[service.icon] || Cpu;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Icon, Title, Description & Supported Brands */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-brand-blue flex items-center justify-center border border-slate-200 shrink-0">
                    <IconComponent className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark leading-tight">{service.title}</h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{service.description}</p>

                {/* Supported Brands Pills (if available) */}
                {service.supportedBrands && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Supported Brands:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.supportedBrands.map((brand, bIdx) => (
                        <span
                          key={bIdx}
                          className="bg-red-50 text-red-700 text-[11px] px-2.5 py-0.5 rounded-full font-medium border border-red-200/70"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    onClick={() => onOpenRFQ && onOpenRFQ(service)}
                    className="text-xs font-bold text-brand-blue hover:text-brand-blue-dark flex items-center gap-1.5"
                  >
                    <span>Inquire for {service.title} →</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Capabilities Two-Column Grid */}
              <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200/80 rounded-xl p-5 space-y-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-2">
                  Our Capabilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {service.capabilities.map((cap, capIdx) => (
                    <div
                      key={capIdx}
                      className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200 text-slate-700 font-medium shadow-2xs hover:border-brand-blue/40 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
