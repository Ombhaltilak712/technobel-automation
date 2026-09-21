import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, CheckCircle2, Zap } from 'lucide-react';
import ThreeRobotCanvas from '../components/ThreeRobotCanvas';
import ServicesSection from '../components/ServicesSection';
import ClientSection from '../components/ClientSection';
import CoreValuesSection from '../components/CoreValuesSection';
import { KEY_METRICS, FOUNDERS } from '../data/companyData';

export default function Home({ onOpenRFQ }) {
  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. HERO SECTION WITH 3D CANVAS */}
      <section className="relative pt-8 pb-12 overflow-hidden bg-grid-lines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-600 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                <Zap className="w-3.5 h-3.5 text-brand-amber animate-pulse" />
                <span>Next-Gen Industrial Robotics & Automation in Kuruli, Pune</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
                Empowering Industries with <span className="text-brand-blue">Intelligent Automation</span> — Engineered for Results.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Technobel Automation delivers smart, scalable automation solutions from stand-alone Special Purpose Machines (SPMs) to complete turnkey robotic assembly lines.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/services"
                  className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 group"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={onOpenRFQ}
                  className="bg-white hover:bg-slate-50 text-brand-dark border-2 border-slate-300 hover:border-brand-blue px-7 py-3.5 rounded-xl font-bold text-sm shadow-sm transition-all flex items-center gap-2"
                >
                  <span>Request a Quote</span>
                </button>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>CE & ISO Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-amber shrink-0" />
                  <span>Zero Defect Poka-Yoke</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24/7 Site Support</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: 3D Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <ThreeRobotCanvas />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. KEY HIGHLIGHTS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel bg-white/90 rounded-2xl p-8 shadow-xl border border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {KEY_METRICS.map((metric, idx) => (
              <div key={idx} className={`pt-4 md:pt-0 ${idx !== 0 ? 'md:pl-6' : ''} text-center md:text-left`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-blue font-display tracking-tight">
                  {metric.value}
                  <span className="text-red-600">{metric.suffix}</span>
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">{metric.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{metric.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION (MATCHING IMAGE 0 REFERENCE) */}
      <ServicesSection onOpenRFQ={onOpenRFQ} />

      {/* 4. OUR TRUSTED CLIENTS SECTION (MATCHING IMAGE 1 REFERENCE) */}
      <ClientSection />

      {/* 5. CORE VALUES SECTION (MATCHING IMAGE 2 REFERENCE) */}
      <CoreValuesSection />

      {/* 6. FOUNDER VISION PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card bg-gradient-to-r from-white via-slate-50 to-blue-50/40 rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 text-center">
            <div className="relative inline-block group">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue to-red-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-300"></div>
              <img
                src={FOUNDERS[0].image}
                alt={FOUNDERS[0].name}
                className="relative rounded-2xl w-64 h-80 object-cover shadow-2xl border-4 border-white mx-auto"
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-5">
            <span className="text-red-600 text-xs font-bold uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              Technocrat Leadership
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Leadership Driven by Precision & Quality Fulfillment
            </h2>

            <blockquote className="text-base text-slate-700 italic leading-relaxed border-l-4 border-brand-blue pl-4">
              "Our mission at Technobel Automation is simple: engineer machines that eliminate downtime, guarantee operator safety, and elevate manufacturing productivity across India and global markets."
            </blockquote>

            <div>
              <h4 className="text-lg font-bold text-brand-dark">{FOUNDERS[0].name}</h4>
              <p className="text-xs font-semibold text-brand-blue">{FOUNDERS[0].role}</p>
              <p className="text-xs text-slate-500 mt-1">{FOUNDERS[0].bio}</p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              {FOUNDERS[0].expertise.map((item, idx) => (
                <span key={idx} className="bg-white border border-slate-200 text-slate-700 text-xs px-3 py-1 rounded-full shadow-sm font-medium">
                  ✓ {item}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-dark transition-colors"
              >
                <span>Read Full Corporate Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
