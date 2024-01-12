import React from 'react';
import toast from 'react-hot-toast';

export default async function ApiRequest({ setLoading, url, data, toastName, reset, method }) {
  console.log({ setLoading, url, data, toastName, reset, method });
  try {
    setLoading(true);
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      toast.success(`Successfully ${method === 'POST' ? 'created' : 'updated'} ${toastName}`);
      reset();
      setLoading(false);
    } else {
      setLoading(false);
      toast.error('Something went wrong.');
    }
  } catch (error) {
    toast.error(`Failed to ${method === 'POST' ? 'create' : 'update'}.`);
    setLoading(false);
    console.error(error);
  }
}

