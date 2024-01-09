"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormHeader from '@/components/dashboard/FormHeader'
import TextInput from '@/components/formInputs/TextInput'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextArea from '@/components/formInputs/TextArea'
import SelectInput from '@/components/formInputs/SelectInput'
import TransferInventory from '@/components/dashboard/TransferInventory'

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
    <div className='flex flex-col gap-2'>
      {/* head*/}
      <div className=''>
       <FormHeader title="New Adjustments"/>
     </div>
   {/* form */}
   <TransferInventory/>
    </div>
  )
}
