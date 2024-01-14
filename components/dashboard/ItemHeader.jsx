"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { CiLineHeight } from 'react-icons/ci';
import { BsQuestion } from "react-icons/bs";
import { SiAddthis } from 'react-icons/si';

export default function ItemHeader({title , link}) {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
   <div className='flex items-center justify-between'>
     <div className="relative">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-slate-900 font-semibold text-lg px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
      {title}
        <svg
          className={`w-2.5 h-2.5 ms-3 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="absolute z-10 bg-white shadow-md divide-y divide-gray-100 rounded-lg  w-44 text-gray-600"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="/" className="block text-gray-900 px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-600 dark:hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-900  dark:hover:bg-blue-600 dark:hover:text-white">
                Settings
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-900  block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-600 dark:hover:text-white">
                Earnings
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-900  block px-4 py-2 hover:bg-gray-100 dark:hover:bg-blue-600 dark:hover:text-white">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
    <div className="flex gap-4">
    <Link
              href="/"
              className="items-center flex block shadow-md shrink-0 rounded-lg bg-white p-2.5 text-gray-600  hover:text-gray-700"
            >
                <CiLineHeight size={18}/>
     </Link>

    <Link href={link} class="shadow-md px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-500 flex items-center gap-1  dark:focus:ring-blue-800"><SiAddthis size={12}/> New</Link>

            <Link
              href="/"
              className="items-center flex block shadow-md shrink-0 rounded-lg bg-white p-2.5 text-gray-600   hover:text-gray-700"
            >
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
           <Link
              href="/"
              className="items-center flex block shrink-0 rounded-lg shadow-md bg-white p-2.5 text-gray-600 hover:text-gray-700"
            >
              <span className="sr-only">icon</span>
              <BsQuestion />
            </Link>
    </div>
   </div>
  )
}
