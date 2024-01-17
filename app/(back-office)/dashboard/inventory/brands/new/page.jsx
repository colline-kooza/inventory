"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormHeader from '@/components/dashboard/FormHeader';
import TextInput from '@/components/formInputs/TextInput';
import SubmitButton from '@/components/formInputs/SubmitButton';
import ApiRequest from '@/utils/ApiRequest';
import { useRouter } from 'next/navigation';

export default function NewBrands({ initialData = {}, isUpdate }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });

  async function onSubmit(data) {
 try {
  const baseUrl = 'http://localhost:3000';
  const apiUrl = isUpdate
    ? `${baseUrl}/api/brands/${initialData.id}`  
    : `${baseUrl}/api/brands`;

  const method = isUpdate ? 'PUT' : 'POST';

  ApiRequest({
    setLoading,
    url: apiUrl,
    data: data,
    toastName: 'brand',
    reset,
    method,
    onSuccess: (result) => {
      router.replace('/dashboard/inventory/brands');
    },
  });
 } catch (error) {
  console.log(error)
 }
  }

  return (
    <div className="flex flex-col gap-2">
      {/* head*/}
      <div className="">
        <FormHeader title={isUpdate ? 'Update New Brand' : 'New Brand'} />
      </div>
      {/* form */}
      <div className="mx-[5rem]">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5 bg-slate-50 shadow-lg">
          <div className="grid gap-4 mb-4 grid-cols-2">
            <TextInput label="brand title" name="title" register={register} errors={errors} type="text" />
          </div>
          <SubmitButton loading={loading} buttonText={isUpdate ? 'Update Brand' : 'Add New Brand'} />
        </form>
      </div>
    </div>
  );
}
