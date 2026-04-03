import React from 'react';
import { motion } from 'motion/react';
import { Route, Check, Wrench, Package, Smartphone, ShieldCheck, User, MessageSquare } from 'lucide-react';
import { REPAIR_JOURNEY } from '../constants';
import { cn } from '../lib/utils';

export const TrackingScreen: React.FC = () => {
  return (
    <div className="py-8 space-y-12">
      {/* Hero Status */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Repair Status</span>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mt-2 tracking-tight">
              Your device is <span className="text-secondary">under repair</span>
            </h2>
            <p className="text-on-surface-variant mt-4 max-w-xl leading-relaxed">
              Our clinical technicians are currently addressing the internal hardware components. Every repair is backed by our Artisan Warranty.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <StatusBadge label="Order ID" value="#CA-88291-X" color="primary" />
            <StatusBadge label="Est. Completion" value="Oct 24, 2023" />
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Timeline */}
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-8 shadow-sm border border-outline-variant/10">
          <h3 className="text-xl font-headline font-bold mb-10 flex items-center gap-2">
            <Route className="w-6 h-6 text-primary" />
            Journey Tracker
          </h3>
          <div className="relative">
            {/* Background Line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-surface-container-high" />
            {/* Active Line */}
            <div className="absolute left-[19px] top-4 h-[65%] w-[2px] bg-secondary" />

            <div className="space-y-0">
              {REPAIR_JOURNEY.map((step, idx) => (
                <TimelineStep key={step.id} step={step} isLast={idx === REPAIR_JOURNEY.length - 1} />
              ))}
            </div>
          </div>
        </div>

        {/* Details Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Device Card */}
          <div className="bg-primary text-white rounded-3xl p-6 overflow-hidden relative shadow-xl shadow-primary/10">
            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Unit Identification</span>
              <h4 className="text-2xl font-headline font-extrabold mt-1">iPhone 15 Pro Max</h4>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[10px] uppercase opacity-60">Color</span>
                  <span className="font-bold">Natural Titanium</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase opacity-60">Serial</span>
                  <span className="font-bold">SN: GX99210-P</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary-container rounded-full opacity-20 blur-3xl" />
            <Smartphone className="absolute right-6 top-6 w-16 h-16 opacity-10 rotate-12" />
          </div>

          {/* Technician Card */}
          <div className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=100" 
                alt="Technician" 
                className="w-14 h-14 rounded-2xl object-cover"
              />
              <div>
                <h5 className="font-headline font-bold text-on-surface">Artisan Sarah L.</h5>
                <p className="text-xs text-on-surface-variant">Lead Hardware Surgeon</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-tighter text-outline-variant px-1 mb-2">
              <span>Quality Score</span>
              <span className="text-secondary">99.8%</span>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-xs font-bold text-on-surface">Artisan Guaranteed</span>
              </div>
              <button className="text-xs font-bold text-primary hover:underline">Contact</button>
            </div>
          </div>

          {/* Warranty Info */}
          <div className="bg-secondary/5 rounded-3xl p-6 border-2 border-dashed border-secondary/20">
            <div className="flex items-start gap-4">
              <div className="bg-secondary p-2 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="font-headline font-bold text-on-secondary-container">12-Month Artisan Warranty</h5>
                <p className="text-xs text-on-secondary-container/70 mt-1 leading-relaxed">
                  This repair is fully covered against future component failure for 365 days from pickup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusBadge = ({ label, value, color }: { label: string, value: string, color?: 'primary' }) => (
  <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm min-w-[160px] border border-outline-variant/10">
    <span className="block text-[10px] font-bold uppercase text-outline mb-1">{label}</span>
    <span className={cn("font-headline font-bold text-lg", color === 'primary' ? "text-primary" : "text-on-surface")}>
      {value}
    </span>
  </div>
);

const TimelineStep: React.FC<{ step: any, isLast: boolean }> = ({ step, isLast }) => {
  const isActive = step.status === 'current';
  const isCompleted = step.status === 'completed';

  return (
    <div className={cn("relative flex gap-6", !isLast && "pb-12")}>
      <div className={cn(
        "z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all",
        isCompleted ? "bg-secondary text-white shadow-lg shadow-secondary/20" : 
        isActive ? "bg-secondary-fixed text-on-secondary-container ring-4 ring-secondary/10" : 
        "bg-surface-container-high text-outline"
      )}>
        {isCompleted ? <Check className="w-5 h-5" /> : 
         isActive ? <Wrench className="w-5 h-5 animate-pulse" /> : 
         <Package className="w-5 h-5" />}
      </div>
      <div className="pt-1">
        <h4 className={cn("font-headline font-bold", isActive ? "text-secondary" : isCompleted ? "text-on-surface" : "text-outline")}>
          {step.title}
        </h4>
        <p className={cn("text-xs font-medium", isActive ? "text-secondary" : "text-on-surface-variant")}>
          {step.timestamp}
        </p>
        <p className="mt-2 text-xs text-outline leading-relaxed max-w-sm">
          {step.description}
        </p>
        
        {isActive && step.details && (
          <div className="mt-4 p-4 border border-secondary/20 bg-secondary/5 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase text-secondary">Task Completion</span>
              <span className="text-xs font-headline font-bold text-secondary">{step.details.progress}%</span>
            </div>
            <div className="w-full bg-secondary/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-secondary h-full rounded-full" style={{ width: `${step.details.progress}%` }} />
            </div>
            <p className="mt-3 text-[11px] text-on-surface-variant leading-tight">
              Technician: <span className="font-bold text-on-surface">{step.details.technician}</span> is currently {step.details.note}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
