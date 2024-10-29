// src/components/ModDetails.tsx
import React from 'react';
import './ModDetails.css'; // Importing the ModDetails CSS

interface Mod {
  id: number;
  title: string;
  description: string;
  author: string;
  thumbnail: string;
}

interface ModDetailsProps {
  mod: Mod;
  onBack: () => void;
}

const ModDetails: React.FC<ModDetailsProps> = ({ mod, onBack }) => {
  return (
    <div className="mod-details">
      <h2>{mod.title}</h2>
      <img src={mod.thumbnail} alt={mod.title} />
      <p>{mod.description}</p>
      <p className="mod-author">by {mod.author}</p>
      <button className="back-button" onClick={onBack}>
        Back to Mods
      </button>
    </div>
  );
};

export default ModDetails;
