"use server";

import { BookCategory, bookCategories } from "@/schemas/books";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { v4 as uuidv4 } from "uuid";
import { auth } from "../auth";
import { db } from "../db";
import { bookCategory } from "../db/schema";
import { revalidatePath } from "next/cache";

export async function getAllCategoriesUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;

  const categories = await db.query.bookCategory.findMany({
    where: (bookCategory) => eq(bookCategory.userId, userId),
    with: {
      books: true,
    },
  });

  return categories;
}

export async function getCategoryById(categoryId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;

  const category = await db.query.bookCategory.findFirst({
    where: (bookCategory) =>
      eq(bookCategory.id, categoryId) && eq(bookCategory.userId, userId),
    with: {
      books: true,
    },
  });

  if (!category) {
    throw new Error("Category not found");
  }

  return category;
}

export async function addCategory(data: BookCategory) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const existingCategory = await db.query.bookCategory.findFirst({
    where: (bookCategory, { eq, and }) =>
      and(
        eq(bookCategory.name, data.name),
        eq(bookCategory.userId, session.user.id)
      ),
  });

  if (existingCategory) {
    return {
      success: false,
      message: "Category already exists",
    };
  }

  const userId = session.user.id;

  const validated = bookCategories.parse(data);

  const now = new Date();

  await db.insert(bookCategory).values({
    id: validated.id || uuidv4(),
    name: validated.name,
    userId: userId,
    createdAt: now,
    updatedAt: now,
  });

  return {
    success: true,
    message: "Category added successfully",
  };
}

export async function updateCategory(categoryId: string, data: BookCategory) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;

  const validated = bookCategories.parse(data);

  const existingCategory = await db.query.bookCategory.findFirst({
    where: (bookCategory) =>
      eq(bookCategory.id, categoryId) && eq(bookCategory.userId, userId),
  });

  if (!existingCategory) {
    throw new Error("Category not found or you don't have permission");
  }

  await db
    .update(bookCategory)
    .set({
      name: validated.name,
      updatedAt: new Date(),
    })
    .where(eq(bookCategory.id, categoryId));

  return {
    success: true,
    message: "Category updated successfully",
  };
}

export async function deleteCategory(categoryId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;

 
  const existingCategory = await db.query.bookCategory.findFirst({
    where: (bookCategory) =>
      eq(bookCategory.id, categoryId) && eq(bookCategory.userId, userId),
  });

  if (!existingCategory) {
    throw new Error("Category not found or you don't have permission");
  }

  const booksWithCategory = await db.query.book.findMany({
    where: (book) => eq(book.categoryId, categoryId),
  });

  if (booksWithCategory.length > 0) {
    throw new Error(
      "Cannot delete category that has books. Please remove or reassign books first."
    );
  }

  await db.delete(bookCategory).where(eq(bookCategory.id, categoryId));

  revalidatePath("/categories");
  return {
    success: true,
    message: "Category deleted successfully",
  };
}
