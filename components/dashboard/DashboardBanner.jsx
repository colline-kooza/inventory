"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineInventory2 } from 'react-icons/md';

export default function DashboardBanner() {
    const [showBanner, setShowBanner] = useState(true);

    const handleCloseBanner = () => {
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div id="marketing-banner" tabIndex="-1" className="z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 mt-2 ml-2 rounded-lg shadow-sm lg:max-w-7xl dark:bg-gray-white dark:border-gray-600">
            <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
                <Link href="/" className="flex gap-2 items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600 ">
                <MdOutlineInventory2 size={25}/>
                    <span className="self-center text-lg font-semibold whitespace-nowrap text-gray-700">Inventory</span>
                </Link>
                <p className="flex items-center text-xs lg:text-sm font-normal text-gray-600 ">Businesses are moving towards an online structure as they are easy, secure, and fast. Try Inventory for your business.</p>
            </div>
            <div className="flex items-center flex-shrink-0">
                <Link href="" className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Enable</Link>
                <button onClick={handleCloseBanner} type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close banner</span>
                </button>
            </div>
        </div>
    );
}
