import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  const [ref, inView] = useInView({ threshold: 1 });

  return (
    <div id={id} ref={ref} style={{ height: '100vh', color: inView ? 'white' : 'gray' }}>
      {children}
    </div>
  );
};

export default Section;
