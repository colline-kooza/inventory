import db from "@/utils/db";
import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const {title}=await request.json()
        const brands = await db.brand.create({
            data: {
              title
            },
          });
        return NextResponse.json(brands)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error ,
            message :"failed to create a brands"
        },{
            status:500
        })
    }

}

export async function GET(request) {
    try {
      const  brands = await db.brand.findMany();
      return NextResponse.json(brands);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to fetch brands",
        },
        {
         status: 500,
        }
      );
    }
}