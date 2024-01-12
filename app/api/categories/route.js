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