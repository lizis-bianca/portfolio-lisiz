"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

export function ModeToggle({ side }: { side: "top" | "bottom" | "left" | "right" }) {
    const { setTheme } = useTheme();
    const t = useTranslations("modeToggle")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon'>
                    <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                    <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' side={side}>
                <DropdownMenuItem onClick={() => setTheme("light")}>{t('DropdownMenuItem1')}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>{t('DropdownMenuItem2')}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>{t('DropdownMenuItem3')}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}