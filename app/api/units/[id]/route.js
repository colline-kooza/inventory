import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request , {params:{id}}) {
    try {
      const unit= await db.unit.findUnique(
        {
            where:{
                id
            }
        }
      );
      return NextResponse.json(unit);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to fetch unit",
        },
        {
         status: 500,
        }
      );
    }
}
export async function PUT(request , {params:{id}}){
  try {
      const { name, abbreviation } = await request.json();
      const  updatedUnit = await db.unit.update({
        where:{
          id
        },
          data: {title:name, abbreviation },
        });
      return NextResponse.json(updatedUnit)
  } catch (error) {
      console.log(error)
      return NextResponse.json({
          error ,
          message :"failed to create a updatedUnit"
      },{
          status:500
      })
  }
}
export async function DELETE(request , {params : {id}}){
  try {
  const unit=await db.unit.delete({
    where :{
      id
    },
   
  })
  return NextResponse.json(unit)
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: 'Failed to delete unit',
      },
      {
        status: 500,
      }
    );
  }
}