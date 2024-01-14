import db from "@/utils/db";
import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const {description,title}=await request.json()
        const category = await db.category.create({
            data: {
                description , title
            },
          });
        return NextResponse.json({
            data:{
                category
            }
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error ,
            message :"failed to create a category"
        },{
            status:500
        })
    }
}

export async function GET(request) {
    try {
  
      const  categories = await db.category.findMany({
        orderBy: {
         createdAt : "desc"  // latest categories
        },
      });
      return NextResponse.json(categories);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to fetch categoriess",
        },
        {
         status: 500,
        }
      );
    }
  }