"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const router = useRouter()

  useEffect(() => {
    const cookieLocale = document.cookie.split('; ').find((row) => row.startsWith('NEXTAPP_LOCALE='))?.split('=')[1];
    if(cookieLocale){
      setSelectedLanguage(cookieLocale)
    } else {
      const browserLocale = navigator.language.slice(0,2)
      setSelectedLanguage(browserLocale)
      document.cookie = `NEXTAPP_LOCALE=${browserLocale};`
      router.refresh()
    }
  }, [router])

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang)
    document.cookie = `NEXTAPP_LOCALE=${lang};`
    router.refresh()
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {selectedLanguage === "pt-br" ? "Portuguese" : "English"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{'selectLanguage'}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedLanguage}
          onValueChange={handleLanguageChange}
        >
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="pt-br">Portuguese</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
