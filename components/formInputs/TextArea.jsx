import React from 'react'

export default function TextArea({errors, label , description , IsRequired = true , register }) {
  return (
    
    <div className='flex flex-col mt-5'>
    <label for={description} class="block mb-2 text-sm font-medium text-gray-900">{label}</label>
   <textarea defaultValue="" {...register(`${description}`, { required: IsRequired })} id={description} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your description..." ></textarea> 
   {errors.description && <span className='text-xs text-red-500'>please fill in {label} </span>}

   </div>  
  )
}
