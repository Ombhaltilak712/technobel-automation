import React from 'react';
import { motion } from 'framer-motion';
import { Car, PackageCheck, Pill, Factory, CircuitBoard, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Industries({ onOpenRFQ }) {
  const industries = [
    {
      title: 'Automotive & EV Manufacturing',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      description: 'Turnkey body-in-white robotic welding cells, gear shifter Poka-Yoke assembly lines, and EV battery pack inspection rigs.',
      useCases: ['Gear Shifter Assembly & Testing', 'Robotic MIG / Spot Welding', 'Servo Shaft Pressing Rigs', 'Chakan & Bhosari OEM Supply'],
    },
    {
      title: 'FMCG & Packaging',
      icon: PackageCheck,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      description: 'High-speed pick and place robotics, automated carton case packers, palletizing lines, and VFD conveyor synchronization.',
      useCases: ['Pick & Place Delta / Scara Robotics', 'High Speed Bottle Capping & Weight Check', 'Bar Code & QR Traceability', 'Ranjangaon Industrial Lines'],
    },
    {
      title: 'Pharmaceuticals & Cleanroom',
      icon: Pill,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      description: 'Cleanroom certified stainless steel SPMs, leak testing manifolds, and Cognex vision validation for blister packs.',
      useCases: ['Differential Air Leak Testing Rigs', 'Vial & Ampoule Vision Check', 'IP67 Stainless Steel Panels', 'Zero-Contamination Grippers'],
    },
    {
      title: 'Heavy Engineering & Machining',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      description: 'Heavy duty load frames, 20-Ton hydraulic & servo pressing SPMs, automated gantry loaders, and heavy part turntables.',
      useCases: ['20-Ton Servo Pressing Machines', 'Gantry Component Loading', 'Hydraulic Fixture Clamping', 'Heavy Fabrication Welding'],
    },
    {
      title: 'Electronics & Component Manufacturing',
      icon: CircuitBoard,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      description: 'High-precision micro-dispensing, screw driving SPMs, PCB optical inspection (AOI), and ESD safe workbenches.',
      useCases: ['Automated Screw Fastening SPMs', 'Thermal Paste Dispensing Rigs', 'Poka-Yoke Connector Insertion', 'ESD Safe Conveyors'],
    },
    {
      title: 'Warehouse & Logistics',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
      description: 'Palletized powered roller lines, scissor lifts, automated sorting transfer stations, and RFID inventory scanners.',
      useCases: ['Powered Roller Conveyor Lines', 'Automated 90° Pallet Transfers', 'Pneumatic Scissor Lift Tables', 'Warehouse RFID Scanners'],
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="bg-brand-amber/20 text-brand-amber text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-brand-amber/30">
            Sector Expertise
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Tailored Automation for Modern Industries
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            From precision automotive assembly to cleanroom pharmaceutical testing, Technobel Automation delivers field-tested SPM machines and robotic cells engineered to meet strict sector compliance.
          </p>
        </div>
      </section>

      {/* Interactive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="glass-card bg-white rounded-2xl border border-slate-200 shadow-industrial hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 bg-slate-900 overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-tight">{ind.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-slate-600 leading-relaxed">{ind.description}</p>
                    
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">
                        Key Applications & Deployments:
                      </h4>
                      <div className="space-y-1">
                        {ind.useCases.map((useCase, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenRFQ()}
                    className="w-full bg-slate-100 hover:bg-brand-blue hover:text-white text-brand-dark text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all border border-slate-200"
                  >
                    <span>Request Industry Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
