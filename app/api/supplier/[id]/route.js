import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request , {params:{id}}) {
    try {
      const supplier= await db.supplier.findUnique(
        {
            where:{
                id
            }
        }
      );
      return NextResponse.json(supplier);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to fetch supplier",
        },
        {
         status: 500,
        }
      );
    }
}

export async function PUT(request , {params : {id}}){
  try {
    const { name , phone ,email ,address , contactPerson ,supplierCode ,paymentTerms ,taxID ,notes} =await request.json()
  const newSupplier =await db.supplier.update({
    where :{
      id
    },
    data: {
      title:name , phone ,email ,address , contactPerson ,supplierCode ,paymentTerms ,taxID ,notes
  }
  })
  return NextResponse.json(newSupplier)
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: 'Failed to update newSupplier',
      },
      {
        status: 500,
      }
    );
  }
}