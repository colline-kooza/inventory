import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request , {params:{id}}) {
    try {
      const  category = await db.category.findUnique(
        {
            where:{
                id
            }
        }
      );
      return NextResponse.json(category);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to fetch category",
        },
        {
         status: 500,
        }
      );
    }
}

export async function PUT(request , {params : {id}}){
  try {
    const {title , description }=await request.json()
  const newCategory =await db.category.update({
    where :{
      id
    },
      data:{
        title , description 
      }
    
  })
  return NextResponse.json(newCategory)
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: 'Failed to update category',
      },
      {
        status: 500,
      }
    );
  }
}


export async function DELETE(request , {params : {id}}){
  try {
  const Category =await db.category.delete({
    where :{
      id
    },
   
  })
  return NextResponse.json(Category)
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: 'Failed to delete category',
      },
      {
        status: 500,
      }
    );
  }
}