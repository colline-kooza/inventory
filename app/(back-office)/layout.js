"use client"
import Header from '@/components/Header';
import SideBar from '@/components/dashboard/SideBar';
import SideBarLarge from '@/components/dashboard/SideBarLarge';
import React, { useState } from 'react';

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div className='flex min-w-full min-h-screen relative z-50'>
      <div className={`fixed left-0 md:w-[80%] w-[80%] lg:w-[19%] ${showSidebar ? '' : '-translate-x-full'}`}>
        <SideBar isOpen={showSidebar} closeSidebar={closeSidebar} />
       
      </div>
      <div className='hidden lg:block  fixed left-0 md:w-[80%] w-[80%] lg:w-[19%]'>
        <SideBarLarge  />
        </div>
      <main className='lg:w-[81%] w-full lg:ml-[16rem] bg-gray-white lg:px-4'>
        <Header toggleSidebar={toggleSidebar} />
        <div className='dm'>{children}</div>
      </main>
    </div>
  );
}
