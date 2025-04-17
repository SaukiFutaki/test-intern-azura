"use client";
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addCategory } from "@/lib/actions/category";
import { toast } from "sonner";

interface SelectCategoriesProps {
  value: string;
  onValueChange: (value: string) => void;
  categories: { id: string; name: string }[];
  onAddCategory: (newCategory: { id: string; name: string }) => void;
}

export function SelectCategories({
  value,
  onValueChange,
  categories,
  onAddCategory,
}: SelectCategoriesProps) {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddCategory = async () => {
    if (newCategoryName.trim()) {
      setIsSubmitting(true);

      try {
        const newCategoryId = uuidv4();

        
        await addCategory({
          id: newCategoryId,
          name: newCategoryName.trim(),
        });

       
        const newCategory = {
          id: newCategoryId,
          name: newCategoryName.trim(),
        };
        toast("Category added successfully", {
          description : `${newCategory.name} has been added`,
          duration: 2000,
        })
        onAddCategory(newCategory);
        setNewCategoryName("");
        setOpenAddDialog(false);

      } catch (error) {
        console.error("Failed to add category:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return (
    <div className="flex gap-2">
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Dialog open={openAddDialog} onOpenChange={setOpenAddDialog}>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" className="h-10 w-10">
            <Plus className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Category</DialogTitle>
            <DialogDescription>
              Create a new category for your books.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="categoryName" className="text-right">
                Name
              </Label>
              <Input
                id="categoryName"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddCategory} disabled={isSubmitting} className="cursor-pointer">
              {isSubmitting ? <Loader2 className="animate-spin"/> : "Add Category"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
