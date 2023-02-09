import React from 'react';
import { LayoutProps } from '@/utils/props/props';
import NavBar from './navbar';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-sans-serif">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
