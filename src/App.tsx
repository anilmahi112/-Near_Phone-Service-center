import { useState } from 'react';
import { Layout } from './components/Layout';
import { HomeScreen } from './components/HomeScreen';
import { BookingScreen } from './components/BookingScreen';
import { TrackingScreen } from './components/TrackingScreen';
import { SupportScreen } from './components/SupportScreen';
import { AdminScreen } from './components/AdminScreen';
import { Screen } from './types';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen onBookNow={() => setActiveScreen('booking')} />;
      case 'booking':
        return <BookingScreen onConfirm={() => setActiveScreen('tracking')} />;
      case 'tracking':
        return <TrackingScreen />;
      case 'support':
        return <SupportScreen />;
      case 'admin':
        return <AdminScreen />;
      default:
        return <HomeScreen onBookNow={() => setActiveScreen('booking')} />;
    }
  };

  const getTitle = () => {
    switch (activeScreen) {
      case 'home': return 'Clinical Artisan';
      case 'booking': return 'Book Service';
      case 'tracking': return 'Track Repair';
      case 'support': return 'Support Center';
      case 'admin': return 'Service Dashboard';
      default: return 'Clinical Artisan';
    }
  };

  return (
    <Layout 
      activeScreen={activeScreen} 
      onScreenChange={setActiveScreen}
      title={getTitle()}
      showFAB={activeScreen === 'home' || activeScreen === 'support'}
      onFABClick={() => setActiveScreen('support')}
    >
      {renderScreen()}
    </Layout>
  );
}
