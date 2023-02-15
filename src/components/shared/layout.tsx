import React from 'react';
import { LayoutProps } from '@/utils/props/props';
import { Navbar, Footer } from './';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-sans-serif">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
