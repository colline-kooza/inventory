import Link from 'next/link'
import React from 'react'
import { LiaCopySolid } from "react-icons/lia";

export default function HomeNavBar() {
  return (
    <div className='flex flex-col gap-1 p-2 bg-gray-100 border-b border-slate-300'>
        <div className='p-4 flex items-center gap-2'>
                <Link
              href="/"
              className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
            >
              <LiaCopySolid size={19}/>
            </Link>
       <div class="">
      <h1 class="text-[16px] tracking-[.4px] font-bold text-gray-900 ">KOOZA COLLINZ, DEV!</h1>
      <p class=" text-sm text-gray-500">
        Your website 
      </p>
    </div>  
    </div>  
    {/* links */}
<div className=" border-b border-slate-100">
  <div className='dm text-sm flex gap-8 p-3 font-[400px] sticky top-0  z-10'>
    <Link href="/dashboard/home" className="relative group">
      Dashboard
      <span className="absolute bottom-[-6px] left-0 right-0 h-[1px] bg-transparent group-hover:bg-orange-500 transition-all duration-300"></span>
    </Link>

    <Link href="/dashboard/home/getting-started" className="relative group">
      Getting Started
      <span className="absolute bottom-[-6px] left-0 right-0 h-[1px] bg-transparent group-hover:bg-orange-500 transition-all duration-300"></span>
    </Link>

    <Link href="/dashboard/home/updates" className="relative group">
      Recent Updates
      <span className="absolute bottom-[-6px] left-0 right-0 h-[1px] bg-transparent group-hover:bg-orange-500 transition-all duration-300"></span>
    </Link>

    <Link href="/dashboard/home/announcements" className="relative group">
      Announcements
      <span className="absolute bottom-[-6px] left-0 right-0 h-[1px] bg-transparent group-hover:bg-orange-500 transition-all duration-300"></span>
    </Link>
  </div>

</div>


    </div>
  )
}
