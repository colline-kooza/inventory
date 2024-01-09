import React from 'react'

export default function SelectInput({errors, label , name , IsRequired = true , register , type="text" , options=[]}) {
  return (
    <div>
 <label for={name} class="block mb-2 text-sm font-medium text-gray-900">{label} </label>
  <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
  {
    options.map((option , i)=>{
        return(
        <option {...register(`${name}`, {required:IsRequired})} type={type} key={i} value={option.label}>{option.label}</option>
        )
    })
  }
</select>
{errors[`${name}`] && <span className='text-red-700 text-xs'>{label} is required</span>}
    </div>
  )
}
