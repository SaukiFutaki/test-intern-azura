import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { CalendarIcon, LayersIcon, User } from "lucide-react";
import Image from "next/image";
interface Book {
  id: string;
  title: string;
  author: string;
  publicationDate: Date;
  imageUrl: string;
  publisher: string;
  numberOfPages: number;
  categoryId: string;
  userId: string;
  category: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
  };
}

interface BookDetailProps {
  book: Book;
}


export default function BookDetail({ book }: BookDetailProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex justify-center">
        <Card className="overflow-hidden w-full max-w-md">
          <div className="relative aspect-[2/3] w-full">
            <Image
              src={book.imageUrl || "/placeholder.svg"}
              alt={book.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold">{book.title}</h2>
          <p className="text-xl text-muted-foreground">by {book.author}</p>
        </div>

        <Badge className="bg-emerald-600/10 dark:bg-emerald-600/20 hover:bg-emerald-600/10 text-emerald-500 border-emerald-600/60 shadow-none rounded-full">
     {book.category.name}
      </Badge>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-muted-foreground" />
            <span>Publisher: {book.publisher}</span>
          </div>

          <div className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-muted-foreground" />
            <span>

              Published: {format(new Date(book.publicationDate), "dd MMMM yyyy", { locale: id })}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <LayersIcon className="h-5 w-5 text-muted-foreground" />
            <span>{book.numberOfPages} pages</span>
          </div>
        </div>
      </div>
    </div>
  );
}
