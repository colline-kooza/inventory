import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      imageUrl,
      description,
      barcode,
      brandId,
      buyingPrice,
      dimensions,
      notes,
      qty,
      reOrderPoint,
      sellingPrice,
      supplierId,
      sku,
      taxRate,
      unitId,
      warehouseId,
      weight,
      categoryId,
    } = await request.json();

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
        supplierId,
        categoryId,
      },
    });

    return NextResponse.json(item);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create an item",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {

    const  items = await db.item.findMany({
      orderBy: {
       createdAt : "desc"  // latest items
      },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "failed to fetch itemss",
      },
      {
       status: 500,
      }
    );
  }
}