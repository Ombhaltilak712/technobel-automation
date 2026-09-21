import React, { useState } from 'react';
import { Play, Maximize2, X, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/projectsData';

export default function GalleryPage({ onOpenRFQ }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  // Group items by section when 'all' is selected
  const sections =
    activeCategory === 'all'
      ? Array.from(new Set(GALLERY_ITEMS.map((item) => item.sectionTitle)))
      : [GALLERY_ITEMS.find((i) => i.category === activeCategory)?.sectionTitle || 'Gallery'];

  return (
    <div className="space-y-12 pb-16 bg-slate-50 min-h-screen">
      
      {/* Top Header Banner */}
      <section className="bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark text-white py-14 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="bg-red-600/30 text-red-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/40">
            Industrial Video & Photo Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Robotic Welding Systems & Automation Gallery
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Explore turnkey robotic welding lines, two-wheeler frame cells, four-wheeler automotive lines, railway component automation, and custom Special Purpose Machines (SPMs).
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 glass-panel bg-white p-3 rounded-2xl shadow-sm border border-slate-200">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </section>

      {/* Categorized Gallery Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {sections.map((sectionTitle, sIdx) => {
          const sectionItems = filteredItems.filter((i) => i.sectionTitle === sectionTitle);
          if (sectionItems.length === 0) return null;

          return (
            <div key={sIdx} className="space-y-4">
              
              {/* Category Section Title with Icon */}
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <span className="w-3 h-3 rounded-full bg-red-600"></span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-display">
                  {sectionTitle}
                </h3>
              </div>

              {/* 4-Column Video Grid matching Reference Screenshot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sectionItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="bg-white rounded-xl border border-slate-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col justify-between"
                  >
                    {/* Media Thumbnail Container */}
                    <div className="relative h-48 bg-slate-950 overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />

                      {/* Top Right Watermark Brand Badge matching reference */}
                      <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded shadow text-[10px] font-extrabold text-brand-dark flex items-center gap-1 border border-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                        <span className="text-red-600">Technobel</span> Automation
                      </div>

                      {/* Center Play Icon Button Overlay for Video Items */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-600 transition-all border-2 border-white">
                          <Play className="w-5 h-5 fill-white translate-x-0.5" />
                        </div>
                      </div>

                      {/* Video Player Bottom Control Bar Simulation */}
                      <div className="absolute bottom-0 inset-x-0 h-1 bg-red-600"></div>
                    </div>

                    {/* Bottom Title Bar matching reference image layout */}
                    <div className="p-3 bg-white border-t border-slate-100 text-center min-h-[56px] flex items-center justify-center">
                      <h4 className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </section>

      {/* Interactive Lightbox / Video Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full border border-slate-700 overflow-hidden relative text-white">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Preview Canvas */}
            <div className="h-96 bg-black relative flex items-center justify-center">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="max-h-full max-w-full object-contain opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/50">
                <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl animate-pulse">
                  <Play className="w-8 h-8 fill-white translate-x-0.5" />
                </div>
                <span className="text-xs font-mono text-slate-200 bg-slate-900/80 px-3 py-1 rounded border border-slate-700">
                  Technobel Automation System Demo
                </span>
              </div>
            </div>

            {/* Modal Bottom Info & Quote Action */}
            <div className="p-6 space-y-4 bg-slate-900 border-t border-slate-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-red-500 text-xs font-bold uppercase tracking-wider">
                    {selectedItem.sectionTitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{selectedItem.title}</h3>
                  <p className="text-xs text-slate-300 mt-1">{selectedItem.caption}</p>
                </div>

                <button
                  onClick={() => {
                    setSelectedItem(null);
                    if (onOpenRFQ) onOpenRFQ(selectedItem);
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Inquire For This System</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" /> Certified CE Safety & Poka-Yoke Tested
                </span>
                <span>• Kuruli, Khed, Pune Shopfloor</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
