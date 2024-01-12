// transfer.ts
import db from "@/utils/db";
import { NextResponse } from "next/server";


export async function POST(request) {
  try {
    const { itemId, sendingWarehouseId, receivingWarehouseId, notes, quantity } = await request.json();

    // Retrieve the item and warehouses from the database
    const item = await db.item.findUnique({ where: { id: itemId } });
    const sendingWarehouse = await db.warehouse.findUnique({ where: { id: sendingWarehouseId } });
    const receivingWarehouse = await db.warehouse.findUnique({ where: { id: receivingWarehouseId } });

    // Update the stock quantities
    if (item && sendingWarehouse && receivingWarehouse) {
      const updatedSendingQty = sendingWarehouse.qty - quantity;
      const updatedReceivingQty = receivingWarehouse.qty + quantity;

      await db.warehouse.update({ where: { id: sendingWarehouseId }, data: { qty: updatedSendingQty } });
      await db.warehouse.update({ where: { id: receivingWarehouseId }, data: { qty: updatedReceivingQty } });
    } else {
      throw new Error("Item or warehouses not found");
    }

    const transferAdjustment = { itemId, sendingWarehouseId, receivingWarehouseId, notes, quantity };
    return NextResponse.json(transferAdjustment);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error,
      message: "Failed to transfer adjustment",
    }, {
      status: 500,
    });
  } 
}
