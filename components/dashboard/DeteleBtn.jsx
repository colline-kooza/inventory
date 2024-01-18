"use client"
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function DeleteBtn({ id, endpoint }) {
  const router= useRouter()
  const handleDelete = async () => {
    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete ?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            const baseUrl = 'http://localhost:3000';

            try {
              const response = await fetch(`${baseUrl}/api/${endpoint}/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              });

              if (response.ok) {
               window.location.reload()
                router.push(`/dashboard/inventory/${endpoint}`)
               toast.success("Deleted successfully")
              } else {
                toast.error("Failed to Deleted")
              }
            } catch (error) {
              console.error('Error:', error);
            }
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };

  return (
    <button
      onClick={handleDelete}
      className="shrink-0 text-red-600 font-bold hover:underline flex gap-1 items-center"
    >
      <RiDeleteBin6Line size={16} /> Delete
    </button>
  );
}
