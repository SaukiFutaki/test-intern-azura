import { z } from "zod"
// A book category contains a set of books.
// A book must at least have the properties Title, Author, Publication Date, Publisher, Number of pages, Category
export const bookSchema = z.object({
    id : z.string().uuid(),
    title: z.string().min(1, { message: "Title is required" }),
    author : z.string().min(1, { message: "Author is required" }),
    publicationDate : z.string().min(1, { message: "Publication Date is required" }),
    publisher : z.string().min(1, { message: "Publisher is required" }),
    numberOfPages : z.number().min(1, { message: "Number of pages is required" }),
    category : z.string().min(1, { message: "Category is required" }),
})

export type Book = z.infer<typeof bookSchema>;

export const bookCategories = z.object({
    id : z.string().uuid(),
    name : z.string().min(1, { message: "Name is required" }),
})
export type BookCategory = z.infer<typeof bookCategories>;