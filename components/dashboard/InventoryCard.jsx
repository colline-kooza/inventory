import Link from 'next/link';
import React from 'react';

export default function InventoryCard({ cardData }) {
  const IconComponent = cardData.icon; 

  return (
    <div className='bg-gray-200 flex flex-col items-center h-[98%] gap-3 p-4 rounded-lg shadow-md'>
      <h2 className='lg:text-sm font-bold text-lg'>{cardData.title}</h2>
      <div>
        <IconComponent size={40} />
      </div>
      <p className='text-center text-xs'>{cardData.description}</p>
      <Link href={cardData.path} className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0">
        {cardData.button}
      </Link>
    </div>
  );
}
