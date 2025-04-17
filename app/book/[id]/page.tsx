import { Separator } from "@/components/ui/separator";
import { getBookById } from "@/lib/actions/books";
import { notFound } from "next/navigation";
import React from "react";
import BookDetail from "./book-detail";
import UpdateBookForm from "./update-book-form";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const data = await getBookById(id);
  if (!data) {
    notFound();
  }

  return (
    <div className="container py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Book Details</h1>
        <p className="text-muted-foreground">
          View and manage <span className="text-primary">{data.title}</span>{" "}
          details.
        </p>
      </div>
      <Separator />
      <BookDetail book={data} />
      <Separator />
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Update Book</h2>
        <UpdateBookForm
          book={{
            ...data,
            publicationDate: data.publicationDate.toISOString(),
            categoryId: data.category.name,
          }}
        />
      </div>
    </div>
  );
}
