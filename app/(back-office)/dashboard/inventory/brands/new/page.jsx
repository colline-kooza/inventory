"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormHeader from '@/components/dashboard/FormHeader'
import TextInput from '@/components/formInputs/TextInput'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextArea from '@/components/formInputs/TextArea'

export default function Brands() {
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
        const response = await fetch("http://localhost:3000/api/brands",{
          method:"POST",
          headers:{
            "content-Type":"application/json"
          },
          body:JSON.stringify(data)
        })
        if (response.ok){
        console.log(response)
         const brand=await response.json()
         console.log(brand)
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
       <FormHeader title="New Brand"/>
     </div>
   {/* form */}
   <div className='mx-[5rem]'>
   <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5 bg-slate-50 shadow-lg">
    <div className="grid gap-4 mb-4 grid-cols-2">
      <TextInput label="brand title" name="brand" register={register} errors={errors} type="text"/>
    </div>
    <SubmitButton loading={loading} buttonText="Add new brand"/>
    </form>
  </div>
    </div>
  )
}
