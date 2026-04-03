import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Droplets, Power, MapPin, Star, Verified, ArrowRight, Calendar } from 'lucide-react';
import { ISSUES, CENTERS } from '../constants';
import { cn } from '../lib/utils';

export const BookingScreen: React.FC<{ onConfirm: () => void }> = ({ onConfirm }) => {
  return (
    <div className="py-8 pb-32 space-y-12">
      {/* Progress Stepper */}
      <div className="flex items-center justify-between max-w-md mx-auto">
        <Step number={1} label="Issue" active />
        <div className="flex-1 h-[2px] bg-surface-container-highest mx-4 mb-6" />
        <Step number={2} label="Center" />
        <div className="flex-1 h-[2px] bg-surface-container-highest mx-4 mb-6" />
        <Step number={3} label="Confirm" />
      </div>

      {/* Select Issue */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-headline font-bold tracking-tight text-on-surface">Select Issue</h2>
          <p className="text-on-surface-variant mt-1">What's wrong with your medical hardware?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ISSUES.map((issue, idx) => (
            <motion.button 
              key={issue.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden text-left p-6 rounded-[24px] bg-surface-container-lowest border border-transparent hover:border-primary/20 transition-all duration-300 shadow-sm"
            >
              <div className={cn("mb-4 w-12 h-12 rounded-2xl flex items-center justify-center", issue.color)}>
                {issue.icon === 'Smartphone' && <Smartphone className="w-7 h-7" />}
                {issue.icon === 'Droplets' && <Droplets className="w-7 h-7" />}
                {issue.icon === 'Power' && <Power className="w-7 h-7" />}
              </div>
              <h3 className="text-lg font-bold mb-2">{issue.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{issue.description}</p>
              <div className="mt-4 flex items-center text-primary font-semibold text-sm">
                <span>Select</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Certified Centers */}
      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tight text-on-surface">Certified Centers</h2>
            <p className="text-on-surface-variant mt-1">Found 3 precision labs within your radius.</p>
          </div>
          <button className="text-primary font-semibold text-sm flex items-center gap-1 px-4 py-2 rounded-full hover:bg-primary-fixed transition-colors">
            <MapPin className="w-4 h-4" />
            View Map
          </button>
        </div>
        <div className="space-y-6">
          {CENTERS.map((center, idx) => (
            <motion.div 
              key={center.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 p-6 rounded-[32px] bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden bg-surface-container">
                <img src={center.image} alt={center.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-on-surface">{center.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold">
                        <Star className="w-3 h-3 fill-on-secondary-container" />
                        {center.rating}
                      </div>
                      <span className="text-xs text-on-surface-variant">{center.distance} • Level {center.level} Certified</span>
                    </div>
                  </div>
                  {center.verified && <Verified className="w-6 h-6 text-secondary fill-secondary/10" />}
                </div>
                <div className="mt-4 flex gap-3">
                  {center.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-surface-container-highest px-6 py-6 md:left-80">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-6">
          <div className="hidden md:block">
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Selected Issue</p>
            <p className="text-on-surface font-bold">Cracked Screen — $149 Est.</p>
          </div>
          <button 
            onClick={onConfirm}
            className="flex-1 md:flex-none md:min-w-[280px] h-14 bg-gradient-to-r from-primary to-primary-container text-white rounded-full flex items-center justify-center gap-3 font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
            Book Appointment
            <Calendar className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Step = ({ number, label, active }: { number: number, label: string, active?: boolean }) => (
  <div className="flex flex-col items-center">
    <div className={cn(
      "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all",
      active ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-surface-container-high text-on-surface-variant"
    )}>
      {number}
    </div>
    <span className={cn("mt-2 text-xs font-medium", active ? "text-primary" : "text-on-surface-variant")}>
      {label}
    </span>
  </div>
);
