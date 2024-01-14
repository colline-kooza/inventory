"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormHeader from '@/components/dashboard/FormHeader'
import TextInput from '@/components/formInputs/TextInput'
import SubmitButton from '@/components/formInputs/SubmitButton'

import ApiRequest from '@/utils/ApiRequest'

export default function Brands() {
  const [loading , setLoading]=useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

   async function onSubmit(data){
    const baseUrl = 'http://localhost:3000';
    const apiUrl = `${baseUrl}/api/brands`;
    ApiRequest({ setLoading, url: apiUrl, data:data, toastName: 'brand', reset, method: 'POST' });

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
      <TextInput label="brand title" name="title" register={register} errors={errors} type="text"/>
    </div>
    <SubmitButton loading={loading} buttonText="Add new brand"/>
    </form>
  </div>
    </div>
  )
}
