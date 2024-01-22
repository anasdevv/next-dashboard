import React from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fle flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="md: w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="md:pd flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
};

export default Layout;
