import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, CheckCircle2, Wrench, Users, Search, Filter, MoreVertical, PersonStanding, MapPin, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { cn } from '../lib/utils';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 600 },
  { name: 'Wed', value: 300 },
  { name: 'Thu', value: 900 },
  { name: 'Fri', value: 1000 },
];

export const AdminScreen: React.FC = () => {
  return (
    <div className="py-8 space-y-10">
      <header>
        <h1 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight">Admin Dashboard</h1>
        <p className="text-on-surface-variant">Manage your assigned repairs and updates.</p>
      </header>

      {/* Analytics Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary-container p-8 rounded-[2rem] text-white shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="font-headline font-bold text-2xl mb-2">Earnings Overview</h2>
            <p className="text-blue-100 text-sm">Real-time revenue tracking for the current month.</p>
          </div>
          <div className="mt-8 flex items-end justify-between">
            <div>
              <span className="text-5xl font-black tracking-tight">$42,850.00</span>
              <div className="flex items-center gap-1 mt-2 text-secondary-container">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-bold">+12.5% from last month</span>
              </div>
            </div>
            <div className="h-24 w-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#fff' : 'rgba(255,255,255,0.4)'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <StatCard 
          icon={<CheckCircle2 className="w-6 h-6" />} 
          label="Completed Jobs" 
          value="1,284" 
          progress={85} 
          color="bg-secondary" 
        />
        <StatCard 
          icon={<Wrench className="w-6 h-6" />} 
          label="Total Services" 
          value="1,540" 
          color="bg-primary" 
          avatars
        />
      </div>

      {/* Management Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Bookings */}
        <div className="flex-[2] bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-headline font-bold text-xl text-on-surface">Active Service Requests</h2>
              <p className="text-sm text-on-surface-variant">Pending assignment and scheduling</p>
            </div>
            <div className="flex bg-surface-container-low rounded-xl px-4 py-2 items-center gap-2 border border-outline-variant/10">
              <Search className="w-5 h-5 text-outline" />
              <input type="text" placeholder="Search bookings..." className="bg-transparent border-none focus:ring-0 text-sm font-medium w-full md:w-32" />
              <Filter className="w-5 h-5 text-outline cursor-pointer" />
            </div>
          </div>

          <div className="space-y-4">
            <RequestItem 
              title="High-End Range Repair" 
              location="Lincoln Park, Chicago" 
              time="2h ago" 
              tags={[{ label: 'Urgent', color: 'bg-red-100 text-red-700' }, { label: 'Electrical', color: 'bg-blue-100 text-primary' }]} 
            />
            <RequestItem 
              title="HVAC Seasonal Tune-up" 
              location="Evanston" 
              time="4h ago" 
              tags={[{ label: 'Maintenance', color: 'bg-secondary-container text-on-secondary-container' }]} 
            />
          </div>
          <button className="w-full mt-6 py-3 text-primary text-sm font-bold border border-dashed border-primary/30 rounded-xl hover:bg-primary/5 transition-colors uppercase tracking-widest">
            View All Bookings
          </button>
        </div>

        {/* Technician Status */}
        <div className="flex-1 bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline font-bold text-xl text-on-surface">Technician Status</h2>
            <span className="text-xs font-bold text-secondary flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              12 Online
            </span>
          </div>
          <div className="space-y-6">
            <TechItem name="Marcus Chen" role="Expert • Appliance" status="Available" rating={4.9} online />
            <TechItem name="Sarah Miller" role="Senior • HVAC" status="In Service" rating={4.8} busy />
            <TechItem name="Jordan Watts" role="Specialist • Plumbing" status="Available" rating={4.7} online />
          </div>
          <button className="w-full mt-10 py-2 bg-surface-container text-on-surface-variant text-xs font-bold rounded-xl hover:bg-surface-container-high transition-colors uppercase">
            Manage Team
          </button>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, progress, color, avatars }: any) => (
  <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm border border-outline-variant/10 flex flex-col justify-center">
    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", color.replace('bg-', 'bg-opacity-10 text-'))}>
      {icon}
    </div>
    <p className="text-on-surface-variant font-medium text-sm">{label}</p>
    <h3 className="font-headline font-bold text-3xl text-on-surface">{value}</h3>
    {progress && (
      <div className="mt-4 w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
        <div className={cn("h-full", color)} style={{ width: `${progress}%` }} />
      </div>
    )}
    {avatars && (
      <div className="mt-4 flex -space-x-2">
        {[1, 2, 3].map(i => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-high" />
        ))}
        <div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-[10px] text-white flex items-center justify-center font-bold">+12</div>
      </div>
    )}
  </div>
);

const RequestItem = ({ title, location, time, tags }: any) => (
  <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-surface-container-low rounded-2xl border border-transparent hover:border-primary/20 transition-all">
    <div className="flex gap-4 items-center mb-4 sm:mb-0">
      <div className="w-14 h-14 rounded-2xl overflow-hidden bg-surface-container-high flex-shrink-0">
        <Activity className="w-full h-full p-3 text-outline opacity-20" />
      </div>
      <div>
        <h4 className="font-bold text-on-surface">{title}</h4>
        <p className="text-xs text-on-surface-variant flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {location} • Requested {time}
        </p>
        <div className="flex gap-2 mt-1">
          {tags.map((tag: any) => (
            <span key={tag.label} className={cn("px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter", tag.color)}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="flex items-center gap-3 w-full sm:w-auto">
      <button className="flex-1 sm:flex-none px-4 py-2 bg-primary text-white rounded-full text-xs font-bold transition active:scale-95">
        Assign
      </button>
      <button className="p-2 rounded-full hover:bg-surface-container-highest text-on-surface-variant">
        <MoreVertical className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const TechItem = ({ name, role, status, rating, online, busy }: any) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-11 h-11 rounded-full bg-surface-container-high" />
        <span className={cn("absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full", online ? "bg-secondary" : busy ? "bg-primary" : "bg-outline")} />
      </div>
      <div>
        <p className="font-bold text-sm text-on-surface">{name}</p>
        <p className="text-[10px] text-on-surface-variant font-medium">{role}</p>
      </div>
    </div>
    <div className="text-right">
      <p className={cn("text-xs font-bold", busy ? "text-primary" : "text-on-surface")}>{status}</p>
      <p className="text-[10px] text-on-surface-variant">Rating: {rating}</p>
    </div>
  </div>
);
