import InventoryCard from '@/components/dashboard/InventoryCard'
import ItemHeader from '@/components/dashboard/ItemHeader'
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbBrandSlack } from "react-icons/tb";
import { MdWarehouse } from "react-icons/md";
import { MdAdUnits } from "react-icons/md";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { FaSupple } from "react-icons/fa6";


import React from 'react'

export default function Inventory() {
  const cardData = [
    {
      title: "Categories",
      button: "New categories",
      path: "/dashboard/inventory/categories/new",
      icon: TbCategory2 ,
      description: "Create and manage item groups effortlessly for organized inventory control.",
    },
    {
      title: "Item",
      button: "New Item",
      icon: MdOutlineProductionQuantityLimits,
      path: "/dashboard/inventory/items/new",
      description: "Add new items to your inventory and keep track of stock details.",
    },
    {
      title: "Brands",
      button: "New Brand",
      icon: TbBrandSlack ,
      path: "/dashboard/inventory/brands/new",
      description: "Enhance inventory management by creating and updating items seamlessly.",
    },
    {
      title: "ware house",
      button: "New Ware house",
      icon: MdWarehouse,
      path: "/dashboard/inventory/units/new",
      description: "Optimize inventory tracking with the addition and maintenance of individual items.",
    },
    {
      title: "Units",
      button: "New Units",
      icon:MdAdUnits ,
      path: "/dashboard/inventory/units/new",
      description: "Streamline inventory processes by organizing and updating individual item records.",
    },
    {
      title: "Adjustments",
      button: "New Adjustment",
      icon: HiAdjustmentsVertical,
      path: "/dashboard/inventory/adjustments/new",
      description: "Streamline inventory processes by organizing and updating individual item records.",
    },
    {
      title: "Supplier",
      button: "New Supplier",
      icon: FaSupple ,
      path: "/dashboard/inventory/supplier/new",
      description: "Streamline inventory processes by organizing and updating individual item records.",
    },
  ];
  
  return (
    <div className='py-3'>
      <ItemHeader title="Inventory " link="/dashboard/inventory/"/>
      <div className='lg:px-[3rem]'>
        <div  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 min-w-full min-h-screen p-5 gap-4 lg:gap-8'>
          {
            cardData.map((item , i)=>{
              return(
                <InventoryCard cardData={item} key={i}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
