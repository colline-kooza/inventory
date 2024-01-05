import HomeNavBar from '@/components/dashboard/HomeNavBar'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className='min-w-full min-h-screen'>
        <div className=''>
        <HomeNavBar/>
        </div>
        {children}
    </div>
  )
}
