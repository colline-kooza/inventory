import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function PUT(request , {params:{id}}) {
    try {
    const { title, location, type, description } =await request.json();

      const  warehouse = await db.warehouse.update({
        where:{
            id
        },
        data: {
            title, location, type, description
          },
      });
      return NextResponse.json(warehouse);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to fetch warehouse",
        },
        {
         status: 500,
        }
      );
    }
  }
  export async function GET(request , {params:{id}}) {
    try {
      const warehouse= await db.warehouse.findUnique(
        {
            where:{
                id
            }
        }
      );
      return NextResponse.json(warehouse);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to fetch warehouse",
        },
        {
         status: 500,
        }
      );
    }
}
export async function DELETE(request , {params : {id}}){
  try {
  const warehouse=await db.warehouse.delete({
    where :{
      id
    },
   
  })
  return NextResponse.json(warehouse)
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: 'Failed to delete warehouse',
      },
      {
        status: 500,
      }
    );
  }
}