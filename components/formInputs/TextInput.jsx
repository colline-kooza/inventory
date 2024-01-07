"use client"
import React from 'react'

export default function TextInput({errors, label , name , IsRequired = true , register , type="text"}) {
  return (
    <div className="col-span-2">
    <label  for={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
    <input autoComplete={name} {...register(`${name}`, {required:IsRequired})} type={type} name={name} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type name here" />
    {errors.name && <span className='text-red-700 text-xs'>This field is required</span>}
</div>
  )
}
