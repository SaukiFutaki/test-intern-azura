/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { BookOpen } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/">
            <BookOpen className="h-7 w-7" />
            <span className="ml-2">Book Collection</span>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <Image
            src={
              "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
            }
            alt="Book Collection"
            width={600}
            height={600}
          />
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This website has been an absolute game-changer for my
              wardrobe. The quality of clothes and customer service is
              outstanding.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] ">
          <Card>
            <CardHeader className="text-center">
              Please Login to your account
            </CardHeader>
            <CardContent className="grid gap-4">
              <Button
                className="w-full cursor-pointer"
                variant={"outline"}
                onClick={signIn}
              >
                <FcGoogle /> Google
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
