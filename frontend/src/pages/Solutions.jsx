import React, { useState } from 'react';
import { Search, Filter, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/solutionsData';
import ProductModal from '../components/ProductModal';

export default function Solutions({ onOpenRFQ }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = PRODUCTS.filter((prod) => {
    const matchesCat = activeCategory === 'all' || prod.category === activeCategory;
    const matchesSearch =
      prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="bg-brand-blue/30 text-brand-blue-light text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-brand-blue/40">
            Interactive Product Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Industrial Automation & Special Purpose Machines
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Browse our engineered solutions, high-precision SPM rigs, robotics, and control panels. Click on any product to view 3D CAD previews and technical spec sheets.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-panel bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search machines, PLCs, SPMs..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-blue outline-none bg-slate-50"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-card bg-white rounded-2xl border border-slate-200 shadow-industrial hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Product Card Image & Badge */}
              <div>
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-brand-dark/80 backdrop-blur-md text-brand-amber text-[10px] font-bold px-2.5 py-1 rounded-md border border-slate-700 shadow">
                    {product.badge}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-blue transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {product.shortDesc}
                  </p>

                  {/* Highlights Pill list */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {product.features &&
                      product.features.slice(0, 2).map((feat, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] px-2 py-0.5 rounded font-medium truncate max-w-full">
                          ✓ {feat}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-brand-dark text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-slate-300"
                >
                  <Eye className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Technical Spec & 3D</span>
                </button>
                <button
                  onClick={() => onOpenRFQ(product)}
                  className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
            <Sparkles className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700">No solutions matched your search.</h3>
            <p className="text-xs text-slate-500">Try clearing filters or search terms.</p>
          </div>
        )}
      </section>

      {/* Technical Spec Sheet Modal Popup */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquire={(product) => {
          onOpenRFQ(product);
        }}
      />

    </div>
  );
}
