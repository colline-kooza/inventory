import { CiCircleCheck } from "react-icons/ci";

import React from 'react'

export default function MainDashboard() {
    const salesActivity=[
        {
            title:"To be packed",
            number:"10",
            unit:"Qty",
            href:"/",
            color:"text-red-600"
        },
        {
            title:"To be Shipped",
            number:"2",
            unit:"Pkgs",
            href:"/",
            color:"text-blue-600"
        },
        {
            title:"To be Delivered",
            number:"10",
            unit:"Qty",
            href:"/",
            color:"text-orange-600"
        },
        {
            title:"To be packed",
            number:"2",
            unit:"Pkgs",
            href:"/",
            color:"text-green-600"
        }
    ]
    
    const inventorySystem =[
        {
            title:"Quantity in Hand",
            number:"8",
        },
        {
            title:"Quantity in bank",
            number:"12",
        },
    ]
  return (
    <div>
     <div class="p-4 ">
   <div class="w-full  dm p-4 border-[1px] border-gray-300  rounded-lg ">
      <div class="flex min-w-full gap-4 mb-4">
         <div class="min-w-[70%] flex flex-col gap-4 min-h-24 rounded p-2">
          <h2 className='text-black font-semibold dm'>Sales Activity</h2>
      <div class="grid lg:grid-cols-4 grid-cols-2 gap-4">
         {
           salesActivity.map((activity ,i)=>{
            return(
        <div key={i} class="flex flex-col gap-2 items-center justify-center rounded border border-slate-400 shadow-md bg-gray-50 h-28 hover:border-blue-900 transition-all ">
      <div className='flex flex-col items-center'>
      <h4 className='text-3xl font-semibold '>{activity.number}</h4>
       <small className='text-slate-500'>{activity.unit}</small>
      </div>
       <span className='text-sm text-slate-500 flex items-center gap-1 shrink-0'><CiCircleCheck />{activity.title}</span>
         </div>   
            )
           }) 
         }
          </div>
         </div>
         <div class="min-w-[30%]  flex flex-col p-2 rounded gap-4">
         <h2 className='text-black text-sm font-semibold'>Inventory Summary</h2>
         <div class="flex flex-col gap-4">
        {
            inventorySystem.map((inventory , i)=>{
                return(
                    <div key={i} class="flex items-center justify-around h-[50px] rounded border border-slate-200 bg-gray-50  hover:border-blue-900 transition-all shadow-md">
                    <h3 className='text-slate-500 text-sm'>{inventory.title}</h3>
                   <h4 className='text-sm font-semibold'>{inventory.number}</h4>
                      </div>
                )
            })
        }

          </div>
         </div>
      </div>
   </div>
     </div>
    </div>
  )
}
