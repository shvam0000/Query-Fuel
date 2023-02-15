import React from 'react';
import { Main, ContactSection, Innovation, TeamSection } from './';

const Hero = () => {
  return (
    <div className="p-10">
      <Main />
      <Innovation />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default Hero;
