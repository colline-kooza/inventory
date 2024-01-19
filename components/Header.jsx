"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { SiAddthis } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";
import { LuUsers2 } from "react-icons/lu";
import { signOut, useSession } from 'next-auth/react';


export default function Header({ toggleSidebar }) {
  const { data: session, status} = useSession()
  const [popupVisible, setPopupVisible] = useState(false);
    const handleInitialClick = () => {
      setPopupVisible(!popupVisible);
    };
  return (
  <header className="bg-slate-200 ">

    <div className="mx-auto max-w-screen-xl px-1 py-3 border-b border-slate-200  lg:py-2 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-2 sm:gap-2">
        <div className="relative hidden sm:block">
          <input
            className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Search in customers..."
          />
  
          <button
            type="button"
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
          <div className="flex gap-4">
            <button
              type="button"
              className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
            >
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
  
            <Link
              href="/"
              className="lg:block md:block hidden shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
            >
              
              <SiAddthis size={18}/>
            </Link>
  
            <Link
              href="/"
              className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
            >
              <LuUsers2 size={18}/>
            </Link>
  
            <Link
              href="/"
              className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
            >
              <span className="sr-only">icon</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </Link>
           
          </div>
          {
  status=="loading"?(<span class="loader2"></span>):(
    <button  onClick={handleInitialClick}
    type="button" className="group flex shrink-0 items-center rounded-lg transition ">
          <h2 className="h-10 w-10 rounded-full object-cover bg-blue-500 flex justify-center items-center text-2xl text-white font-bold">{session.user.name[0]}</h2>
            <p className="ms-2 hidden text-left text-xs sm:block">
              <strong className="block font-medium">{session?.user.name}</strong>
  
              <span className="text-gray-500"> {session?.user.email} </span>
            </p>
  
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
  )
 }
           {popupVisible && status === 'authenticated' && (
        <div className="z-30 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg flex gap-2 items-center justify-center flex-col w-[90%] lg:w-[30%]">
          

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
    
   
    </div>
    <div class="flex flex-col items-center pb-10">
    <h2 className="text-center h-20 w-20 rounded-full object-cover bg-blue-500 flex justify-center items-center text-5xl text-white font-bold mb-4">{session.user.name[0]}</h2>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{session.user.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{session.user.email}</span>
        <div class="flex mt-4 md:mt-6">
            <button onClick={handleInitialClick}
  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Return</button>
            <button onClick={()=>signOut()} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Log Out</button>
        </div>
    </div>
</div>
          </div>
        </div>
             )}
          <button
          onClick={toggleSidebar}
          className="mr-5 block lg:hidden shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
        >
          <span className="sr-only">icon</span>
          <CgMenuGridO />
        </button>
        </div>
      </div>
    </div>
  </header>
  )
}
