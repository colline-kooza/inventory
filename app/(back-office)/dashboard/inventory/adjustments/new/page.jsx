"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormHeader from '@/components/dashboard/FormHeader'
import { FcPlus } from "react-icons/fc";
import { CgRemove } from "react-icons/cg";


import TransferInventory from '@/components/dashboard/TransferInventory'
import AddInventoryForm from '@/components/dashboard/AddInventoryForm';

export default function NewAdjustments() {
  const branches=[
    {
      label:"Branch A",
      value:"Branch A"
    },
    {
      label:"Branch A",
      value:"Main"
    },
    {
      label:"Main A",
      value:"Branch A"
    },
    {
      label:"Main B",
      value:"Main"
    },
  ]
  const tabBtns=[
    {
      value:"Add stock",
      icon:FcPlus ,
      form : "add"
    },
    {
      value:"Remove stock",
      icon:CgRemove  ,
      form : "remove"
    },
   
  ]
  const [activeForm , setActiveForm]=useState("add")
  const [loading , setLoading]=useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

  return (
    <div className='flex flex-col gap-2'>
      {/* head*/}
      <div className=''>
       <FormHeader title="New Adjustments"/>
     </div>
   {/* form */}


   <div class="border-b border-gray-200">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
    {
        tabBtns.map((tab ,i)=>{
          const Icon=tab.icon
          return(
        <li key={i} class="me-2">
            <button onClick={()=>setActiveForm(tab.form)} href="/" className={`${activeForm === tab.form ?"inline-flex gap-2 items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 border-blue-500 group":"inline-flex gap-2 items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}`}>
              <Icon size={20} />  {tab.value}
            </button>
         </li>
          )
        })
      }
    </ul>
</div>
{
  activeForm ==="add" ?(<AddInventoryForm/>):(<TransferInventory/>)
}
    </div>
  )
}
