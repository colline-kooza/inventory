import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      categoryId,
      buyingPrice,
      warehouseId,
      sellingPrice,
      supplierId,
      reOrderPoint,
      sku,
      brandId,
      qty,
      unitId,
      barcode,
      weight,
      dimension,
      taxRate,
      description,
      notes,
      imageUrl,
      createdBy,
    } = await request.json();

    const item = await db.item.create({
      data: {
        title,
        images: imageUrl,
        description,
        barcode,
        buyingPrice: parseFloat(buyingPrice),
        dimensions: parseFloat(dimension),
        notes,
        qty: parseInt(qty, 10),
        reorderPoint: parseFloat(reOrderPoint),
        sellingPrice: parseFloat(sellingPrice),
        sku,
        taxRate: parseFloat(taxRate),
        createdBy: { connect: { id: createdBy } },
        warehouse: { connect: { id: warehouseId } },
        supplier: { connect: { id: supplierId } },
        weight: parseFloat(weight),
        category: { connect: { id: categoryId } },
        brand: { connect: { id: brandId } },
        unit: { connect: { id: unitId } },
      },
    });

    return NextResponse.json(item);
  } catch (error) {
    console.error(error);
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
        message: "failed to fetch items",
      },
      {
       status: 500,
      }
    );
  }
}
export async function GET(request) {
  try {
    // Fetch stock levels data
    const stockLevels = await db.item.findMany({
      select: {
        title: true,
        qty: true,
        warehouse: { select: { title: true } },
      },
    });

    // Fetch sales data
    // Add your logic to fetch sales data from the database

    // Fetch adjustments data
    // Add your logic to fetch adjustments data from the database

    return NextResponse.json({ stockLevels /*, sales, adjustments */ });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to fetch reports and analytics data",
      },
      {
        status: 500,
      }
    );
  }
}