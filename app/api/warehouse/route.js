import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
      const { title, location, type, description } =await request.json();
  
      const  warehouse = await db.warehouse.create({
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
          message: "failed to create a warehouse",
        },
        {
          status: 500,
        }
      );
    }
  }
  
  export async function GET(request) {
    try {
      const  warehouse = await db.warehouse.findMany();
      return NextResponse.json(warehouse);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to fetch warehouses",
        },
        {
         status: 500,
        }
      );
    }
  }