"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextInput from './TextInput'
import SubmitButton from './SubmitButton'
import TextArea from './TextArea'
import ApiRequest from '@/utils/ApiRequest'

export default function CreateForm() {
    const [loading , setLoading]=useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

   async function onSubmit(data){
    const categoryData={
      description: data.description,
      title: data.name
    }
    const baseUrl = 'http://localhost:3000';
    const apiUrl = `${baseUrl}/api/categories`;
    ApiRequest({ setLoading, url: apiUrl, data:categoryData, toastName: 'category', reset, method: 'POST' });
      
      }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5 bg-slate-50 shadow-lg">
    <div className="grid gap-4 mb-4 grid-cols-2">
      <TextInput label="Category title" name="name" register={register} errors={errors} type="text"/>
    <TextArea errors={errors} label="Category Description"  description="description" register={register} /> 
    </div>
    <SubmitButton loading={loading} buttonText=" Add new Category"/>
    </form>
  )
}
