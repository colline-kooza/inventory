import DataTable from "@/components/dashboard/DataTable";
import ItemHeader from "@/components/dashboard/ItemHeader";
import getData from "@/utils/getData";

export default async function Brands() {
  const brands = await getData("brands");

  const columns = [
    { key: 'id', label: 'Brand id' },
    { key: 'title', label: 'Brand name' },
  ];

  return (
    <div className="py-4 flex flex-col gap-4">
      <ItemHeader title="All Brands" link="/dashboard/inventory/brands/new" />
      <DataTable resourceName="brands" data={brands} columns={columns} />
    </div>
  );
}
