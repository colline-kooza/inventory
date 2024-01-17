import getSingle from '@/utils/getSingle';
import React from 'react';
import NewBrands from '../../new/page';

export default async function page({ params: { id } }) {
  const singleData = await getSingle(`/brands/${id}`); 
//   console.log(singleData);
  return (
  <div>
    <NewBrands initialData={singleData } isUpdate={true}/>
  </div>
  )
}
