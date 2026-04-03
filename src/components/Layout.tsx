import React from 'react';
import { Home, Wrench, LifeBuoy, User, Bell, ChevronRight, CheckCircle2, Battery, Smartphone, AudioLines, ShieldCheck, MapPin, Star, Verified, Calendar, SmartphoneIcon, Droplets, Power, Search, Filter, Laptop, Headphones, TrendingUp, Check, Package, MessageSquare, Send, Paperclip, MoreVertical, Info, Activity } from 'lucide-react';
import { cn } from '../lib/utils';
import { Screen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
  title?: string;
  showFAB?: boolean;
  onFABClick?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeScreen, onScreenChange, title = "Clinical Artisan", showFAB, onFABClick }) => {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0 md:pl-80">
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-surface-container-highest md:left-80">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-fixed rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-xl font-headline font-bold tracking-tight text-primary">
              {title}
            </h1>
          </div>
          <button className="p-2 hover:bg-surface-container rounded-full transition-colors relative">
            <Bell className="w-6 h-6 text-on-surface-variant" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </button>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col gap-2 p-4 h-screen w-80 fixed left-0 bg-white border-r border-surface-container-highest">
        <div className="flex flex-col gap-1 p-4 mb-6 bg-surface-container-low rounded-3xl">
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=100" 
              alt="Profile" 
              className="w-12 h-12 rounded-xl object-cover"
            />
            <div>
              <h3 className="font-headline font-bold text-on-surface">Alex Rivera</h3>
              <p className="text-xs text-on-surface-variant">Lead Technician</p>
            </div>
          </div>
          <div className="mt-3 px-3 py-1 bg-primary-fixed w-fit rounded-full">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Role: ADMIN</span>
          </div>
        </div>

        <nav className="space-y-1">
          <NavItem 
            icon={<Home className="w-5 h-5" />} 
            label="Dashboard" 
            active={activeScreen === 'home'} 
            onClick={() => onScreenChange('home')} 
          />
          <NavItem 
            icon={<Wrench className="w-5 h-5" />} 
            label="Repairs" 
            active={activeScreen === 'booking' || activeScreen === 'tracking'} 
            onClick={() => onScreenChange('booking')} 
          />
          <NavItem 
            icon={<LifeBuoy className="w-5 h-5" />} 
            label="Support" 
            active={activeScreen === 'support'} 
            onClick={() => onScreenChange('support')} 
          />
          <NavItem 
            icon={<TrendingUp className="w-5 h-5" />} 
            label="Analytics" 
            active={activeScreen === 'admin'} 
            onClick={() => onScreenChange('admin')} 
          />
          <NavItem 
            icon={<User className="w-5 h-5" />} 
            label="Profile" 
            active={false} 
            onClick={() => {}} 
          />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="pt-20 px-6 max-w-7xl mx-auto">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 frosted-nav px-4 pb-6 pt-3 flex justify-around items-center">
        <MobileNavItem 
          icon={<Home className="w-6 h-6" />} 
          label="Home" 
          active={activeScreen === 'home'} 
          onClick={() => onScreenChange('home')} 
        />
        <MobileNavItem 
          icon={<Wrench className="w-6 h-6" />} 
          label="Repairs" 
          active={activeScreen === 'booking' || activeScreen === 'tracking'} 
          onClick={() => onScreenChange('booking')} 
        />
        <MobileNavItem 
          icon={<LifeBuoy className="w-6 h-6" />} 
          label="Support" 
          active={activeScreen === 'support'} 
          onClick={() => onScreenChange('support')} 
        />
        <MobileNavItem 
          icon={<User className="w-6 h-6" />} 
          label="Profile" 
          active={activeScreen === 'admin'} 
          onClick={() => onScreenChange('admin')} 
        />
      </nav>

      {/* FAB */}
      {showFAB && (
        <button 
          onClick={onFABClick}
          className="fixed bottom-28 right-6 md:bottom-8 md:right-8 w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30 hover:scale-110 active:scale-95 transition-all z-40"
        >
          <MessageSquare className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

const NavItem = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200",
      active ? "bg-primary-fixed text-primary" : "text-on-surface-variant hover:bg-surface-container"
    )}
  >
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const MobileNavItem = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center px-5 py-2 rounded-2xl transition-all active:scale-90",
      active ? "bg-primary-fixed text-primary" : "text-on-surface-variant"
    )}
  >
    {icon}
    <span className="text-[11px] font-medium mt-1">{label}</span>
  </button>
);
