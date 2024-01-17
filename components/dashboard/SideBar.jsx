"use client"
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { MdOutlineInventory, MdOutlineInventory2 } from 'react-icons/md';
import { IoAddCircleOutline, IoCartOutline, IoHomeOutline } from 'react-icons/io5';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { VscGraph } from 'react-icons/vsc';
import { HiOutlineClipboardDocument } from 'react-icons/hi2';
import { GrIntegration } from 'react-icons/gr';

export default function SideBar({ isOpen, closeSidebar }) {
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // return () => {
    //   document.removeEventListener('mousedown', handleClickOutside);
    // };
  }, [closeSidebar]);

  const salesLinks = [
    {
      title: 'customers',
      path: '/dashboard/sales/customers',
    },
    {
      title: 'sales Returns',
      path: '/dashboard/sales/salesreturns',
    },
    {
      title: 'payments Received',
      path: '/dashboard/sales/paymentsreceived',
    },
    {
      title: 'Packages',
      path: '/dashboard/sales/packages',
    },
    {
      title: 'sales Order',
      path: '/dashboard/sales/salesorder',
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  const handleCloseSidebar = () => {
    closeSidebar();
  };

  const inventoryLinks = [
    {
      title: 'Adjustments',
      path: '/dashboard/inventory/adjustments/',
    },
    {
      title: 'Categories',
      path: '/dashboard/inventory/categories/',
    },
    {
      title: 'Items',
      path: '/dashboard/inventory/items/',
    },
    {
      title: 'Brands',
      path: '/dashboard/inventory/brands/',
    },
    {
      title: 'warehouse',
      path: '/dashboard/inventory/warehouse/',
    },
    {
      title: 'Units',
      path: '/dashboard/inventory/units/',
    },
    {
      title: 'Supplier',
      path: '/dashboard/inventory/supplier',
    },
  ];

  return (
    <div className={`w-[100%] bg-slate-900 h-screen overflow-y-auto z-[2000] ${isOpen ? 'translate-x-0 overflow-hidden h-screen' : '-translate-x-full overflow-hidden'} transition-transform`}>
      <div ref={sidebarRef} className="flex h-screen flex-col justify-between border-e">
        <div className="px-4 py-6 z-40">
          <span className="shrink-0 flex items-center gap-3 justify-center h-10 w-32 place-content-center rounded-lg text-lg text-gray-200 font-bold">
            <MdOutlineInventory size={30} />
            Inventory
          </span>
          <ul className="mt-6 space-y-1 flex flex-col gap-2 text-slate-300 z-40">
            <li className="bg-[#f3f4f6] rounded-md z-40">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-[#f3f4f6] hover:text-gray-700">
                  <Link href="/dashboard/home" className="flex items-center gap-2 shrink-0 text-gray-500 text-sm font-medium">
                    <IoHomeOutline size={19} />
                    Home
                  </Link>
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4 bg-slate-900 hover:bg-slate-900">
                  <li>
                    <Link href="" onClick={handleCloseSidebar} className="flex justify-between items-center block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-[#f3f4f6] hover:text-gray-700">
                      Announcements <IoAddCircleOutline size={18} />
                    </Link>
                  </li>

                  <li>
                    <Link href="" onClick={handleCloseSidebar} className="flex justify-between items-center block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-[#f3f4f6] hover:text-gray-700">
                      Getting Started <IoAddCircleOutline size={18} />
                    </Link>
                  </li>

                  <li>
                    <Link href="" onClick={handleCloseSidebar} className="flex justify-between items-center lock rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-[#f3f4f6] hover:text-gray-700">
                      Over-View <IoAddCircleOutline size={18} />
                    </Link>
                  </li>

                  <li>
                    <Link href="" onClick={handleCloseSidebar} className="flex justify-between items-center block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-[#f3f4f6] hover:text-gray-700">
                      Updates <IoAddCircleOutline size={18} />
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden z-40">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-[#f3f4f6] hover:text-gray-700">
                  <Link href="/dashboard/sales" className=" flex items-center gap-2 shrink-0 text-sm font-medium">
                    <IoCartOutline size={19} />
                    Sales
                  </Link>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  {salesLinks.map((sales, i) => (
                    <li key={i}>
                      <Link href={sales.path} onClick={handleCloseSidebar} className="flex justify-between items-center block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-[#f3f4f6] hover:text-gray-700">
                        {sales.title} <IoAddCircleOutline size={18} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden z-40">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 hover:bg-[#f3f4f6] hover:text-gray-700">
                  <Link href="/dashboard/inventory" onClick={handleCloseSidebar} className=" flex items-center gap-2 shrink-0 text-sm font-medium">
                    <MdOutlineInventory2 size={19} />
                    Inventory
                  </Link>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  {inventoryLinks.map((inventoryLink, i) => (
                    <li key={i}>
                      <Link href={inventoryLink.path} onClick={handleCloseSidebar} className="flex justify-between items-center block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-[#f3f4f6] hover:text-gray-700">
                        {inventoryLink.title} <IoAddCircleOutline size={18} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            <li>
              <Link href="/dashboard/purchases" onClick={handleCloseSidebar} className="flex items-center gap-2 shrink-0 z-40 block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-[#f3f4f6] hover:text-gray-700">
                <BiPurchaseTagAlt size={19} />
                Purchases
              </Link>
            </li>

            <li>
              <Link href="/dashboard/integrations" onClick={handleCloseSidebar} className="flex items-center gap-2 shrink-0 z-40 block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-[#f3f4f6] hover:text-gray-700">
                <GrIntegration />
                Integrations
              </Link>
            </li>

            <li>
              <Link href="/dashboard/reports" onClick={handleCloseSidebar} className=" flex items-center gap-2 shrink-0 block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-[#f3f4f6] hover:text-gray-700">
                <VscGraph size={19} />
                Reports
              </Link>
            </li>

            <li>
              <Link href="/dashboard/documents" onClick={handleCloseSidebar} className="flex items-center gap-2 shrink-0 block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-[#f3f4f6] hover:text-gray-700">
                <HiOutlineClipboardDocument size={19} />
                Documents
              </Link>
            </li>
          </ul>
        </div>

        <div className="dm z-50 sticky inset-x-0 bottom-0 border-t border-slate-600">
          <Link href="/" onClick={handleCloseSidebar} className="dm flex items-center gap-2 shrink-0 bg-gray-800  p-4 hover:bg-gray-500">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div className="text-gray-100">
              <p className="text-xs">
                <strong className="block text-gray-100 font-medium">Eric Frusciante</strong>
                <span>eric@frusciante.com</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
