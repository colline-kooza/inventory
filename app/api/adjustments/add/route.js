import { NextResponse } from "next/server";
import db from "@/utils/db";

export async function POST(request) {
  try {
    const { sendingWareHouseId, receivingWarehouseId, notes, itemId, qtyNumber } = await request.json();
    console.log({ sendingWareHouseId, receivingWarehouseId, notes, itemId, qtyNumber });

    const item = await db.item.findUnique({ where: { id: itemId } });

    if (!item) {
      throw new Error("Item not found");
    }

    const sendingWarehouse = await db.warehouse.findUnique({ where: { id: item.warehouseId } });
    // console.log(sendingWareHouseId)
    if (!sendingWarehouse) {
      throw new Error("Sending warehouse not found");
    }

    const receivingWarehouse = await db.warehouse.findUnique({ where: { id: receivingWarehouseId } });
  //  console.log(receivingWarehouse)
    if (!receivingWarehouse) {
      throw new Error("Receiving warehouse not found");
    }

    // Update the stock quantities
    const updatedSendingQty = sendingWarehouse.qty - qtyNumber;
    const updatedReceivingQty = receivingWarehouse.qty + qtyNumber;

    await db.warehouse.update({ where: { id: item.warehouseId }, data: { qty: updatedSendingQty } });
    await db.warehouse.update({ where: { id: receivingWarehouseId }, data: { qty: updatedReceivingQty } });

    const adjustment = { sendingWareHouseId, receivingWarehouseId, notes, itemId, qtyNumber };
    // console.log(adjustment);

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
