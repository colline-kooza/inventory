import CreateForm from '@/components/formInputs/CreateForm'
import FormHeader from '@/components/dashboard/FormHeader'
import React from 'react'

export default function CategoriesNew() {
  return (
    <div className='flex flex-col gap-2'>
      {/* head*/}
      <div className=''>
       <FormHeader title="New Category"/>
     </div>
   {/* form */}
   <div className='mx-[5rem]'>
  <CreateForm/>
  </div>
    </div>
  )
}
