import Link from 'next/link'
import React from 'react'
import { LiaTshirtSolid } from 'react-icons/lia'

export default function InventoryCard({cardData}) {
  return (
    <div className='bg-gray-50 flex flex-col items-center gap-3 p-4 rounded-lg shadow-md'>
     <h2 className='text-sm font-semibold'>{cardData.title}</h2>
     <div>
     <LiaTshirtSolid size={100}/>
     </div>
     <p className='text-center text-xs'>{cardData.description}</p>
        <Link href={cardData.path} className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0">
       {cardData.button}
        </Link>
    </div>
  )
}
