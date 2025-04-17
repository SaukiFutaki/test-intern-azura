/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { BookOpen } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Poetsen_One } from "next/font/google";

const poetsen = Poetsen_One({
  subsets: ["latin"],
  weight: "400",
});
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

        <div className="relative z-10">
          <Image
            src="https://images.unsplash.com/photo-1544185310-0b3cf501672b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJvb2t8ZW58MHx8MHx8fDA%3D"
            alt="Book Collection"
            width={465}
            height={465}
            className="rounded-md border-dotted border-2 border-white/50 object-cover"
          />
        </div>

        <div
          className={`absolute z-20 top-[12%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ${poetsen.className}`}
        >
          <h1 className="text-4xl font-semibold text-amber-400  drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            Book Collection
          </h1>
          <p className="text-lg mt-2 text-white/80  drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            Your personal digital library
          </p>
         
        </div>

        <div className={`absolute z-20 top-[90%] right-[35%] transform -translate-x-1/2 -translate-y-1/2 text-center ${poetsen.className}`}>
        <p className="mt-4 text-black fon/t-bold text-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            Take Home Test — Azura Labs
          </p>
        </div>
      </div>

      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] ">
          <Card>
            <CardTitle className="text-center text-2xl font-bold tracking-tight">
              Please Login to your account
            </CardTitle>

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
