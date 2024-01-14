import ItemHeader from '@/components/dashboard/ItemHeader'
import React from 'react'

export default function Adjustments() {
  return (
    <div className="py-4">
    <ItemHeader title="All Adjustments" link="/dashboard/inventory/adjustments/new"/>
   </div>
  )
}
