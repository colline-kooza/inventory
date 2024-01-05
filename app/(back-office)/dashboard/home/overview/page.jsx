import DashboardBanner from '@/components/dashboard/DashboardBanner'
import MainDashboard from '@/components/dashboard/MainDashboard'
import React from 'react'

export default function Overview() {
  return (
    <div className=' relative'>
    <DashboardBanner/>
    {/* dasboard */}
    <div className='absolute top-18 w-full overflow-y-auto'>
      <MainDashboard/>
    </div>
    </div>
  )
}
