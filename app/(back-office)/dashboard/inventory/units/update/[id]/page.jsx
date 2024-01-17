import React from 'react'
import UnitsNew from '../../new/page'
import getSingle from '@/utils/getSingle'

export default async function page({params:{id}}) {
    const singleData = await getSingle(`units/${id}`)
    console.log(singleData)
  return (
    <div>
    <UnitsNew initialData={singleData} isUpdate={true}/>
    </div>
  )
}
