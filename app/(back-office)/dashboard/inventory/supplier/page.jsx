import DataTable from "@/components/dashboard/DataTable";
import ItemHeader from "@/components/dashboard/ItemHeader";
import getData from "@/utils/getData";

export default async function Categories() {
  const suppliers = await getData("supplier");
  const columns = [
    { key: 'id', label: 'suppliers  id' },
    { key: 'title', label: 'suppliers name' },
    { key: 'email', label: 'Email' },
    { key: 'createdAt', label: 'created Time' },
  ];

  return (
    <div className="py-4 flex flex-col gap-4">
    <ItemHeader title="All Suppliers" link="/dashboard/inventory/supplier/new"/>
      <DataTable resourceName="supplier"  data={suppliers} columns={columns} />
    </div>
  ) 
}
