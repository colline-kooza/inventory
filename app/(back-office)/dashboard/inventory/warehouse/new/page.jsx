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
import { useSession } from 'next-auth/react'

export default function NewWareHouse({initialData , isUpdate}) {
  const router=useRouter()
  const { data: session } = useSession();
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
      } = useForm({
        defaultValues:{
          ...initialData
        }
      })

   async function onSubmit(data){
  try {
    const warehouseData = isUpdate
    ? { ...data, ownerId: session.user.id }
    : { ...data, ownerId: session.user.id };
    const method = isUpdate ? "PUT":"POST"
    const baseUrl = 'http://localhost:3000';
    const apiUrl =isUpdate? `${baseUrl}/api/warehouse/${initialData.id}`: `${baseUrl}/api/warehouse`
    ApiRequest({ setLoading, url: apiUrl, data:warehouseData , toastName: 'warehouse', reset, method , onSuccess: (result) => {
      router.push('/dashboard/inventory/warehouse');
    } });
     
  } catch (error) {
    console.log(error)
  }
      }
  return (
    <div className='flex flex-col gap-2'>
      {/* head*/}
      <div className=''>
       <FormHeader title="Ware House"/>
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
    {
      isUpdate?(<SubmitButton loading={loading} buttonText="update warehouse"/>
      ):(
        <SubmitButton loading={loading} buttonText="Add new warehouse"/>
      )
    }
    </form>
  </div>
    </div>
  )
}
