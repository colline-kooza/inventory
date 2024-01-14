import React from 'react';

export default function DataTable({ data, columns }) {
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
                  {item[column.key]}
                </td>
              ))}
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
