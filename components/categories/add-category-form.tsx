"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addCategory } from "@/lib/actions/category";
import { bookCategories, BookCategory } from "@/schemas/books";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

export default function AddCategoryForm() {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const form = useForm<BookCategory>({
    resolver: zodResolver(bookCategories),
    defaultValues: {
      id: uuidv4(),
      name: "",
    },
  });

  async function onSubmit(values: BookCategory) {
    startTransition(async () => {
      try {
        const result = await addCategory(values);

        if (result.success === false) {
          toast.error("Failed to create category", {
            description: `An error occurred while creating the category `,
            richColors: true,
          });

          form.reset({
            id: uuidv4(),
            name: "",
          });

          router.refresh();
          return;
        }
        toast("Category created successfully", {
          description: "You can now use this category.",
          richColors: true,
        });
        form.reset({
          id: uuidv4(),
          name: "",
        });
        router.refresh();
      } catch (error) {
        toast.error("Failed to create category", {
          description: `An error occurred while creating the category ${error}`,
        });
      }
    });
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter category name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full cursor-pointer text-black"
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Create Category"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
