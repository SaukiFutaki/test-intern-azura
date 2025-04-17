import { z } from "zod";

// id,title,author,publicationDate,imageUrl,publisher,numberOfPages,category
export const bookSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, { message: "Title is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  publicationDate: z
    .string()
    .min(1, { message: "Publication Date is required" }),
  imageUrl: z
    .string()
    .optional()
    .refine((val) => !val || val.startsWith("https://"), {
      message: "Image URL must start with https://",
    }),
  publisher: z.string().min(1, { message: "Publisher is required" }),
  numberOfPages: z.number().min(1, { message: "Number of pages is required" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
});

export type Book = z.infer<typeof bookSchema>;

export const bookCategories = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: "Name is required" }),
});
export type BookCategory = z.infer<typeof bookCategories>;
