"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormHeader from '@/components/dashboard/FormHeader'
import TextInput from '@/components/formInputs/TextInput'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextArea from '@/components/formInputs/TextArea'
import SelectInput from '@/components/formInputs/SelectInput'
import ApiRequest from '@/utils/ApiRequest'
import { useRouter } from 'next/navigation'

export default function NewWareHouse() {
  const router=useRouter()
  const options=[
    {
      title:"Branch",
    },
    {
      title:"Main",
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
    const baseUrl = 'http://localhost:3000';
    const apiUrl = `${baseUrl}/api/warehouse`;
    ApiRequest({ setLoading, url: apiUrl, data:data, toastName: 'warehouse', reset, method: 'POST' , onSuccess: (result) => {
      router.push('/dashboard/inventory/warehouse');
    } });
     
      }
  return (
    <div className='flex flex-col gap-2'>
      {/* head*/}
      <div className=''>
       <FormHeader title="New Ware House"/>
     </div>
   {/* form */}
   <div className='mx-[5rem]'>
   <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5 bg-slate-50 shadow-lg">
    <div className="grid gap-4 mb-4 grid-cols-2">
      <TextInput label="warehouse title" name="title" register={register} errors={errors} type="text"/>
      <TextInput label="warehouse location" name="location" register={register} errors={errors} type="text"/>
    <TextArea errors={errors} label="warehouse description"  description="description" register={register} /> 
    <SelectInput register={register} options={options} errors={errors} name="type" label="select ware house type"/>
    </div>
    <SubmitButton loading={loading} buttonText="Add new warehouse"/>
    </form>
  </div>
    </div>
  )
}
