import React from 'react';
import { ContactSection, Innovation, TeamSection } from './';

const Hero = () => {
  return (
    <div className="p-10">
      <Innovation />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default Hero;
