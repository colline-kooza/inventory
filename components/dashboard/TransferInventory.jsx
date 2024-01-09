"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '@/components/formInputs/TextInput'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextArea from '@/components/formInputs/TextArea'
import SelectInput from '@/components/formInputs/SelectInput'

export default function TransferInventory() {
  const branches=[
    {
      label:"Branch A",
      value:"Branch A"
    },
    {
      label:"Branch A",
      value:"Main"
    },
  ]
  const [loading , setLoading]=useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

   async function onSubmit(data){
    console.log(data)
      try {
        setLoading(true)
        const response = await fetch("http://localhost:3000/api/adjustments",{
          method:"POST",
          headers:{
            "content-Type":"application/json"
          },
          body:JSON.stringify(data)
        })
        if (response.ok){
          console.log(response)
         const adjustments=await response.json()
         console.log(adjustments)
         setLoading(false)
        }
    reset()
      } catch (error) {
        setLoading(true)
        console.log(error)
      }
      }
  return (
       <div className='mx-[5rem]'>
   <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5 bg-slate-50 shadow-lg">
    <div className="grid gap-4 mb-4 grid-cols-2">
      <TextInput label="Enter amount of Stock to Transfer" name="transferStockQty" register={register} errors={errors} type="number"/>
      <div className="col-span-2">
    <TextArea errors={errors} label="Adjustments Notes" description="notes" register={register} />
     </div>   
     <SelectInput register={register} options={branches} errors={errors} name="recievingBranchId" label="select branch that will receive the stock"/>
    </div>
    <SubmitButton loading={loading} buttonText="Add new adjustments"/>
    </form>
  </div>
  )
}
