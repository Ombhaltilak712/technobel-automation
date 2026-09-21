import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, X, CheckCircle2, ArrowRight, Layers, FileText } from 'lucide-react';
import { CASE_STUDIES, GALLERY_ITEMS } from '../data/projectsData';

export default function Projects({ onOpenRFQ }) {
  const [activeTab, setActiveTab] = useState('case-studies');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="bg-brand-blue/30 text-brand-blue-light text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-brand-blue/40">
            Proven Track Record
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Turnkey SPM Projects & High-Resolution Gallery
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Explore real-world case studies detailing how Technobel Automation engineered zero-defect SPM machines and robotic assembly lines for top tier automotive and manufacturing OEMs.
          </p>
        </div>
      </section>

      {/* Main Switcher Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex justify-center">
          <div className="bg-slate-200/80 p-1.5 rounded-2xl flex items-center gap-2 max-w-md w-full">
            <button
              onClick={() => setActiveTab('case-studies')}
              className={`w-1/2 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'case-studies'
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'text-slate-700 hover:text-brand-blue'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Real Case Studies</span>
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`w-1/2 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'gallery'
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'text-slate-700 hover:text-brand-blue'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Machine Gallery</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CASE STUDIES */}
        {activeTab === 'case-studies' && (
          <div className="space-y-8">
            {CASE_STUDIES.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card bg-white rounded-3xl p-8 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="rounded-2xl shadow-lg border-2 border-slate-200 w-full h-72 object-cover"
                  />
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-brand-blue/10 text-brand-blue text-xs font-bold px-3 py-1 rounded-full border border-brand-blue/20">
                      {study.category}
                    </span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-xs font-semibold text-slate-600">{study.client}</span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-xs font-medium text-brand-amber">{study.location}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-brand-dark">{study.title}</h3>

                  <div className="space-y-2 text-xs">
                    <p className="text-slate-700">
                      <strong className="text-slate-900 font-bold">The Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-slate-700">
                      <strong className="text-slate-900 font-bold">Technobel Solution:</strong> {study.solution}
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Empirical Results Achieved:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {study.results.map((res, i) => (
                        <div key={i} className="flex items-start gap-2 text-emerald-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.map((tag, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-600 text-[10px] px-2.5 py-0.5 rounded font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => onOpenRFQ(study)}
                      className="bg-brand-blue text-white px-5 py-2 rounded-xl text-xs font-semibold shadow hover:bg-brand-blue-dark transition-colors flex items-center gap-1.5"
                    >
                      <span>Inquire Similar Machine</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* TAB 2: HIGH RES GALLERY WITH LIGHTBOX */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 cursor-pointer bg-slate-900 h-64"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-full text-slate-800 shadow opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-brand-blue" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[10px] font-bold text-brand-amber uppercase tracking-wider bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700 inline-block">
                    {item.category}
                  </span>
                  <h4 className="text-base font-bold text-white leading-tight">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Popup Dialog */}
      {selectedGalleryItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full border border-slate-700 overflow-hidden relative text-white">
            <button
              onClick={() => setSelectedGalleryItem(null)}
              className="absolute top-4 right-4 z-10 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="h-96 bg-black flex items-center justify-center">
              <img
                src={selectedGalleryItem.imageUrl}
                alt={selectedGalleryItem.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6 space-y-2 bg-slate-900">
              <span className="text-brand-amber text-xs font-semibold uppercase">{selectedGalleryItem.category}</span>
              <h3 className="text-xl font-bold text-white">{selectedGalleryItem.title}</h3>
              <p className="text-xs text-slate-300">{selectedGalleryItem.caption}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
