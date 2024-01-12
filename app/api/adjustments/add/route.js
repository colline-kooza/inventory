// add.ts
import { NextResponse } from "next/server";
import db from "@/utils/db";

export async function POST(request) {
  try {
    const { referenceNumber,sendingWareHouseId , receivingWarehouseId, notes, itemId, quantity } = await request.json();
 console.log({ referenceNumber,sendingWareHouseId , receivingWarehouseId, notes, itemId, quantity })
    // Retrieve the item and warehouses from the database
    const item = await db.item.findUnique({ where: { id: itemId } });
    const sendingWarehouse = await db.warehouse.findUnique({ where: { id: sendingWareHouseId ,} });
    const receivingWarehouse = await db.warehouse.findUnique({ where: { id: receivingWarehouseId } });

    // Update the stock quantities
    if (item && sendingWarehouse && receivingWarehouse) {
      const updatedSendingQty = sendingWarehouse.qty - quantity;
      const updatedReceivingQty = receivingWarehouse.qty + quantity;

      await db.warehouse.update({ where: { id: sendingWareHouseId}, data: { qty: updatedSendingQty } });
      await db.warehouse.update({ where: { id: receivingWarehouseId }, data: { qty: updatedReceivingQty } });
    } else {
      throw new Error("Item or warehouses not found");
    }

    const adjustment = { referenceNumber,sendingWareHouseId ,receivingWarehouseId, notes, itemId, quantity };
    return NextResponse.json(adjustment);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error,
      message: "Failed to add adjustment",
    }, {
      status: 500,
    });
  } 
}
