
import DataTable from "@/components/dashboard/DataTable";
import ItemHeader from "@/components/dashboard/ItemHeader";
import getData from "@/utils/getData";

export default async function Units() {
  const units= await getData("units");
  const columns = [
    { key: 'id', label: 'unit id' },
    { key: 'title', label: 'unit name' },
    { key: 'createdAt', label: 'created Time' },
  ];

  return (
    <div className="py-4 flex flex-col gap-4">
     <ItemHeader title="All Units" link="/dashboard/inventory/units/new"/>
      <DataTable resourceName="units" data={ units} columns={columns} />
    </div>
  ) 
}
