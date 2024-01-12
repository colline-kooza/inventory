import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
      const { name , phone ,email ,address , contactPerson ,supplierCode ,paymentTerms ,taxID ,notes} =await request.json();
      console.log({name , phone ,email ,address , contactPerson ,supplierCode ,paymentTerms ,taxID ,notes});
  
      const  supplier = await db.supplier.create({
        data: {
            name , phone ,email ,address , contactPerson ,supplierCode ,paymentTerms ,taxID ,notes
        },
      });
      return NextResponse.json(supplier);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to create a supplier",
        },
        {
          status: 500,
        }
      );
    }
  }
  