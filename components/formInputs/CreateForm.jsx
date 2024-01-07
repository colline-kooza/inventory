"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextInput from './TextInput'
import SubmitButton from './SubmitButton'
import TextArea from './TextArea'

export default function CreateForm() {
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
        const response = await fetch("http://localhost:3000/api/categories/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: data.description,
            name: data.name,
          }),
        });
        if (response.ok){
         const categories=await response.json()
         console.log(categories)
         setLoading(false)
        }
    reset()
      } catch (error) {
        setLoading(true)
        console.log(error)
      }
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
