"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Books = {
  id: string;
  title: string;
  author: string;
  publicationDate: string;
  imageUrl: string;
  publisher: string;
  numberOfPages: number;
  category: string;
};

export const columns: ColumnDef<Books>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "publicationDate",
    header: "Publication Date",
    cell: ({ cell }) => {
      const date = new Date(cell.getValue() as string);
      return (
        <div className="">
          {date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "publisher",
    header: "Publisher",
  },
  {
    accessorKey: "numberOfPages",
    header: "Number of Pages",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "actions",
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
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
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
