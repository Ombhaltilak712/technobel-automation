import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Zap } from 'lucide-react';
import { CORE_VALUES } from '../data/companyData';

export default function CoreValuesSection() {
  const valueIcons = {
    ShieldCheck: ShieldCheck,
    Award: Award,
    Users: Users,
    Zap: Zap,
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <span className="text-brand-blue text-xs font-bold uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
          Our Guiding Philosophy
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
          Our Core <span className="text-brand-blue">Values</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Driven by technocrat leadership, our foundational principles ensure high operational integrity, zero defect engineering, and complete customer fulfillment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CORE_VALUES.map((item, idx) => {
          const IconComp = valueIcons[item.icon] || ShieldCheck;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center border border-brand-blue/20">
                <IconComp className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
