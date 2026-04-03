import { Service, Issue, Center, RepairStep } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Screen Replacement',
    description: 'OEM Grade panels with 1-year clinical warranty.',
    price: 149,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400',
    color: 'primary'
  },
  {
    id: '2',
    title: 'Battery Upgrade',
    description: 'High-density cells. 24-hour turnaround guaranteed.',
    price: 79,
    image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=400',
    color: 'secondary'
  }
];

export const ISSUES: Issue[] = [
  {
    id: '1',
    title: 'Cracked Screen',
    description: 'Display repair with calibrated precision glass panels.',
    icon: 'Smartphone',
    color: 'bg-blue-100 text-primary'
  },
  {
    id: '2',
    title: 'Water Damage',
    description: 'Internal de-oxidation and component level sonic cleaning.',
    icon: 'Droplets',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: '3',
    title: 'Not Turning On',
    description: 'Diagnostic deep-dive on logic boards and power circuitry.',
    icon: 'Power',
    color: 'bg-green-100 text-secondary'
  }
];

export const CENTERS: Center[] = [
  {
    id: '1',
    name: 'Precision Core Lab',
    distance: '2.4 miles away',
    rating: 4.9,
    level: 3,
    tags: ['Screen Specialists', 'Express Same-Day'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
    verified: true
  },
  {
    id: '2',
    name: 'Sanctuary Repair Suite',
    distance: '5.1 miles away',
    rating: 4.7,
    level: 2,
    tags: ['Battery Calibration', 'Water Damage Lab'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400',
    verified: false
  }
];

export const REPAIR_JOURNEY: RepairStep[] = [
  {
    id: '1',
    title: 'Order Placed',
    timestamp: 'Oct 18, 2023 • 09:45 AM',
    description: 'Repair request received and logged into our clinical queue.',
    status: 'completed',
    icon: 'Check'
  },
  {
    id: '2',
    title: 'Device Received',
    timestamp: 'Oct 19, 2023 • 02:20 PM',
    description: 'Device securely logged into our intake facility and sanitized.',
    status: 'completed',
    icon: 'Check'
  },
  {
    id: '3',
    title: 'Diagnosis Complete',
    timestamp: 'Oct 20, 2023 • 11:15 AM',
    description: 'Full hardware diagnostic passed.',
    status: 'completed',
    icon: 'Check'
  },
  {
    id: '4',
    title: 'Repairing',
    timestamp: 'In Progress',
    description: 'Technician is currently replacing the haptic module.',
    status: 'current',
    icon: 'Wrench',
    details: {
      progress: 65,
      technician: 'Dr. Artisan Sarah L.',
      note: 'Replacing the haptic module and calibrating sensors.'
    }
  },
  {
    id: '5',
    title: 'Ready for Pickup',
    timestamp: 'Pending',
    description: 'Pending repair finalization.',
    status: 'pending',
    icon: 'Package'
  }
];
