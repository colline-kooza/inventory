import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
      const { title, imageUrl, description , barcode ,brandId ,buyingPrice , dimensions ,notes, qty , reOrderPoint , sellingPrice ,sku , taxRate , unitId, warehouseId ,weight , supplier} =await request.json();
      console.log({ title, imageUrl, description , barcode ,brandId ,buyingPrice , dimensions ,notes, qty , reOrderPoint , sellingPrice ,sku , taxRate , unitId, warehouseId ,weight , supplier})
      const item = await db.item.create({
        data: {
          title,
          images: imageUrl,
          description,
          barcode,
          brandId,
          buyingPrice: parseFloat(buyingPrice),
          dimensions,
          notes,
          qty: parseInt(qty, 10),
          reorderPoint: parseFloat(reOrderPoint),
          sellingPrice: parseFloat(sellingPrice),
          sku,
          taxRate: parseFloat(taxRate),
          unitId,
          warehouseId,
          weight: parseFloat(weight),
          supplier,
        },
      });
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
  