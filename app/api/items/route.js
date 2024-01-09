import { NextResponse } from "next/server";

export async function POST(request) {
    try {
      const { title,imageUrl, description , barcode ,brandId ,buyingPrice , categoryId , dimension ,notes, qty , reOrderPoint , sellingPrice ,sku , taxRate , unitId, warehouseId ,weight} =await request.json();
      console.log({ title, imageUrl, description , barcode ,brandId ,buyingPrice , categoryId , dimension ,notes, qty , reOrderPoint , sellingPrice ,sku , taxRate , unitId, warehouseId ,weight});
  
      const item = { title, imageUrl, description , barcode ,brandId ,buyingPrice , categoryId , dimension ,notes, qty , reOrderPoint , sellingPrice ,sku , taxRate , unitId, warehouseId ,weight};
       console.log(item)
      return NextResponse.json(item);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to create a item",
        },
        {
          status: 500,
        }
      );
    }
  }
  