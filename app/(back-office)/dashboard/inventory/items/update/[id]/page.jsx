import ItemComponent from '@/components/dashboard/ItemComponent';
import getData from '@/utils/getData';
import getSingle from '@/utils/getSingle';
import React from 'react'

export default async function Update({params:{id}}) {
    const singleData = await getSingle(`/items/${id}`); 
    const categoriesData = getData('categories');
  const unitsData =  getData("units")
  const brandsData = getData("brands")
  const supplierData =  getData("supplier")
  const warehouseData = getData("warehouse")
  const [categories, units ,brands,supplier ,warehouse] = await Promise.all([categoriesData ,unitsData ,brandsData ,supplierData ,warehouseData ])
  return (
    <div>
    <ItemComponent initialData={singleData } isUpdate={true} categories={categories} units={units} brands={brands} warehouse={warehouse} supplier={supplier}/>
    </div>
  )
}
