import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_BRANDS } from '../data/companyData';
import ClientLogo from './ClientLogo';

export default function ClientSection() {
  return (
    <section className="bg-slate-50 py-16 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
            Client Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our Trusted Clients
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are proud to work with industry leaders and global giants who trust us to deliver superior industrial automation and manufacturing solutions.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {CLIENT_BRANDS.map((client) => (
            <motion.div
              key={client.id}
              whileHover={{ y: -5, scale: 1.03 }}
              className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col items-center justify-center text-center space-y-2 group h-36"
            >
              <div className="h-12 w-full flex items-center justify-center px-2">
                <ClientLogo brandId={client.id} className="h-10 w-full max-w-[150px] object-contain" />
              </div>
              <div className="pt-1 border-t border-slate-100 w-full">
                <h4 className="font-extrabold text-slate-800 text-[11px] leading-tight truncate">
                  {client.name}
                </h4>
                <span className="text-[9px] font-semibold text-brand-blue uppercase tracking-wider block mt-0.5">
                  {client.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous Sliding Marquee Ribbon */}
        <div className="pt-6 border-t border-slate-200/80 overflow-hidden relative">
          <div className="flex animate-marquee space-x-6 min-w-full">
            {[...CLIENT_BRANDS, ...CLIENT_BRANDS].map((client, i) => (
              <div
                key={i}
                className="shrink-0 bg-white border border-slate-200 rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-sm hover:border-brand-blue/40 transition-colors"
              >
                <div className="h-6 w-24 flex items-center justify-center">
                  <ClientLogo brandId={client.id} className="h-5 w-auto" />
                </div>
                <span className="text-xs font-bold text-slate-700">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
