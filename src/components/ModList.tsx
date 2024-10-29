// src/components/ModList.tsx
import React from 'react';
import './ModList.css'; // Importing the ModList CSS

interface Mod {
  id: number;
  title: string;
  description: string;
  author: string;
  thumbnail: string;
}

interface ModListProps {
  mods: Mod[];
  onSelect: (mod: Mod) => void;
}

const ModList: React.FC<ModListProps> = ({ mods, onSelect }) => {
  return (
    <div className="mod-list">
      {mods.map(mod => (
        <div className="mod-item" key={mod.id} onClick={() => onSelect(mod)}>
          <img src={mod.thumbnail} alt={mod.title} className="thumbnail" />
          <h3 className="mod-title">{mod.title}</h3>
          <p className="mod-description">{mod.description}</p>
          <p className="mod-author">by {mod.author}</p>
        </div>
      ))}
    </div>
  );
};

export default ModList;
