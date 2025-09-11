"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Film, Home, Menu, Search, Tv, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { cn } from "@/lib/utils";
import React from "react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/movies", label: "Movies", icon: Film },
  { href: "/tv", label: "TV Shows", icon: Tv },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-black text-lg text-primary">MUSNAT FLIXS</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <Link href="/" className="mb-8 flex items-center" onClick={() => setSheetOpen(false)}>
                <span className="font-black text-lg text-primary">MUSNAT FLIXS</span>
              </Link>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className={cn(
                      "flex items-center gap-2 text-lg font-semibold",
                      pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="ml-4 md:hidden">
            <span className="font-black text-lg text-primary">MUSNAT FLIXS</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search" aria-label="Search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Instructions">
                <Info className="h-5 w-5" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Playback Instructions</AlertDialogTitle>
                <AlertDialogDescription asChild>
                  <div className="space-y-4 pt-2 max-h-[70vh] overflow-y-auto pr-4">
                    <div className="space-y-2 p-4 bg-primary/10 rounded-md border border-primary/20">
                      <p className="font-semibold text-primary">Important Note:</p>
                      <p className="text-sm text-foreground/80">If you are redirected to another page after clicking play, please return to this page and click play again. The content should run properly.</p>
                      <p className="font-semibold text-primary mt-2">গুরুত্বপূর্ণ নোট:</p>
                      <p className="text-sm text-foreground/80">প্লে ক্লিক করার পর যদি আপনাকে অন্য কোনো পেজে নিয়ে যাওয়া হয়, তাহলে অনুগ্রহ করে এই পেজে ফিরে এসে আবার প্লে ক্লিক করুন। মুভি/সিরিজটি সঠিকভাবে চলবে।</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold">English:</p>
                      <p>If the movie is not found or not playing, click on the server option inside the player, select "Player 4U", and click play. The movie should run.</p>
                    </div>
                     <div className="space-y-1">
                      <p className="font-semibold">বাংলা (Bengali):</p>
                      <p>যদি মুভিটি খুঁজে না পাওয়া যায় বা দেখানো না হয়, তাহলে প্লেয়ারের ভেতরের সার্ভার অপশনে ক্লিক করুন, "Player 4U" নির্বাচন করুন এবং প্লে ক্লিক করুন। মুভিটি চলবে।</p>
                    </div>
                    <div className="space-y-4">
                        <p className="font-semibold text-center">Step 1: Click Server Option</p>
                        <Image src="https://ucarecdn.com/7b313963-8a6c-4be1-b23c-e75cc8fcf106/-/preview/1000x523/" alt="Instruction 1" width={1000} height={523} className="rounded-md border" />
                        <p className="font-semibold text-center">Step 2: Select Player 4U</p>
                        <Image src="https://ucarecdn.com/5da034f8-312d-44d2-be15-2de4f1777215/-/preview/1000x517/" alt="Instruction 2" width={1000} height={517} className="rounded-md border" />
                        <p className="font-semibold text-center">Step 3: Click Play</p>
                        <Image src="https://ucarecdn.com/a2cf9a8e-a0fd-4c2d-8f87-56ee253760c2/-/preview/1000x500/" alt="Instruction 3" width={1000} height={500} className="rounded-md border" />
                    </div>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Got it</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </header>
  );
}
