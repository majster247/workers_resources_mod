// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ModList from './components/ModList';
import ModDetails from './components/ModDetails';
import Contact from './components/Contact';
import modData from './data/mods.json';

const App: React.FC = () => {
  const [mods] = useState(modData);
  const [selectedMod, setSelectedMod] = useState<null | typeof modData[0]>(null);
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleSelectMod = (mod: typeof modData[0]) => {
    setSelectedMod(mod);
    setCurrentPage('mods');
  };

  const handleBack = () => {
    setSelectedMod(null);
    setCurrentPage('mods');
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    if (page === 'mods') {
      setSelectedMod(null);
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
            <h2>Welcome to the Mod Hub</h2>
            <p>Explore various mods for the game "Workers and Resources: Soviet Republic".</p>
            <p>Browse the mods available, read their descriptions, and feel free to contact us for any inquiries!</p>
          </div>
        );
      case 'mods':
        return selectedMod ? (
          <ModDetails mod={selectedMod} onBack={handleBack} />
        ) : (
          <ModList mods={mods} onSelect={handleSelectMod} />
        );
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
