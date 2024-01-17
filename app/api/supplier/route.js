import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
      const { name , phone ,email ,address , contactPerson ,supplierCode ,paymentTerms ,taxID ,notes} =await request.json();  
      const  supplier = await db.supplier.create({
        data: {
            title:name , phone ,email ,address , contactPerson ,supplierCode ,paymentTerms ,taxID ,notes
        },
      });
      console.log(supplier)
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
  export async function GET(request) {
    try {
  
      const  supplier = await db.supplier.findMany({
        orderBy: {
          createdAt : "desc"  // latest supplier
         },
      });
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