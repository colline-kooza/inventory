import Header from '@/components/Header'
import SideBar from '@/components/dashboard/SideBar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className='flex min-w-full min-h-screen relative'>
      <div className='z-10 fixed left-0 md:w-[80%] w-[80%] lg:w-[19%] lg:block md:block hidden'>
       <SideBar/>
      </div>
      <main className='lg:w-[81%] w-full lg:ml-[16rem] bg-gray-white lg:px-4'>
        <Header/>
        <div className='dm'>
          {children}
        </div>
      </main>
     </div>
  )
}
