"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateCategory } from "@/lib/actions/category";
import { bookCategories, BookCategory } from "@/schemas/books";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Category {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

interface EditCategoryDialogProps {
  category: Category;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categoryId : string;
}

export default function EditCategoryDialog({
    categoryId,
  category,
  open,
  onOpenChange,
}: EditCategoryDialogProps) {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const form = useForm<BookCategory>({
    resolver: zodResolver(bookCategories),
    defaultValues: {
      id: category.id,
      name: category.name,
    },
  });

  async function onSubmit(values: BookCategory) {
    
    startTransition(async () => {

      try {
      await updateCategory(categoryId,values);
        toast.success("Category updated successfully",{
            description: "You can now use this category.",
            richColors: true,
        });
        form.reset();
        onOpenChange(false);
        router.refresh();
      } catch (error) {
        toast.error("Failed to update category", {
          description: `An error occurred while updating the category ${error}`,
            richColors: true,
        });
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
        </DialogHeader>
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
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Save Changes"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
