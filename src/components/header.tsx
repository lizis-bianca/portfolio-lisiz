'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./nav"
import MobileNav from "./mobileNav"
import { ModeToggle } from "./modeToggle"


export default function Header() {
    return (
        <header className="py-8 xl:py-12 text-black dark:text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Lizis<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                    <ModeToggle side="top"/>
                </div>
                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}