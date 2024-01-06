import InventoryCard from '@/components/dashboard/InventoryCard'
import ItemHeader from '@/components/dashboard/ItemHeader'
import React from 'react'

export default function Inventory() {
  return (
    <div className='py-3'>
      <ItemHeader/>
      <div className=''>
      <InventoryCard/>
      </div>
    </div>
  )
}
