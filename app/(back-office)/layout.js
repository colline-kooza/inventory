import Header from '@/components/Header'
import SideBar from '@/components/dashboard/SideBar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className='flex min-w-full min-h-screen relative'>
      <div className='fixed left-0 w-[19%]'>
       <SideBar/>
      </div>
      <main className='w-[81%]  lg:ml-[16rem] bg-gray-white px-4'>
        <Header/>
        <div className='dm'>
          {children}
        </div>
      </main>
     </div>
  )
}
