import { Suspense } from "react"
import { getAllCategoriesUser } from "@/lib/actions/category"
import CategoryTable from "@/components/categories/category-table"
import AddCategoryForm from "@/components/categories/add-category-form"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

export default async function Page() {
  const categories = await getAllCategoriesUser()

  return (
    <div className="container py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Book Categories</h1>
        <p className="text-muted-foreground">Manage your book categories</p>
      </div>
      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">All Categories</h2>
          <Suspense fallback={<CategoryTableSkeleton />}>
            <CategoryTable categories={categories} />
          </Suspense>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
          <AddCategoryForm />
        </div>
      </div>
    </div>
  )
}

function CategoryTableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-8 w-[120px]" />
      </div>
      <div className="border rounded-md">
        <div className="h-12 px-4 border-b flex items-center">
          <Skeleton className="h-4 w-[30%]" />
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-16 px-4 flex items-center justify-between">
            <Skeleton className="h-4 w-[40%]" />
            <div className="flex space-x-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
