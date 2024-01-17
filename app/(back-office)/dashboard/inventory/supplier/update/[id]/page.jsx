import React from 'react'
import NewSupplierNew from '../../new/page'
import getSingle from '@/utils/getSingle'

export default async function Update({params:{id}}) {
    // console.log(id)
    const singleData = await getSingle(`supplier/${id}`); 
    // console.log(singleData)
  return (
    <div>
        <NewSupplierNew initialData={singleData} isUpdate={true}/>
    </div>
  )
}
