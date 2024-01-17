"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormHeader from '@/components/dashboard/FormHeader'
import TextInput from '@/components/formInputs/TextInput'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextArea from '@/components/formInputs/TextArea'
import ApiRequest from '@/utils/ApiRequest'
import { useRouter } from 'next/navigation'

export default function NewSupplierNew({initialData , isUpdate}) {
  // console.log(initialData , isUpdate)
  const router=useRouter()
  const options=[
    {
      label:"Branch",
      value:"Branch"
    },
    {
      label:"Main",
      value:"Main"
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
          ...initialData,
        }
      })

     async function onSubmit(data){
      const method=isUpdate?"PUT":"POST"
     const baseUrl = 'http://localhost:3000';
     const apiUrl = isUpdate ?`${baseUrl}/api/supplier/${initialData.id}`:`${baseUrl}/api/supplier`
     ApiRequest({ setLoading, url: apiUrl, data, toastName: 'supplier', reset, method ,onSuccess: (result) => {
     router.push('/dashboard/inventory/supplier');
    } });
      }
  return (
    <div className='flex flex-col gap-2'>
      {/* head*/}
      <div className=''>
       <FormHeader title="Supplier"/>
     </div>
   {/* form */}
   <div className='mx-[5rem]'>
   <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5 bg-slate-50 shadow-lg">
    <div className="grid gap-4 mb-4 grid-cols-2">
        <div className='className="col-span-2 sm:col-span-1 mb-4'>
         <TextInput label="Supplier Name" name="name" register={register} errors={errors} type="text"/>
        </div>
        
        <div className='className="col-span-2 sm:col-span-1 mb-4'>
      <TextInput label="Supplier location" name="address" register={register} errors={errors} type="address"/>
        </div>

        <div className='className="col-span-2 sm:col-span-1 mb-4"'>
        <TextInput label="Supplier contact" name="contactPerson" register={register} errors={errors} type="number"/>
        </div>

        <div className='className="col-span-2 sm:col-span-1 mb-4"'>
        <TextInput label="Supplier code" name="supplierCode" register={register} errors={errors} type="number"/>
        </div>

        <div className='className="col-span-2 sm:col-span-1 mb-4"'>
        <TextInput label="Payment Terms" name="paymentTerms" register={register} errors={errors} type="text"/>
        </div>

        <div className='className="col-span-2 sm:col-span-1 mb-4"'>
        <TextInput label="Tax Id" name="taxID" register={register} errors={errors} type="number"/>
        </div>

        <div className='className="col-span-2 sm:col-span-1 mb-4"'>
        <TextInput label="Supplier Email" name="email" register={register} errors={errors} type="email"/>
        </div>
        
        <div className="col-span-2">
       <TextArea errors={errors} label="Supplier Notes" description="notes" register={register} />
        </div>
    </div>
   {
    isUpdate?( <SubmitButton loading={loading} buttonText="update supplier"/>):(
      <SubmitButton loading={loading} buttonText="Add new supplier"/>
    )
   }
    </form>
  </div>
    </div>
  )
}
