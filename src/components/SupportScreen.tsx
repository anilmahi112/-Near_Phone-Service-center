import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Battery, RefreshCw, MessageSquare, Send, Paperclip, MoreVertical, User, Activity, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const SupportScreen: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      type: 'received',
      text: "Hello! I've reviewed your recent device logs. It looks like the sensor calibration is slightly off. Would you like to run a remote fix?",
      time: '10:24 AM'
    },
    {
      id: '2',
      type: 'sent',
      text: "Yes, please. I noticed the performance dropped slightly after the last update. Is that related?",
      time: '10:26 AM'
    }
  ]);

  return (
    <div className="py-8 space-y-8 max-w-2xl mx-auto">
      {/* AI Diagnostic */}
      <section className="relative overflow-hidden rounded-3xl bg-surface-container-lowest p-8 shadow-sm border border-outline-variant/10">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-primary fill-primary/20" />
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Precision AI</span>
            </div>
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">AI Diagnostic Tool</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
              Run a deep system scan to identify hardware anomalies before speaking with a technician.
            </p>
          </div>
          <button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg shadow-primary/20 active:scale-95 transition-all">
            Start System Scan
          </button>
        </div>
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* Troubleshooting */}
      <section className="space-y-4">
        <h3 className="text-xl font-headline font-bold tracking-tight px-1">Common Troubleshooting</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TroubleItem 
            icon={<Battery className="w-6 h-6" />} 
            title="Battery Health" 
            desc="Calibrate and optimize cycle life" 
            color="text-secondary"
          />
          <TroubleItem 
            icon={<RefreshCw className="w-6 h-6" />} 
            title="Software Updates" 
            desc="Firmware and security patches" 
            color="text-primary"
          />
        </div>
      </section>

      {/* Chat Interface */}
      <section className="bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/10 overflow-hidden flex flex-col h-[500px]">
        {/* Header */}
        <div className="px-6 py-4 bg-surface-container-low flex items-center justify-between border-b border-outline-variant/10">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" 
                alt="Technician" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-surface-container-low" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-on-surface">Marcus Chen</h4>
              <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">Lead Technician • Online</p>
            </div>
          </div>
          <button className="text-outline hover:text-primary transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex gap-3 max-w-[85%]", msg.type === 'sent' ? "flex-row-reverse ml-auto" : "")}>
              <div className={cn(
                "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                msg.type === 'sent' ? "hidden" : "bg-surface-container"
              )}>
                <User className="w-4 h-4 text-outline" />
              </div>
              <div className={cn("space-y-1", msg.type === 'sent' ? "items-end flex flex-col" : "")}>
                <div className={cn(
                  "px-4 py-3 rounded-2xl text-sm leading-relaxed",
                  msg.type === 'sent' 
                    ? "bg-primary text-white rounded-tr-none" 
                    : "bg-surface-container-low text-on-surface rounded-tl-none"
                )}>
                  {msg.text}
                </div>
                <span className="text-[10px] text-outline px-1">{msg.time}</span>
              </div>
            </div>
          ))}
          <div className="flex justify-center">
            <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold text-outline-variant tracking-wider uppercase">
              Technician is typing...
            </span>
          </div>
        </div>

        {/* Input */}
        <div className="p-4 bg-surface-container-low">
          <div className="flex items-center gap-3 bg-surface-container-lowest p-2 pl-4 rounded-full border border-outline-variant/20 focus-within:border-primary/50 transition-colors">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-outline/50"
            />
            <button className="p-2 text-outline hover:text-primary transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center active:scale-90 transition-transform">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const TroubleItem = ({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) => (
  <div className="group bg-surface-container-low hover:bg-surface-container-high transition-colors p-5 rounded-2xl cursor-pointer flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className={cn("w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-sm", color)}>
        {icon}
      </div>
      <div>
        <span className="block font-bold text-on-surface">{title}</span>
        <span className="text-xs text-on-surface-variant">{desc}</span>
      </div>
    </div>
    <ChevronRight className="w-5 h-5 text-outline group-hover:translate-x-1 transition-transform" />
  </div>
);
