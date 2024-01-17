  "use client"
  import React, { useState } from 'react'
  import { useForm } from 'react-hook-form'
  import FormHeader from '@/components/dashboard/FormHeader'
  import TextInput from '@/components/formInputs/TextInput'
  import SubmitButton from '@/components/formInputs/SubmitButton'
  import TextArea from '@/components/formInputs/TextArea'
  import SelectInput from '@/components/formInputs/SelectInput'
  import ImageUpload from '@/components/formInputs/ImageUpload'
  import ApiRequest from '@/utils/ApiRequest'
import { useRouter } from 'next/navigation'

  export default function ItemComponent({categories, units , brands , warehouse ,supplier , initialData ,isUpdate}) {
    const router = useRouter()
      const [loading , setLoading]=useState(false)
      const [imageUrl , setImageUrl]=useState()   
        const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
        } = useForm({
          defaultValues: initialData,
        })
        async function onSubmit(data) {
      try {
        const itemData = {
          ...data,
          imageUrl,
        };
        const baseUrl = 'http://localhost:3000';
        const apiUrl = isUpdate
        ? `${baseUrl}/api/items/${initialData.id}` 
        : `${baseUrl}/api/items`;
    
        const method = isUpdate ? 'PUT' : 'POST';
    
        ApiRequest({
          setLoading,
          url: apiUrl,
          data: itemData,
          toastName: 'item',
          reset,
          method,
          onSuccess: (result) => {
            router.push('/dashboard/inventory/items');
          },
        });
      } catch (error) {
        console.log(error)
      }
        }
      
    return (
      <div className='flex flex-col gap-2'>
        {/* head*/}
        <div className=''>
        <FormHeader title={isUpdate ? 'Update Item' : 'New Item'} />
      </div>
    {/* form */}
    <div className='lg:mx-[5rem] mx-3'>
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5 mt-5 bg-slate-100 shadow-lg">
    <div className="grid gap-4 mb-4 grid-cols-2 items-center">
    <div className="col-span-2">
      <TextInput label="Item Title" name="title" register={register} errors={errors} type="text" />
    </div>

    <div className="col-span-2 sm:col-span-1 mb-4">
      <SelectInput register={register} options={categories} name="categoryId" label="Select Item Category" />
    </div>
    
    <div className="col-span-2 sm:col-span-1 mb-4">
      <TextInput label="Buying Price" name="buyingPrice" register={register} errors={errors} type="number" />
    </div>

    <div className="col-span-2 sm:col-span-1 mb-4">
    <SelectInput register={register} options={warehouse} errors={errors} name="warehouseId" label="Select the Warehouse" />
  </div>


    <div className="col-span-2 sm:col-span-1 mb-4">
      <TextInput label="Selling Price" name="sellingPrice" register={register} errors={errors} type="number" />
    </div>

    <div className="col-span-2 sm:col-span-1 mb-4">
      <SelectInput register={register} options={supplier} errors={errors} name="supplierId" label="Select the supplier" />
    </div>

    <div className="col-span-2 sm:col-span-1 mb-4">
      <TextInput IsRequired={false} label="Re-Order Point" name="reOrderPoint" register={register} errors={errors} type="number" />
    </div>

    <div className="col-span-2 sm:col-span-1 mb-4">
      <TextInput IsRequired={false} label="Item SKU" name="sku" register={register} errors={errors} type="text" />
    </div>

    <div className="col-span-2 sm:col-span-1 mb-4">
      <SelectInput register={register} options={brands} errors={errors} name="brandId" label="Select the Item Brand" />
    </div>

    <div className="col-span-2 sm:col-span-1 mb-4">
      <TextInput label="Item Quantity" name="qty" register={register} errors={errors} type="number" />
    </div>

    <div className="col-span-2 sm:col-span-1 mb-4">
      <SelectInput register={register} options={units} errors={errors} name="unitId" label="Select the Item Unit" />
    </div>

    <div className="col-span-2 sm:col-span-1 mb-4">
      <TextInput IsRequired={false} label="Item Barcode" name="barcode" register={register} errors={errors} type="text" />
    </div>

    <div className="col-span-2 sm:col-span-1 mb-4">
      <TextInput IsRequired={false} label="Item Weight in kgs" name="weight" register={register} errors={errors} type="number" />
    </div>

    <div className="col-span-2 sm:col-span-1 mb-4">
      <TextInput IsRequired={false} label="Item Dimension in cm (20 x 30 x 100)" name="dimension" register={register} errors={errors} type="number" />
    </div>

    <div className="col-span-2 sm:col-span-1 mb-4">
      <TextInput IsRequired={false} label="Item Tax Rate in %" name="taxRate" register={register} errors={errors} type="number" />
    </div>

    <div className="col-span-2">
      <TextArea errors={errors} label="Item Description" description="description" register={register} />
    </div>

    <div className="col-span-2">
      <TextArea errors={errors} label="Item Notes" description="notes" register={register} />
    </div>
  </div>
  <ImageUpload label="item image" endpoint="imageUploader"  imageUrl={imageUrl} setImageUrl={setImageUrl}/>
  {
    imageUrl ? (
      <SubmitButton loading={loading} buttonText={isUpdate ? 'Update Item' : 'Add New Item'} />
      ) : (
    ""
    )
  }
  </form>
    </div>
      </div>
    )
  }
