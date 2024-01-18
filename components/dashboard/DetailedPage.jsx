import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

export default function DetailedPage({ singleProduct }) {
  const formatDate = (dateString) => {
    if (!dateString) return ''; // Handle the case where dateString is not provided
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            {singleProduct?.images && (
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img className="w-full h-full object-cover" src={singleProduct.images} alt="Product Image" />
              </div>
            )}
            <div className="flex  mb-8 justify-center items-center">
              <div className="w-[60%] px-2">
                <Link href="/dashboard/inventory/items" className="justify-center flex items-center tracking-[2px] w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                <MdKeyboardArrowLeft size={23}/>
                    View All Items</Link>
              </div>
              
            </div>
          </div>
          <div className="md:flex-1 px-4">
            {singleProduct?.title && (
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
            )}
            {singleProduct?.title && (
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {singleProduct.title}
              </p>
            )}
            {singleProduct?.sellingPrice && (
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                  <span className="text-gray-600 dark:text-gray-300">{singleProduct.sellingPrice}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">Availability: </span>
                  <span className="text-gray-600 dark:text-gray-300">{singleProduct.qty}</span>
                </div>
              </div>
            )}
            {singleProduct?.warehouse?.title && (
              <div className="mb-4">
                <span className="font-bold text-purple-400">Ware house:</span>
                <h2 className='text-sm font-semibold text-white'>{singleProduct.warehouse.title}</h2>
              </div>
            )}
            {singleProduct?.description && (
              <div>
                <span className="font-bold text-orange-400">Product Description:</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {singleProduct.description}
                </p>
              </div>
            )}
            <div className="flex mt-4">
              {singleProduct?.createdAt && (
                <div className="mr-5">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Created At: </span>
                  <span className="text-gray-600 dark:text-gray-300">{formatDate(singleProduct.createdAt)}</span>
                </div>
              )}
              {singleProduct?.updatedAt && (
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">Updated At: </span>
                  <span className="text-gray-600 dark:text-gray-300">{formatDate(singleProduct.updatedAt)}</span>
                </div>
              )}
            </div>
            {singleProduct?.unit?.title && (
              <div className="mt-4 ">
                <span className="font-bold text-green-300">Unit:</span>
                <h2 className='text-sm font-semibold text-white'>{singleProduct.unit.title}</h2>
              </div>
            )}
            {singleProduct?.supplier?.title && (
              <div className="mt-4 ">
                <span className="font-bold text-blue-500">Supplier:</span>
                <h2 className='text-sm font-semibold text-white'>{singleProduct.supplier.title}</h2>
              </div>
            )}
              <div className="flex mt-4">
              {singleProduct?.reorderPoint && (
                <div className="mr-5">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Re-OrderPoint: </span>
                  <span className="text-gray-600 dark:text-gray-300">{singleProduct.reorderPoint}</span>
                </div>
              )}
              {singleProduct?.taxRate && (
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">tax Rate: </span>
                  <span className="text-gray-600 dark:text-gray-300">{singleProduct.taxRate}</span>
                </div>
              )}
            </div>
            {singleProduct?.brand?.title && (
              <div className="mt-4 ">
                <span className="font-bold text-red-300">Brand:</span>
                <h2 className='text-sm font-semibold text-white'>{singleProduct.brand.title}</h2>
              </div>
            )}
            <div className="flex mt-4">
              {singleProduct?.buyingPrice && (
                <div className="mr-5">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Buying Price: </span>
                  <span className="text-gray-600 dark:text-gray-300">{singleProduct.buyingPrice}</span>
                </div>
              )}
              {singleProduct?.sellingPrice && (
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">Selling Price: </span>
                  <span className="text-gray-600 dark:text-gray-300">{singleProduct.sellingPrice}</span>
                </div>
              )}
           
            </div>
            {singleProduct?.notes && (
              <div className='mt-6'>
                <span className="font-bold text-orange-400">Product notes:</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {singleProduct.notes}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
