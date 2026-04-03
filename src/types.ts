export type Screen = 'home' | 'booking' | 'tracking' | 'support' | 'admin';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  color: 'primary' | 'secondary';
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Center {
  id: string;
  name: string;
  distance: string;
  rating: number;
  level: number;
  tags: string[];
  image: string;
  verified: boolean;
}

export interface RepairStep {
  id: string;
  title: string;
  timestamp: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
  icon: string;
  details?: {
    progress: number;
    technician: string;
    note: string;
  };
}
