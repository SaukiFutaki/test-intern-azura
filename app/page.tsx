import AddButtonBooks from "@/components/add-button-books";
import { columns } from "@/components/books/column";
import { DataTable } from "@/components/books/data-table";
import { Button } from "@/components/ui/button";
import {
  getAllBooksDataByUser,
  getYearsPublication,
} from "@/lib/actions/books";
import { getAllCategoriesUser } from "@/lib/actions/category";
import { auth } from "@/lib/auth";
import { FolderKanban } from "lucide-react";
import { headers } from "next/headers";
import { Suspense } from "react";
export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const data = await getAllBooksDataByUser();
  const years = await getYearsPublication();

  const d = await getAllCategoriesUser();
  console.log(d);
  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Book Collection</h1>
          <p className="text-muted-foreground">
            Hi{" "}
            <span className="font-bold text-primary">
              {session?.user?.name || "stranger"}
            </span>
            , Welcome to your book collection!
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="cursor-pointer">
            <FolderKanban /> Manage Categories
          </Button>
          <AddButtonBooks />
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <DataTable columns={columns} data={data} years={years} />
      </Suspense>
    </div>
  );
}
