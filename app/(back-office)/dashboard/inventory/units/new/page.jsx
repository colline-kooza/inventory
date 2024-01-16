"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormHeader from '@/components/dashboard/FormHeader';
import TextInput from '@/components/formInputs/TextInput';
import SubmitButton from '@/components/formInputs/SubmitButton';
import TextArea from '@/components/formInputs/TextArea';
import ApiRequest from '@/utils/ApiRequest';
import { useRouter } from 'next/navigation';

export default function UnitsNew() {
  const router=useRouter()
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const baseUrl = 'http://localhost:3000';
    const apiUrl = `${baseUrl}/api/units`;
    const requestData = {
      name: data.name, 
      abbreviation: data.abbreviation,
    };
    ApiRequest({ setLoading, url: apiUrl, data: requestData, toastName: 'unit', reset, method: 'POST' ,onSuccess: (result) => {
      router.push('/dashboard/inventory/units');
    }});
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className=''>
        <FormHeader title="New Unit" />
      </div>
      <div className='mx-[5rem]'>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5 bg-slate-50 shadow-lg">
          <div className="grid gap-4 mb-4 grid-cols-2">
            <TextInput label="unit title" name="name" register={register} errors={errors} type="text" />
            <TextArea errors={errors} label="Unit abbreviation" description="abbreviation" register={register} />
          </div>
          <SubmitButton loading={loading} buttonText="Add new Unit" />
        </form>
      </div>
    </div>
  );
}
