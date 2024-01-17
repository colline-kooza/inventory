import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request , {params:{id}}) {
    try {
      const  item = await db.item.findUnique(
        {
            where:{
                id
            }
        }
      );
      return NextResponse.json(item);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        {
          error,
          message: "failed to fetch item",
        },
        {
         status: 500,
        }
      );
    }
}

export async function PUT(request, { params: { id } }) {
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
      dimensions,
      taxRate,
      description,
      notes,
      imageUrl,
    } = await request.json();

    const updatedItem = await db.item.update({
      where: {
        id,
      },
      data: 
        {
          title,
          category: {
            connect: { id: categoryId },
          },
          buyingPrice,
          warehouse:{connect :{id :warehouseId}},
          sellingPrice: parseFloat(sellingPrice),
          supplier:{connect : {id :supplierId}},
          reorderPoint: parseFloat(reOrderPoint),
          sku,
          brand:{connect:{id :brandId }},
          qty,
          unit:{connect:{id:unitId}},
          barcode,
          weight,
          dimensions,
          taxRate,
          description,
          notes,
          images: imageUrl,
        },
    });

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: 'Failed to update item',
      },
      {
        status: 500,
      }
    );
  }
}
