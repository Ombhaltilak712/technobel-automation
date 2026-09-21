import React, { useState } from 'react';
import { MessageSquare, X, Phone, Mail, ArrowRight, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function RFQDrawer({ onOpenRFQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="glass-card bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-5 shadow-2xl w-80 mb-2 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h4 className="font-bold text-slate-800 text-sm">Quick Engineer Support</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <p className="text-slate-600">
              Need immediate assistance with machine specs or custom quotes? Contact our engineering office directly.
            </p>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:border-brand-blue hover:text-brand-blue transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-brand-amber shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:border-brand-blue hover:text-brand-blue transition-colors font-medium text-[11px] truncate"
            >
              <Mail className="w-4 h-4 text-brand-amber shrink-0" />
              <span className="truncate">{COMPANY_INFO.email}</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenRFQ();
              }}
              className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white py-2.5 rounded-xl font-semibold text-xs shadow flex items-center justify-center gap-2 transition-all mt-2"
            >
              <Zap className="w-3.5 h-3.5 text-brand-amber" />
              <span>Open Detailed RFQ Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Dock Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-blue hover:bg-brand-blue-dark text-white p-3.5 md:px-5 md:py-3.5 rounded-full shadow-2xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95 group border-2 border-white"
        aria-label="Quick Contact RFQ Floating Drawer"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6 text-brand-amber" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-brand-blue"></span>
        </div>
        <span className="font-bold text-sm hidden md:inline tracking-wide">
          Quick RFQ Dock
        </span>
      </button>
    </div>
  );
}
