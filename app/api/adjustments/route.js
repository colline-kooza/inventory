import { NextResponse } from "next/server";

export async function POST(request) {
    try {
      const { notes, transferStockQty, recievingBranchId  } =await request.json();
  
      const adjustments = {notes, transferStockQty, recievingBranchId };
      return NextResponse.json(adjustments);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to create a adjustments",
        },
        {
          status: 500,
        }
      );
    }
  }
  