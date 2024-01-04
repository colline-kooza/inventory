import Header from '@/components/Header'
import React from 'react'

export default function Layout({children}) {
  return (
    <div className='flex w-full min-h-screen'>
      <div className='w-[19%] bg-slate-900'>
      <h2>side Bar</h2>
      </div>
      <main className='w-[81%] bg-gray-300'>
        <Header/>
      {children}
      </main>
     </div>
  )
}
