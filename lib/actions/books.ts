"use server";

import { Book, bookSchema } from "@/schemas/books";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { v4 as uuidv4 } from "uuid";
import { auth } from "../auth";
import { db } from "../db";
import { book } from "../db/schema";


export async function getAllBooksDataByUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;

  const books = await db.query.book.findMany({
    where: (book) => eq(book.userId, userId),
    with: {
      category: true,
    },
  });

  return books;
}


export async function getBookById(bookId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;

  const bookData = await db.query.book.findFirst({
    where: (book) => eq(book.id, bookId) && eq(book.userId, userId),
    with: {
      category: true,
    },
  });

  if (!bookData) {
    throw new Error("Book not found");
  }
 
  return bookData;
}


export async function getBooksByCategory(categoryId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;

  const books = await db.query.book.findMany({
    where: (book) => eq(book.categoryId, categoryId) && eq(book.userId, userId),
    with: {
      category: true,
    },
  });

  return books;
}


export async function addBookData(data: Book) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;

 
  const validated = bookSchema.parse(data);

  // verif catagory ini milik user
  const category = await db.query.bookCategory.findFirst({
    where: (bookCategory) =>
      eq(bookCategory.id, validated.categoryId) &&
      eq(bookCategory.userId, userId),
  });

  if (!category) {
    throw new Error("Selected category not found or you don't have permission");
  }

  
  await db.insert(book).values({
    id: validated.id || uuidv4(),
    title: validated.title,
    author: validated.author,
    publicationDate: new Date(validated.publicationDate),
    imageUrl: validated.imageUrl || "",
    publisher: validated.publisher,
    numberOfPages: validated.numberOfPages,
    categoryId: validated.categoryId,
    userId: userId,
  });

  revalidatePath("/");
  return {
    success: true,
    message: "Book added successfully",
    data: validated,
  };
}


export async function updateBookData(bookId: string, data: Book) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;

  
  const validated = bookSchema.parse(data);

  // verif buku ini milik user 
  const existingBook = await db.query.book.findFirst({
    where: (book) => eq(book.id, bookId) && eq(book.userId, userId),
  });

  if (!existingBook) {
    throw new Error("Book not found or you don't have permission");
  }

  // verif catagory ini milik user
  const category = await db.query.bookCategory.findFirst({
    where: (bookCategory) =>
      eq(bookCategory.id, validated.categoryId) &&
      eq(bookCategory.userId, userId),
  });

  if (!category) {
    throw new Error("Selected category not found or you don't have permission");
  }


  await db
    .update(book)
    .set({
      title: validated.title,
      author: validated.author,
      publicationDate: new Date(validated.publicationDate),
      imageUrl: validated.imageUrl || "",
      publisher: validated.publisher,
      numberOfPages: validated.numberOfPages ,
      categoryId: validated.categoryId,
    })
    .where(eq(book.id, bookId));

  return {
    success: true,
    message: "Book updated successfully",
    data: validated,
  };
}


export async function deleteBookData(bookId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;

 
  const existingBook = await db.query.book.findFirst({
    where: (book) => eq(book.id, bookId) && eq(book.userId, userId),
  });

  if (!existingBook) {
    throw new Error("Book not found or you don't have permission");
  }


  await db.delete(book).where(eq(book.id, bookId));

  revalidatePath("/");
  return {
    success: true,
    message: "Book deleted successfully",
  };
}

export async function getYearsPublication() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;

  const years = await db.query.book.findMany({
    where: (book) => eq(book.userId, userId),
    columns: {
      publicationDate: true,
    },
  });

  const yearList = years.map((book) => book.publicationDate.getFullYear());

  const uniqueSortedYears = Array.from(new Set(yearList)).sort((a, b) => b - a);

  return uniqueSortedYears;
}

