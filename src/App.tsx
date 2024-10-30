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

<div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
    <img src="https://cdn1.epicgames.com/spt-assets/298d97b1df7d4111b4b0a85045735ccc/workers-and-resources-soviet-republic-logo-1mhw7.png?resize=1&w=480&h=270&quality=medium" 
         alt="Game Logo" style={{ width: '150px', height: 'auto', marginRight: '20px' }}></img>
    <h1 style={{ fontSize: '2em', margin: 0 }}>Workers &amp; Resources: Soviet Republic Mods</h1>
</div>




<p>Welcome to the <strong>Workers &amp; Resources: Soviet Republic Mods</strong> repository! This repository is dedicated to all the mods I have created for the game <strong>Workers &amp; Resources: Soviet Republic</strong>. Whether you&#39;re looking to enhance your gameplay, introduce new features, or simply explore the Soviet era in a fresh way, you&#39;ll find something here.</p>
<div style={{ textAlign: 'center' }}>
    <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/784150/capsule_616x353.jpg?t=1729167357" alt="Game Banner" height="auto" width="40%"></img>
</div>

<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#about-the-game">About the Game</a></li>
<li><a href="#mods-overview">Mods Overview</a></li>
<li><a href="#installation-instructions">Installation Instructions</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#contact">Contact</a></li>
<li><a href="#license">License</a></li>
</ul>
<h2 id="about-the-game">About the Game</h2>
<p><strong>Workers &amp; Resources: Soviet Republic</strong> is a city-building and economic simulation game set in the Soviet era. Players are tasked with building and managing a thriving republic, balancing resource production, transportation, and the needs of citizens.</p>
<div style={{ textAlign: 'center' }}>
    <img src="https://static.wixstatic.com/media/6bc5a2_3d0893ace34842eda50a90f9cb02859e~mv2.png/v1/fill/w_980,h_551,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6bc5a2_3d0893ace34842eda50a90f9cb02859e~mv2.png" alt="Additional Game" style={{ maxWidth: '100%', height: 'auto' }}></img>
</div>

<h2 id="mods-overview">Mods Overview</h2>
<p>This repository contains a collection of mods designed to enhance and expand the base game. Each mod adds unique features, improves gameplay mechanics, or introduces new challenges to your Soviet republic.</p>
<h3 id="features-of-mods-">Features of Mods:</h3>
<ul>
<li><strong>New Buildings</strong>: Expand your infrastructure with new industrial and residential buildings.</li>
<li><strong>Gameplay Tweaks</strong>: Adjust game mechanics for a more challenging experience.</li>
<li><strong>Enhanced Graphics</strong>: Improve the visual fidelity of the game with better textures and models.</li>
<li><strong>Custom Scenarios</strong>: Engage in unique gameplay scenarios that change how you play.</li>
</ul>
<h2 id="installation-instructions">Installation Instructions</h2>
<p>To install any of the mods in this repository, follow these steps:</p>
<ol>
<li><strong>Download the Mod</strong>: Click on the mod you want to download from the list below.</li>
<li><strong>Extract the Files</strong>: Unzip the downloaded file.</li>
<li><strong>Place in Mods Folder</strong>: Move the extracted folder into the <code>Mods</code> directory of your Workers &amp; Resources: Soviet Republic installation.</li>
<li><strong>Activate the Mod</strong>: Launch the game and navigate to the Mods menu to enable the mod.</li>
</ol><h2 id="contributing">Contributing</h2>
<p>I welcome contributions! If you have ideas for new mods or improvements, feel free to fork the repository and submit a pull request. Please make sure to follow the code of conduct and keep contributions relevant to the Workers &amp; Resources: Soviet Republic game.</p>
<h2 id="contact">Contact</h2>
<p>For any inquiries, suggestions, or issues, please contact me at:</p>
<ul>
<li><strong>Email</strong>: <a href="mailto:htopolski12@gmail.com">htopolski12@gmail.com</a></li>
<li><strong>GitHub</strong>: <a href="https://github.com/majster247">majster247</a></li>
</ul>
<h2 id="license">License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
<hr></hr>
<p>Thank you for visiting my repository! I hope you enjoy my mods for <strong>Workers &amp; Resources: Soviet Republic</strong> and find them valuable in your gameplay experience. Feel free to star the repository....</p>

            
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
