import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import Link from 'next/link';
import { GrFormViewHide } from 'react-icons/gr';
import DeteleBtn from './DeteleBtn';

export default function DataTable({ data, columns, resourceName }) {
  return (
    <div className="overflow-x-auto lg:shadow-lg sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead className="text-xs text-slate-800 font-bold uppercase bg-slate-200 border-b border-slate-500">
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="px-6 py-3 flex-shrink-0">
                {column.label}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'odd:bg-white' : 'even:bg-gray-50'
              } border-b border-gray-500`}
            >
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4">
                  <div className='line-clamp-1'>
                    {column.key === 'createdAt' || column.key === 'updatedAt' ? new Date(item[column.key]).toLocaleString() : item[column.key]}
                  </div>
                </td>
              ))}
              <td className="px-6 py-4 flex space-x-6">
                <Link
                  href={`/dashboard/inventory/${resourceName}/update/${item.id}`}
                  className="shrink-0 font-medium flex gap-1 items-center text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <FaRegEdit size={16} /> Edit
                </Link>
              <DeteleBtn endpoint={resourceName} id={item.id}/>
             
                {
                  resourceName === "items"?(
                    <Link
                    href={`/dashboard/inventory/${resourceName}/view/${item.id}`}
                    className="shrink-0 font-medium flex gap-1 items-center text-green-600 dark:text-green-600 hover:underline"
                  >
                  <GrFormViewHide size={16}/> View
                  </Link>
                  ):""
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
