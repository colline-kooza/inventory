"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '@/components/formInputs/TextInput'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextArea from '@/components/formInputs/TextArea'
import SelectInput from '@/components/formInputs/SelectInput'

export default function AddInventoryForm({warehouse , itemsData}) {
  const [loading , setLoading]=useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

   async function onSubmit(data){
      try {
        setLoading(true)
        const response = await fetch("http://localhost:3000/api/adjustments/add",{
          method:"POST",
          headers:{
            "content-Type":"application/json"
          },
          body:JSON.stringify(data)
        })
        if (response.ok){
         const adjustments=await response.json()
         setLoading(false)
        }
    reset()
      } catch (error) {
        setLoading(true)
        console.log(error)
      }
      }
  return (
       <div className='mx-[5rem] '>
   <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5 shadow-lg bg-slate-100">
    <div className="grid gap-4 mb-4 grid-cols-2 ">
      <div className="col-span-2sm:col-span-1 mb-2">
    
    
      <SelectInput className='' register={register} options={warehouse}  name="sendingWareHouseId" label="select the ware house to send the stock"/>
     </div>

     <div className="col-span-2 sm:col-span-1 mb-4">
     <SelectInput className='' register={register} options={itemsData}  name="itemId" label="select the items to transfer"/>
     </div>

     <div className="col-span-2 sm:col-span-1 mb-4">
     <SelectInput className='' register={register} options={warehouse} errors={errors} name="receivingWarehouseId" label="select the ware house to receive the stock"/>
     </div>
     <div className='col-span-2 sm:col-span-1'>
     <TextInput label="Qty to transfer" name="qtyNumber" register={register} errors={errors} type="number"/>
     </div>

  

     <div className="col-span-2">
    <TextArea errors={errors} label="Adjustments Notes" description="notes" register={register} />
     </div>   
    </div>
    <SubmitButton loading={loading} buttonText="Add new Stock"/>
    </form>
  </div>
  )
}
