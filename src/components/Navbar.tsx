// src/components/Navbar.tsx
import React from 'react';
import './Navbar.css';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="navbar">
      <ul>
        <li
          className={currentPage === 'home' ? 'active' : ''}
          onClick={() => onNavigate('home')}
        >
          Home
        </li>
        <li
          className={currentPage === 'mods' ? 'active' : ''}
          onClick={() => onNavigate('mods')}
        >
          Mods
        </li>
        <li
          className={currentPage === 'contact' ? 'active' : ''}
          onClick={() => onNavigate('contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
