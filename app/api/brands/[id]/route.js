import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request , {params:{id}}) {

    try {
      const brand= await db.brand.findUnique(
        {
            where:{
                id
            }
        }
      );
      return NextResponse.json(brand);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to fetch brand",
        },
        {
         status: 500,
        }
      );
    }
}
export async function PUT(request , {params:{id}}) {

    try {
      const {title} = await request.json()
      const brand= await db.brand.update(
        {
            where:{
                id
            },
            data:{
              title
            }
        }
      );
      return NextResponse.json(brand);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to update brand",
        },
        {
         status: 500,
        }
      );
    }
}


export async function DELETE(request , {params : {id}}){
  try {
  const brand =await db.brand.delete({
    where :{
      id
    },
   
  })
  return NextResponse.json(brand)
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: 'Failed to delete brand',
      },
      {
        status: 500,
      }
    );
  }
}