
import DataTable from "@/components/dashboard/DataTable";
import ItemHeader from "@/components/dashboard/ItemHeader";
import getData from "@/utils/getData";

export default async function Categories() {
  const categories = await getData("categories");
// console.log(categories)
  const columns = [
    { key: 'id', label: 'category id' },
    { key: 'title', label: 'category name' },
    { key: 'description', label: 'description' },

  ];

  return (
    <div className="py-4 flex flex-col gap-4">
    <ItemHeader title="All categories" link="/dashboard/inventory/categories/new"/>
      <DataTable resourceName="categories" data={categories} columns={columns} />
    </div>
  ) 
}
