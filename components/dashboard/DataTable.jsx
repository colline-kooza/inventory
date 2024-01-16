import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';

export default function DataTable({ data, columns }) {
  // const handleEdit = (id) => {
  //   // Add logic for handling the edit action here
  //   console.log(`Edit action clicked for item with id ${id}`);
  // };

  // const handleDelete = (id) => {
  //   // Add logic for handling the delete action here
  //   console.log(`Delete action clicked for item with id ${id}`);
  // };

  return (
    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead className="text-xs text-slate-800 font-bold uppercase bg-slate-200 border-b border-slate-500">
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="px-6 py-3">
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
                {item[column.key]}
                </div>
                </td>
              ))}
              <td className="px-6 py-4 flex space-x-6">
                <button
                  // onClick={() => handleEdit(item.id)}
                  className="shrink-0 font-medium flex gap-1 items-center text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <FaRegEdit size={16} /> Edit
                </button>
                <button
                  // onClick={() => handleDelete(item.id)}
                  className="shrink-0 text-red-600 font-bold hover:underline flex gap-1 items-center"
                >
                  <RiDeleteBin6Line size={16} /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
