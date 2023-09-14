"use client";

import { Sparkles } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Lateef } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle";
import { MobileSiderbar } from "@/components/mobile-sidebar";
import Image from "next/image";

const font = Lateef({
    weight: "600",
    subsets: ["latin"]
})

export const NavBar = () => {
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16 pt-2">
            <div className="flex items-center">
                <MobileSiderbar />
                <Link href="/">
                    <Image
                        alt="Logo"
                        src="/mk-logo.svg"
                        width={280}
                        height={100}
                    />
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button variant="default" size="sm">
                    <Image className="mr-2"
                        alt="Logo"
                        src="/mk-logo.png"
                        width={25}
                        height={25}
                    />
                    Upgrade to Pro
                </Button>
                <ModeToggle />
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}