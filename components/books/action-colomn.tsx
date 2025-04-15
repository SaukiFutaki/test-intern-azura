import React from "react";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CellContext } from "@tanstack/react-table";
import { Books } from "./column";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function ActionColumns({ row }: CellContext<Books, unknown>) {
  const book = row.original;
  const router = useRouter();
  const [showDeleteDialog, setShowDeleteDialog] = React.useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(book.id)}
          >
            Copy Book ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span
              className="cursor-pointer"
              onClick={() => router.push(`/books/${book.id}`)}
            >
              View Book Details
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setShowDeleteDialog(true)}
            className="text-red-600 cursor-pointer"
          >
            Delete Section
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure want to delete this book ?
            </AlertDialogTitle>
            <AlertDialogDescription>
              NOTE: All tasks related to this category will also be deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant="destructive"
              className=""
              onClick={() => {
                setTimeout(() => (document.body.style.pointerEvents = ""), 100);

                setShowDeleteDialog(false);
              }}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
