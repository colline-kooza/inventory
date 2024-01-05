import Header from '@/components/Header'
import SideBar from '@/components/dashboard/SideBar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className='flex w-full min-h-screen'>
     <SideBar/>
      <main className='w-[81%] bg-gray-white'>
        <Header/>
      {children}
      </main>
     </div>
  )
}
