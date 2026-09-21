import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { COMPANY_INFO, CLIENT_BRANDS } from '../data/companyData';

export default function Footer({ onOpenRFQ }) {
  return (
    <footer className="bg-brand-dark text-white border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Callout Banner with High Contrast Dark Gradient Background */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-brand-dark border border-slate-700/80 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-amber/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="space-y-2 relative z-10">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-500/15 px-3 py-1 rounded-full inline-block mb-1 border border-amber-500/30">
              Ready for Automation Upgrade?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Need a Custom SPM or Robotic Automation Solution?
            </h3>
            <p className="text-slate-300 text-sm font-medium">
              Consult with our lead engineering team in Kuruli, Pune for detailed CAD design & technical proposals.
            </p>
          </div>
          <button
            onClick={onOpenRFQ}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl shadow-xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0 group hover:scale-105"
          >
            <span>Request Technical Quote</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <img
              src="/assets/logo.png"
              alt="Technobel Automation Pvt. Ltd."
              className="h-12 w-auto bg-white/95 p-1.5 rounded-lg shadow"
            />
            <p className="text-slate-400 text-xs leading-relaxed">
              Technobel Automation Pvt. Ltd. is a pioneer in turnkey industrial automation, robotic cells, PLC/SCADA control panel integration, and Special Purpose Machines (SPMs).
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Kuruli Engineering Facility Active</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Navigation & Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/" className="hover:text-brand-amber transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" /> Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-amber transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" /> About Us & Leadership
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-amber transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" /> Services & Capabilities
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-brand-amber transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" /> Turnkey Projects
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-amber transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" /> Robotics Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-amber transition-colors flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" /> Contact Us & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Trusted Client Brands
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {CLIENT_BRANDS.map((client) => (
                <span
                  key={client.id}
                  className="bg-slate-800/90 text-slate-200 text-[11px] px-2.5 py-1 rounded-md border border-slate-700 font-semibold"
                >
                  {client.name}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
              Serving Automotive OEMs, EV assembly lines, and heavy precision manufacturers.
            </p>
          </div>

          {/* Column 4: Contact & Factory Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Factory Location
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-300">
                  {COMPANY_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Technobel Automation Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Engineering Automation. Driving Productivity.</span>
            <span>Kuruli, Pune, MH, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
