"use client"
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';
import { MdOutlineInventory, MdOutlineInventory2 } from "react-icons/md";
import { IoAddCircleOutline, IoCartOutline, IoHomeOutline } from "react-icons/io5";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { VscGraph } from "react-icons/vsc";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { GrIntegration } from "react-icons/gr";
import { useSession } from 'next-auth/react';

export default function SideBarLarge() {
  const { data: session, status} = useSession()
  const [popupVisible, setPopupVisible] = useState(false);
    const handleInitialClick = () => {
      setPopupVisible(!popupVisible);
    };
  const salesLink=[
    {
      title:"customers",
      path:"/dashboard/sales/customers"
    },
    {
      title:"sales Returns",
      path:"/dashboard/sales/salesreturns"
        },

    {
      title:"payments Received",
      path:"/dashboard/sales/paymentsrecieved"
        },

    {
      title:"Packages",
      path:"/dashboard/sales/packages"
        },
    {
      title:"sales  Order",
      path:"/dashboard/sales/salesorder"   
     },

  ]

  const inventoryLinks=[
    {
      title:"Adjustments",
      path:"/dashboard/inventory/adjustments/"
    },
    {
      title:"Categories",
      path:"/dashboard/inventory/categories/"
     },

    {
      title:"Items ",
      path:"/dashboard/inventory/items/"
    },

    {
      title:"Brands",
      path:"/dashboard/inventory/brands/"
        },
    {
      title:"ware house",
      path:"/dashboard/inventory/warehouse/"  
     },
    {
      title:"Units",
      path:"/dashboard/inventory/units/"  
     },
    {
      title:"Supplier",
      path:"/dashboard/inventory/supplier"  
     },
  ]
  return (
    <div  className="`w-[100%] bg-slate-900 min-h-screen overflow-y-auto z-50 ">
      <div  className="flex h-screen flex-col justify-between border-e">
  <div class="px-4 py-6">
    <span class="shrink-0 flex items-center gap-3 justify-center  h-10 w-32 place-content-center rounded-lg  text-lg text-gray-200 font-bold">
    <MdOutlineInventory size={30}/>
     Inventory
    </span>
    <ul class="mt-6 space-y-1 flex flex-col gap-2 text-slate-300">
      <li className="bg-gray-100 rounded-md">
    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary
        className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-gray-100 hover:text-gray-700"
      >
        <Link href="/dashboard/home" className="flex items-center gap-2 shrink-0 text-gray-500 text-sm font-medium"> 
          <IoHomeOutline size={19}/>
          Home
        </Link>
        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </summary>

      <ul class="mt-2 space-y-1 px-4 bg-slate-900 hover:bg-slate-900">
            <li>
              <Link
                href=""
                class="flex justify-between items-center block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
              >
               Announcements <IoAddCircleOutline size={18}/>
              </Link>
            </li>

            <li>
              <Link
                href=""
                class="flex justify-between items-center block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
              >
                Getting Started <IoAddCircleOutline size={18}/>
              </Link>
            </li>

            <li>
              <Link
                href=""
                class="flex justify-between items-center lock rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
              >
                Over-View <IoAddCircleOutline size={18}/>
              </Link>
            </li>

            <li>
              <Link
                href=""
                class="flex justify-between items-center block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
              >
                Updates <IoAddCircleOutline size={18}/>
              </Link>
            </li>
          </ul>
    </details>
  </li>

      <li>
        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-gray-100 hover:text-gray-700"
          >
            <Link href="/dashboard/sales" class=" flex items-center gap-2 shrink-0  text-sm font-medium"> 
            <IoCartOutline size={19}/>
            Sales </Link>

            <span class="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul class="mt-2 space-y-1 px-4">

            {
              salesLink.map((sales , i)=>{
                return(
                  <li>
              <Link
                href={sales.path}
                class="flex justify-between items-center block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
              >
               {sales.title} <IoAddCircleOutline size={18}/>
              </Link>
            </li>
                )
              })
            }
        
          </ul>
        </details>
      </li>

      <li>
        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-gray-100 hover:text-gray-700"
          >
            <Link   href="/dashboard/inventory" class=" flex items-center gap-2 shrink-0  text-sm font-medium"> 
            <MdOutlineInventory2 size={19}/>
            Inventory
            </Link>

            <span class="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul class="mt-2 space-y-1 px-4">
            {
              inventoryLinks.map((link , i)=>{
                return(
                  <li key={i}>
                  <Link
                    href={link.path}
                    class="flex justify-between items-center block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                   {link.title} <IoAddCircleOutline size={18}/>
                  </Link>
                </li>
                )
              })
            }
          </ul>
        </details>
      </li>

      <li>
        <Link
          href="/dashboard/purchases"
          class="flex items-center gap-2 shrink-0  block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
        >
            <BiPurchaseTagAlt size={19}/>
          Purchases
        </Link>
      </li>


      <li>
        <Link
          href="/dashboard/intergrations"
          class="flex items-center gap-2 shrink-0 block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
        >
            <GrIntegration />
         Integrations
        </Link>
      </li>

      <li>
        <Link
          href="/dashboard/reports"
          class=" flex items-center gap-2 shrink-0 block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
        >
            <VscGraph size={19}/>
        Reports
        </Link>
      </li>

      <li>
        <Link
          href="/dashboard/documents"
          class="flex items-center gap-2 shrink-0 block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
        >
            <HiOutlineClipboardDocument size={19} />
       Documents
        </Link>
      </li>
    </ul>
  </div>

 {
  status=="loading"?(<span class="loader2"></span>):(
    <div class="dm z-50 sticky inset-x-0 bottom-0 border-t border-slate-600">
    <button onClick={handleInitialClick} class="dm flex items-center gap-2 shrink-0 bg-gray-800  p-4 hover:bg-gray-500 w-full">
    <h2 className="h-10 w-10 rounded-full object-cover bg-blue-500 flex justify-center items-center text-2xl text-white font-bold">{session.user.name[0]}</h2>

      <div className='text-gray-100'>
        <p class="text-xs">
          <strong class="block text-gray-100 font-medium">{session?.user.name}</strong>

          <span>{session?.user.email}</span>
        </p>
      </div>
    </button>
  </div>
  )
 }
 
 {popupVisible && status === 'authenticated' && (
        <div className="z-30 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className=" p-4 rounded-lg flex gap-2 items-center justify-center flex-col w-[90%] lg:w-[30%]">
          

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
</div>  
</div>
  )
}
