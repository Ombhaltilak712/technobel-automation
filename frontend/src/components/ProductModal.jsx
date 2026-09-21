import React from 'react';
import { X, CheckCircle2, ShieldAlert, Cpu, ArrowRight, Download } from 'lucide-react';
import ThreeCADVisualizer from './ThreeCADVisualizer';

export default function ProductModal({ product, onClose, onInquire }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 relative">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-brand-dark text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div>
            <span className="text-brand-amber text-xs font-semibold uppercase tracking-wider bg-brand-amber/10 px-2.5 py-0.5 rounded border border-brand-amber/20">
              Technical Spec Sheet
            </span>
            <h2 className="text-xl font-bold text-white mt-1">{product.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          
          {/* 3D CAD Visualizer & Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ThreeCADVisualizer modelType={product.cadModelType} title={product.title} />
            <div className="rounded-xl overflow-hidden shadow border border-slate-200 h-64 bg-slate-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
              System Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.shortDesc} Specially engineered by Technobel Automation to deliver zero-defect reliability, ergonomic ease of use, and maximum throughput.
            </p>
          </div>

          {/* Key Specs Table */}
          {product.specs && (
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                Technical Specifications & Parameters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="bg-slate-50 border border-slate-200 p-3 rounded-lg">
                    <span className="text-slate-500 uppercase font-semibold text-[10px] block">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="font-bold text-slate-800 text-sm mt-0.5 block">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {product.features && (
            <div>
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                Engineering Highlights & Safety Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-emerald-50/60 border border-emerald-100 p-2.5 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Cpu className="w-4 h-4 text-brand-blue" />
              <span>Full EPLAN Schematics Available Upon RFQ</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 border border-slate-300"
              >
                Close Spec
              </button>
              <button
                onClick={() => {
                  onClose();
                  onInquire(product);
                }}
                className="w-1/2 sm:w-auto bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow flex items-center justify-center gap-2 transition-colors"
              >
                <span>Inquire for Product</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
