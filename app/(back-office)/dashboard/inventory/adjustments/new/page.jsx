
import AdjustmentComponent from '@/components/dashboard/AdjustmentComponent'
import getData from '@/utils/getData';
import React from 'react'

export default async function page() {
  const itemsData = await getData("items")
  const warehouseData =await getData("warehouse")
  return (
    <div>
      <AdjustmentComponent warehouse={warehouseData} itemsData={itemsData}/>
    </div>
  )
}
