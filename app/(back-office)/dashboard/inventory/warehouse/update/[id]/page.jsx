import React from 'react'
import NewWareHouse from '../../new/page'
import getSingle from '@/utils/getSingle'

export default async function page({params:{id}}) {
    const singleData= await getSingle(`warehouse/${id}`)
    // console.log(singleData)
  return (
    <div>
    <NewWareHouse initialData={singleData} isUpdate={true}/>
    </div>
  )
}
