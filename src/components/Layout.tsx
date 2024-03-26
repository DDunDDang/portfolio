import React, { useState, useEffect, useRef } from 'react';
import NavMenu from './Navigation/NavMenu';

interface LayoutProps {
  children: React.ReactNode[];
}

const Layout = ({ children }: LayoutProps) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
  const sectionsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY + window.innerHeight / 2;
      let minDistance = Infinity;
      let activeIndex = null;

      sectionsRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionMidpoint = sectionTop + sectionHeight / 2;
          const distance = Math.abs(sectionMidpoint - currentScroll);

          if (distance < minDistance) {
            minDistance = distance;
            activeIndex = index;
          }
        }
      });

      setActiveSection(activeIndex);
      setShowNavMenu(window.innerWidth > 1170);
    };

    handleScroll(); // 초기 렌더링 시 호출

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (index: number) => {
    const sectionRef = sectionsRefs.current[index];
    if (sectionRef && sectionRef.offsetTop !== undefined) {
      window.scrollTo({ top: sectionRef.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex max-w-4xl p-8 mx-auto my-4 mb-20 space-y-8">
      <div className="flex-1">
        {children.map((section, index) => (
          <div
            key={index}
            id={`section${index + 1}`}
            ref={(el) => (sectionsRefs.current[index] = el)}
            className={`layout-section ${activeSection === index ? 'section-active' : ''}`}
          >
            {section}
          </div>
        ))}
      </div>
      {showNavMenu && (
        <div className="fixed right-0 transform -translate-y-1/2 p-9 top-1/4">
          <NavMenu activeSection={activeSection} scrollToSection={scrollToSection} />
        </div>
      )}
    </div>
  );
};

export default Layout;