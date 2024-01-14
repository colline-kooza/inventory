
import getData from '@/utils/getData'
import ItemComponent from '@/components/dashboard/ItemComponent'

export default async function NewItem() {
  const categoriesData = getData('categories');
  const unitsData =  getData("units")
  const brandsData = getData("brands")
  const supplierData =  getData("supplier")
  const warehouseData = getData("warehouse")
  const [categories, units ,brands,supplier ,warehouse] = await Promise.all([categoriesData ,unitsData ,brandsData ,supplierData ,warehouseData ])

  return (
   <>
   <ItemComponent categories={categories} units={units} brands={brands} warehouse={warehouse} supplier={supplier}/>
   </>
  )
}
