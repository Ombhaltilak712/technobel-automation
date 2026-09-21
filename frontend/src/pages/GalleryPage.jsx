import React, { useState } from 'react';
import { Play, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/projectsData';

export default function GalleryPage({ onOpenRFQ }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const fallbackCardImage = 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80';

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const sections =
    activeCategory === 'all'
      ? [...new Set(GALLERY_ITEMS.map((item) => item.sectionTitle))]
      : [
          GALLERY_ITEMS.find((item) => item.category === activeCategory)
            ?.sectionTitle || 'Gallery',
        ];

  return (
    <main className="min-h-screen bg-slate-50 pb-16 font-sans">
      {/* 1. HERO SECTION WITH HERO BG */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <img
          src="/automation-gallery-hero.png"
          alt="Technobel robotic welding automation cell"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80';
          }}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-red-400/40 bg-red-600/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-200">
              Technobel Automation · Project Gallery
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl font-display">
              Automation engineered for real production.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore robotic welding cells, automotive assembly systems, railway fixtures, and custom special-purpose machines built for safer production, consistent quality, and better cycle times.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold">
              {['Robotic welding', 'SPM engineering', 'Turnkey integration'].map((label) => (
                <span key={label} className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
                  ✓ {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </section>

      {/* 3. CATEGORIZED GALLERY GRID SECTIONS */}
      <section className="mx-auto max-w-7xl space-y-12 px-4 pt-12 sm:px-6 lg:px-8">
        {sections.map((sectionTitle) => {
          const items = filteredItems.filter(
            (item) => item.sectionTitle === sectionTitle
          );
          if (!items.length) return null;

          return (
            <div key={sectionTitle}>
              <div className="mb-5 flex items-center gap-3 border-b border-slate-300 pb-3">
                <span className="h-3 w-3 rounded-full bg-red-600" />
                <h2 className="text-xl font-extrabold text-slate-900 font-display">
                  {sectionTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
                  >
                    <div className="relative h-52 overflow-hidden bg-slate-950 w-full">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        onError={(e) => {
                          e.target.src = fallbackCardImage;
                        }}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />

                      {/* Brand Watermark Badge */}
                      <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded shadow text-[10px] font-extrabold text-slate-900 border border-slate-200">
                        <span className="text-red-600">Technobel</span> Automation
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/10 group-hover:bg-slate-950/25 transition-colors">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-red-600 text-white shadow-xl transition group-hover:scale-110">
                          <Play className="ml-1 h-6 w-6 fill-current" />
                        </span>
                      </div>
                      <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-600" />
                    </div>
                    <div className="min-h-20 p-4 flex flex-col justify-between">
                      <h3 className="text-sm font-bold leading-6 text-slate-800 group-hover:text-red-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-brand-blue flex items-center gap-1">
                        <span>View system details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. LIGHTBOX SYSTEM DETAILS MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-slate-900 text-white shadow-2xl border border-slate-700">
            <button
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-slate-800 p-2 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="relative flex h-80 items-center justify-center bg-black sm:h-96">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                onError={(e) => {
                  e.target.src = fallbackCardImage;
                }}
                className="h-full max-w-full object-contain opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/45">
                <Play className="h-14 w-14 rounded-full bg-red-600 p-4 fill-white shadow-2xl animate-pulse" />
                <span className="rounded bg-slate-900/80 px-3 py-1 text-xs text-slate-200 border border-slate-700">
                  Technobel Automation System Demo
                </span>
              </div>
            </div>

            <div className="space-y-4 border-t border-slate-800 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                {selectedItem.sectionTitle}
              </span>
              <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
              <p className="text-sm text-slate-300 leading-relaxed">{selectedItem.caption}</p>

              <button
                type="button"
                onClick={() => {
                  setSelectedItem(null);
                  onOpenRFQ?.(selectedItem);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold hover:bg-red-700 shadow-md transition-colors"
              >
                Inquire For This System <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex flex-wrap gap-4 border-t border-slate-800 pt-4 text-xs text-slate-400">
                <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <ShieldCheck className="h-4 w-4" /> CE safety and poka-yoke tested
                </span>
                <span>• Kuruli, Khed, Pune shopfloor</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
