"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextInput from './TextInput'
import SubmitButton from './SubmitButton'
import TextArea from './TextArea'
import ApiRequest from '@/utils/ApiRequest'
import { useRouter } from 'next/navigation'

export default function CreateForm({initialData, isUpdate}) {
  // console.log({initialData, isUpdate})
  const router=useRouter()
    const [loading , setLoading]=useState(false)
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      defaultValues: {
        title: initialData?.title,
        description: initialData?.description,
      },
    });

      async function onSubmit(data) {
        try {
          const categoryData = {
            description: data.description,
            title: data.name,
          };
      console.log(categoryData)
          const method = isUpdate ? "PUT" : "POST";
          const baseUrl = 'http://localhost:3000';
          const apiUrl = initialData ? `${baseUrl}/api/categories/${initialData.id}` : `${baseUrl}/api/categories`;
      
          ApiRequest({
            setLoading,
            url: apiUrl,
            data: categoryData,
            toastName: 'category',
            reset,
            method,
            onSuccess: (result) => {
              router.push('/dashboard/inventory/categories');
            },
          });
      
        } catch (error) {
          console.log(error);
        }
      }
      
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5 bg-slate-50 shadow-lg">
    <div className="grid gap-4 mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full ">
      <TextInput label="Category title" name="name" register={register} errors={errors} type="text"/>
    <TextArea errors={errors} label="Category Description"  description="description" register={register} /> 
    </div>
  {
    isUpdate?(
      <SubmitButton loading={loading} buttonText="update Category"/>
    ):(
      <SubmitButton loading={loading} buttonText=" Add new Category"/>
    )
  }
    </form>
  )
}
