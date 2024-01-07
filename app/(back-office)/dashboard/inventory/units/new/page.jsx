"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormHeader from '@/components/dashboard/FormHeader'
import TextInput from '@/components/formInputs/TextInput'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextArea from '@/components/formInputs/TextArea'

export default function UnitsNew() {
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
        const response = await fetch("http://localhost:3000/api/units/",{
          method:"POST",
          headers:{
            "content-Type":"application/json"
          },
          body:JSON.stringify(data)
        })
        if (response.ok){
     console.log(response)
         const unit=await response.json()
         console.log(unit)
         setLoading(false)
        }
      console.log(data)
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
       <FormHeader/>
     </div>
   {/* form */}
   <div className='mx-[5rem]'>
   <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5 bg-slate-50 shadow-lg">
    <div className="grid gap-4 mb-4 grid-cols-2">
      <TextInput label="unit title" name="name" register={register} errors={errors} type="text"/>
    <TextArea errors={errors} label="Unit abbreviation"  description="abbreviation" register={register} /> 
    </div>
    <SubmitButton loading={loading} buttonText="Add new Unit"/>
    </form>
  </div>
    </div>
  )
}
