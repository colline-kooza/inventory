import db from "@/utils/db";
import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const {brand}=await request.json()
        const brands = await db.brand.create({
            data: {
                brand
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