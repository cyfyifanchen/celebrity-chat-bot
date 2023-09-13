"use client";

import { Sparkles } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSiderbar } from "@/components/mobile-sidebar";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
})

export const NavBar = () => {
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-collapse-b border-primary/10 bg-secondary h-16">
            <div className="flex items-center">
                <MobileSiderbar />
                <Link href="/">
                    <h1 className={cn("text-2xl font-bold text-primary", font.className)}>Demo</h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button variant="premium" size="sm">
                    Upgrade
                    <Sparkles className="h-4 w-4 fill-white text-white ml-2"></Sparkles>
                </Button>
                <ModeToggle />
                <UserButton />
            </div>
        </div>
    )
}