"use client"
import Header from '@/components/Header';
import SideBar from '@/components/dashboard/SideBar';
import SideBarLarge from '@/components/dashboard/SideBarLarge';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Layout({ children }) {
  const { data: session, status} = useSession()
  const router=useRouter()
  // console.log({ data: session, status})
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (

  status === "authenticated"?(
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
  ):(router.push("http://localhost:3000/login"))
  );
}
