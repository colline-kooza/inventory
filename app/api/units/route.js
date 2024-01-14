import db from "@/utils/db";
import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const { name, abbreviation } = await request.json();
        const  unit = await db.unit.create({
            data: {title:name, abbreviation },
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
export async function GET(request) {
    try {
      const  units = await db.unit.findMany();
      return NextResponse.json(units);
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