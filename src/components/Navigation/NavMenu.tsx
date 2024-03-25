import React from 'react';

interface NavMenuProps {
  activeSection: number | null;
  scrollToSection: (index: number) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ activeSection, scrollToSection }) => {
  return (
    <nav>
      <ul>
        <button className={`nav-menu ${activeSection === 0 ? 'text-white' : 'text-gray-600'}`} onClick={() => scrollToSection(0)}>Introduce</button>
        <button className={`nav-menu ${activeSection === 1 ? 'text-white' : 'text-gray-600'}`} onClick={() => scrollToSection(1)}>Stack</button>
        <button className={`nav-menu ${activeSection === 2 ? 'text-white' : 'text-gray-600'}`} onClick={() => scrollToSection(2)}>Team Project</button>
        <button className={`nav-menu ${activeSection === 3 ? 'text-white' : 'text-gray-600'}`} onClick={() => scrollToSection(3)}>Education</button>
        <button className={`nav-menu ${activeSection === 4 ? 'text-white' : 'text-gray-600'}`} onClick={() => scrollToSection(4)}>Certificates</button>
        <button className={`nav-menu ${activeSection === 5 ? 'text-white' : 'text-gray-600'}`} onClick={() => scrollToSection(5)}>Award</button>
      </ul>
    </nav>
  );
};

export default NavMenu;
