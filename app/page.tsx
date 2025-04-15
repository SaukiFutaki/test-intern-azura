import AddButtonBooks from "@/components/add-button-books";
import { Books, columns } from "@/components/books/column";
import { DataTable } from "@/components/books/data-table";

async function getData(): Promise<Books[]> {
  return [
    {
      id: "AS8ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "Sauid",
      publicationDate: "2024-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "AH AH HA HA",
      author: "Sauid",
      publicationDate: "2022-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "2022-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
    {
      id: "728ed52f",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      imageUrl: "https://example.com/gatsby.jpg",
      publisher: "Scribner",
      numberOfPages: 180,
      category: "Fiction",
    },
  ];
}

export default async function Home() {
  const data = await getData();
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
      <DataTable columns={columns} data={data} />
     
    </div>
  );
}
