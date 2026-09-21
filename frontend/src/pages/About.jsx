import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Layers, Cpu, Terminal, PlayCircle, CheckCircle2, MapPin, Building2, Users, ShieldCheck, Award } from 'lucide-react';
import { COMPANY_INFO, FOUNDERS, WORKFLOW_STEPS } from '../data/companyData';

export default function About() {
  const roadmapIcons = {
    Layers: Layers,
    Cpu: Cpu,
    Terminal: Terminal,
    PlayCircle: PlayCircle,
    CheckCircle2: CheckCircle2,
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="bg-brand-amber/20 text-brand-amber text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-brand-amber/30">
            About Technobel Automation
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Engineering Precision. Driving Manufacturing Excellence.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Headquartered in Kuruli, Khed, Pune, Technobel Automation is a premier engineering solutions provider specializing in custom Special Purpose Machines (SPMs), industrial robotics, and PLC/SCADA control panel fabrication.
          </p>
        </div>
      </section>

      {/* Corporate Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card bg-white p-8 rounded-2xl border border-slate-200 shadow-lg space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center border border-brand-blue/20">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark">Our Corporate Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              "{COMPANY_INFO.vision}"
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-blue">
              <ShieldCheck className="w-4 h-4" /> Zero Defect Commitment
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="glass-card bg-white p-8 rounded-2xl border border-slate-200 shadow-lg space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-brand-amber flex items-center justify-center border border-amber-500/20">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark">Our Corporate Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              "{COMPANY_INFO.mission}"
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-amber">
              <Award className="w-4 h-4" /> Productivity & Safety First
            </div>
          </motion.div>

        </div>
      </section>

      {/* Founders & Executive Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
            Executive Leadership
          </span>
          <h2 className="text-3xl font-extrabold text-brand-dark">Founder & Managing Director</h2>
          <p className="text-slate-600 text-sm">
            Technocrat leadership committed to precision engineering standards, zero-defect execution, and continuous skill development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {FOUNDERS.map((founder, idx) => (
            <div
              key={idx}
              className="glass-card bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-4 text-center">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="rounded-2xl w-56 h-72 object-cover mx-auto shadow-lg border-4 border-white"
                />
              </div>

              <div className="md:col-span-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-brand-dark">{founder.name}</h3>
                  <p className="text-sm font-bold text-brand-blue">{founder.role}</p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{founder.bio}</p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Core Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((exp, i) => (
                      <span key={i} className="bg-slate-100 text-slate-800 text-xs px-3 py-1 rounded-lg font-medium border border-slate-200">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-500 flex flex-wrap gap-4">
                  <span>Phone: {founder.phone}</span>
                  <span>Email: {founder.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Organizational Workflow & Engineering Rigor (5-Stage Roadmap) */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-brand-amber text-xs font-bold uppercase tracking-widest bg-brand-amber/10 px-3 py-1 rounded-full border border-brand-amber/20">
              Engineering Rigor
            </span>
            <h2 className="text-3xl font-extrabold text-white">5-Step Turnkey Project Workflow</h2>
            <p className="text-slate-400 text-sm">
              From raw 3D CAD models to certified site commissioning, our structured roadmap ensures zero flaws.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {WORKFLOW_STEPS.map((step, idx) => {
              const IconComponent = roadmapIcons[step.icon] || CheckCircle2;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-4 hover:border-brand-blue transition-colors relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-brand-amber font-display">{step.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-brand-blue transition-colors">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Infrastructure & Facility Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-brand-blue text-xs font-bold uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
              Infrastructure & Facility
            </span>

            <h2 className="text-3xl font-extrabold text-brand-dark">
              State-of-the-Art Kuruli Engineering Facility
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Located strategically in the Kuruli, Khed industrial corridor near Chakan, Pune, Technobel Automation houses heavy fabrication bays, Rittal panel assembly shopfloors, and testing stations equipped with high-precision calibration tools.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <Building2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-800 text-sm">SPM Assembly Bay</strong>
                  <span className="text-slate-500">Overhead crane setup for heavy machine assembly.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <Users className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-800 text-sm">Employee Welfare</strong>
                  <span className="text-slate-500">Ergonomic workstations & continuous skill development.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-100 flex items-start gap-3 text-xs text-brand-dark">
              <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Official Registered Address:</strong>
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
              alt="Technobel Automation Plant Facility"
              className="rounded-2xl shadow-xl border-4 border-white object-cover w-full h-80"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
