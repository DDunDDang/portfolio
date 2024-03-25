import React from 'react';

interface NavMenuProps {
  activeSection: number | null;
  scrollToSection: (index: number) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ activeSection, scrollToSection }) => {
  return (
    <nav>
      <ul>
        <div className={`${activeSection === 0 ? 'text-white' : 'text-gray-600'}`} onClick={() => scrollToSection(0)}>Introduce</div>
        <div className={`${activeSection === 1 ? 'text-white' : 'text-gray-600'}`} onClick={() => scrollToSection(1)}>Stack</div>
        <div className={`${activeSection === 2 ? 'text-white' : 'text-gray-600'}`} onClick={() => scrollToSection(2)}>Team Project</div>
        <div className={`${activeSection === 3 ? 'text-white' : 'text-gray-600'}`} onClick={() => scrollToSection(3)}>Education</div>
        <div className={`${activeSection === 4 ? 'text-white' : 'text-gray-600'}`} onClick={() => scrollToSection(4)}>Certificates</div>
        <div className={`${activeSection === 5 ? 'text-white' : 'text-gray-600'}`} onClick={() => scrollToSection(5)}>Award</div>
      </ul>
    </nav>
  );
};

export default NavMenu;
