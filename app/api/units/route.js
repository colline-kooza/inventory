import db from "@/utils/db";
import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const { name, abbreviation } = await request.json();
        console.log(name, abbreviation);
        const  unit = await db.unit.create({
            data: {name, abbreviation },
          });
        return NextResponse.json(unit)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error ,
            message :"failed to create a unit"
        },{
            status:500
        })
    }
}