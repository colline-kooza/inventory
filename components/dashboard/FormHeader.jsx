import Link from 'next/link'
import React from 'react'
import { MdOutlineInventory2 } from 'react-icons/md'

export default function FormHeader({title}) {
  return (
    <div id="marketing-banner" tabIndex="-1" className="z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 mt-2 ml-2 rounded-lg shadow-sm lg:max-w-7xl dark:bg-gray-white dark:border-gray-600">
    <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
        <Link href="/" className="flex gap-2 items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600">
        <MdOutlineInventory2 size={25}/>
            <span className="self-center text-lg font-semibold whitespace-nowrap text-gray-700">{title}</span>
        </Link>
    </div>
    <div className="flex items-center flex-shrink-0">
        <Link href="/dashboard/inventory" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close banner</span>
        </Link>
    </div>
</div>
  )
}
