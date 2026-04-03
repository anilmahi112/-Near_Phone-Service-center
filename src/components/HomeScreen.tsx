import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Battery, Smartphone, AudioLines, ChevronRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { cn } from '../lib/utils';

export const HomeScreen: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
  return (
    <div className="py-8 space-y-10">
      {/* Hero */}
      <section className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-headline font-extrabold tracking-tight text-on-surface leading-tight"
        >
          Hello, <span className="text-primary">Artisan</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-on-surface-variant text-lg max-w-xs"
        >
          Your ecosystem is running with surgical precision.
        </motion.p>
      </section>

      {/* Bento Status */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-surface-container-lowest p-6 rounded-[2rem] flex flex-col justify-between shadow-sm border border-outline-variant/10"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-secondary fill-secondary/20" />
            </div>
            <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Verified</span>
          </div>
          <div>
            <h3 className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Current Status</h3>
            <p className="text-2xl font-bold text-on-surface">No issues detected</p>
            <p className="text-sm text-on-surface-variant mt-2">Last scan: 14 mins ago</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-primary/5 p-6 rounded-[2rem] border border-primary/10 flex flex-col gap-4"
        >
          <h3 className="text-lg font-bold text-primary px-1">Quick Diagnostics</h3>
          <div className="grid grid-cols-3 gap-3">
            <DiagnosticButton icon={<Battery className="w-6 h-6" />} label="Battery" />
            <DiagnosticButton icon={<Smartphone className="w-6 h-6" />} label="Screen" />
            <DiagnosticButton icon={<AudioLines className="w-6 h-6" />} label="Audio" />
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold text-on-surface">Premium Services</h2>
          <button className="text-primary text-sm font-semibold hover:underline">View Catalog</button>
        </div>
        <div className="space-y-4">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="group relative overflow-hidden bg-surface-container-lowest rounded-[2rem] flex flex-col md:flex-row items-stretch shadow-sm hover:shadow-xl transition-all border border-outline-variant/10"
            >
              <div className="w-full md:w-40 h-40 md:h-auto overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className={cn("absolute inset-0 mix-blend-multiply", service.color === 'primary' ? "bg-primary/10" : "bg-secondary/10")} />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={cn("text-xl font-bold text-on-surface transition-colors", service.color === 'primary' ? "group-hover:text-primary" : "group-hover:text-secondary")}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-1">{service.description}</p>
                  </div>
                  <span className={cn("font-bold text-lg", service.color === 'primary' ? "text-primary" : "text-secondary")}>
                    ${service.price}
                  </span>
                </div>
                <div className="mt-6 flex gap-2">
                  <button 
                    onClick={onBookNow}
                    className={cn("px-6 py-2 rounded-full text-sm font-bold shadow-lg transition-transform active:scale-95", 
                    service.color === 'primary' ? "bg-primary text-white shadow-primary/20" : "bg-secondary text-white shadow-secondary/20")}>
                    Book Now
                  </button>
                  <button className="bg-surface-container text-on-surface px-6 py-2 rounded-full text-sm font-semibold hover:bg-surface-container-high transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Warranty Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-inverse-surface rounded-[2rem] p-8 relative overflow-hidden"
      >
        <div className="relative z-10 space-y-2">
          <h3 className="text-white text-2xl font-bold">Artisan Shield®</h3>
          <p className="text-inverse-on-surface/80 max-w-xs">All repairs are covered by our signature lifetime workmanship guarantee.</p>
          <div className="pt-4">
            <button className="bg-white text-on-surface px-6 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-all">
              Learn About Coverage
            </button>
          </div>
        </div>
        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute right-6 top-6 opacity-20">
          <CheckCircle2 className="w-24 h-24 text-white" />
        </div>
      </motion.section>
    </div>
  );
};

const DiagnosticButton = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <button className="flex flex-col items-center justify-center bg-surface-container-lowest p-4 rounded-3xl transition-all hover:shadow-lg active:scale-90 group">
    <div className="text-primary group-hover:scale-110 transition-transform mb-2">
      {icon}
    </div>
    <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">{label}</span>
  </button>
);
