import DataTable from "@/components/dashboard/DataTable";
import ItemHeader from "@/components/dashboard/ItemHeader";
import getData from "@/utils/getData";

export default async function Items() {
  const items = await getData("items");

  const columns = [
    { key: 'title', label: 'Item name' },
    { key: 'description', label: 'description' },
    { key: 'qty', label: 'Quantity' },
    { key: 'sellingPrice', label: 'Price' },
  ];

  return (
    <div className="py-4 flex flex-col gap-4">
      <ItemHeader title="All items" link="/dashboard/inventory/items/new" />
      <DataTable data={items} columns={columns} />
    </div>
  ) 
}
