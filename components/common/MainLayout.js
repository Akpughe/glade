import React from 'react';
import Navbar from './Navbar';
import Aside from './Aside';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="w-full flex-grow h-full">
        <Navbar />
        <div className="flex">
          <Aside />
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
