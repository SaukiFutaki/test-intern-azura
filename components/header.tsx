"use client";
import { cn } from "@/lib/utils";
import { createAuthClient } from "better-auth/react";
import { BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";
import AvatarHeader from "./avatar-header";
import SwitchCustomization from "./switch-theme";
import Link from "next/link";
const { useSession } = createAuthClient();
export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const imageUrl = session?.user?.image;
  return (
    <header
    className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ",
      pathname === "/auth" ? "hidden" : ""
    )}
  >
    <div className="container flex h-14 items-center  justify-between px-10">
      <div className="flex items-center space-x-2 ">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-xl"
        >
          <BookOpen className="h-7 w-7" />
          <span className="">Book Collection</span>
        </Link>
        {/* <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
     
      </nav> */}
      </div>
      <div className="flex items-center space-x-4">
        <SwitchCustomization />
        <AvatarHeader
          imageUrl={imageUrl || "https://github.com/shadcn.png"}
          email={session?.user?.email || ""}
        />
      </div>
    </div>
  </header>
  );  
}
