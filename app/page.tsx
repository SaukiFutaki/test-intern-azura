
import AddButtonBooks from "@/components/add-button-books";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Book Collection</h1>
          <p className="text-muted-foreground">
            Manage your books and categories in one place.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <AddButtonBooks />
        </div>
      </div>
    </div>
  );
}
