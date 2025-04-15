import AddButtonBooks from "@/components/add-button-books";
import { Books, columns } from "@/components/books/column";
import { DataTable } from "@/components/books/data-table";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

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
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Book Collection</h1>
          <p className="text-muted-foreground">
            Hi <span className="font-bold text-primary">{session?.user?.name || "stranger"}</span>, Welcome to your
            book collection!
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
