import Link from 'next/link';
import React from 'react'
import { MdOutlineInventory, MdOutlineInventory2 } from "react-icons/md";
import { IoCartOutline, IoHomeOutline } from "react-icons/io5";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { VscGraph } from "react-icons/vsc";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { GrIntegration } from "react-icons/gr";

export default function SideBar() {
  return (
    <div className='w-[19%] bg-slate-900 min-h-screen'>
      <div class="flex h-screen flex-col justify-between border-e ">
  <div class="px-4 py-6">
    <span class="shrink-0 flex items-center gap-3 justify-center  h-10 w-32 place-content-center rounded-lg  text-lg text-gray-200 font-bold">
    <MdOutlineInventory size={30}/>
     Inventory
    </span>
    <ul class="mt-6 space-y-1 flex flex-col gap-2 text-slate-300">
      <li>
        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2  hover:bg-gray-100 hover:text-gray-700"
          >
            <Link href="/dashboard/home" class=" flex items-center gap-2 shrink-0  text-sm font-medium"> 
            <IoHomeOutline size={19}/>
           
            Home </Link>

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
            <li>
              <Link
                href=""
                class="block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
              >
               Announcements
              </Link>
            </li>

            <li>
              <Link
                href=""
                class="block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
              >
                Getting Started
              </Link>
            </li>

            <li>
              <Link
                href=""
                class="block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
              >
                Over-View
              </Link>
            </li>

            <li>
              <Link
                href=""
                class="block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
              >
                Updates
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <Link href="/dashboard/sales" class=" hover:text-slate-900 font-semibold flex items-center  gap-2 block rounded-lg bg-gray-100 px-4 py-2 text-sm  text-gray-700">
        <IoCartOutline size={19}/>
         Sales
        </Link>
      </li>

      <li>
        <Link
          href="/dashboard/inventory"
          class="flex items-center gap-2 shrink-0 block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-gray-100 hover:text-gray-700"
        >
        <MdOutlineInventory2 size={19}/>
         Inventory
        </Link>
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


  <div class="dm z-50 sticky inset-x-0 bottom-0 border-t border-slate-600">
    <Link href="/" class="dm flex items-center gap-2 shrink-0  p-4 hover:bg-gray-800">
      <img
        alt="Man"
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        class="h-10 w-10 rounded-full object-cover"
      />

      <div className='text-gray-100'>
        <p class="text-xs">
          <strong class="block text-gray-100 font-medium">Eric Frusciante</strong>

          <span> eric@frusciante.com </span>
        </p>
      </div>
    </Link>
  </div>
</div>  
</div>
  )
}
