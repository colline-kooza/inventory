
import DataTable from "@/components/dashboard/DataTable";
import ItemHeader from "@/components/dashboard/ItemHeader";
import getData from "@/utils/getData";

export default async function WareHouse() {
  const warehouse = await getData("warehouse");
  const columns = [
    { key: 'id', label: 'warehouse id' },
    { key: 'title', label: 'warehouse name' },
    { key: 'description', label: 'description' },

  ];

  return (
    <div className="py-4 flex flex-col gap-4">
    <ItemHeader title="All Suppliers" link="/dashboard/inventory/supplier/new"/>
      <DataTable data={warehouse} columns={columns} />
    </div>
  ) 
}
