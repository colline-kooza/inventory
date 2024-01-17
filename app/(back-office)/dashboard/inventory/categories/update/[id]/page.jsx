import CreateForm from '@/components/formInputs/CreateForm'
import FormHeader from '@/components/dashboard/FormHeader'
import React from 'react'
import getSingle from '@/utils/getSingle'

export default async function CategoriesNew({params:{id}}) {
    console.log(id)
    const categoryData = await getSingle(`/categories/${id}`)
  return (
    <div className='flex flex-col gap-2'>
      {/* head*/}
      <div className=''>
       <FormHeader title="Update Category"/>
     </div>
   {/* form */}
   <div className='lg:mx-[5rem]'>
  <CreateForm initialData={categoryData} isUpdate={true} />
  </div>
    </div>
  )
}
