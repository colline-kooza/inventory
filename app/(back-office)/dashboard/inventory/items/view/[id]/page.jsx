import DetailedPage from '@/components/dashboard/DetailedPage'
import getSingle from '@/utils/getSingle'
import React from 'react'

export default async function page({params:{id}}) {
    const singleProduct= await getSingle(`items/${id}`)
    console.log(singleProduct)
  return (
    <div>
        <DetailedPage singleProduct={singleProduct}/>
    </div>
  )
}
