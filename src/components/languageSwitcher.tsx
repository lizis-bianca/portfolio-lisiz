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
import { useTranslations } from "next-intl";

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const router = useRouter()
  const t = useTranslations("languageSwitcher")

  useEffect(() => {
    const cookieLocale = document.cookie.split('; ').find((row) => row.startsWith('NEXTAPP_LOCALE='))?.split('=')[1];
    if(cookieLocale){
      setSelectedLanguage(cookieLocale)
    } else {
      const browserLocale = navigator.language === 'pt-BR' ? navigator.language.toLocaleLowerCase() : navigator.language.slice(0,2)
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
          {selectedLanguage === "pt-br" ? t('DropdownMenuRadioItem2') : t('DropdownMenuRadioItem1')}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t('DropdownMenuLabel')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedLanguage}
          onValueChange={handleLanguageChange}
        >
          <DropdownMenuRadioItem value="en">{t('DropdownMenuRadioItem1')}</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="pt-br">{t('DropdownMenuRadioItem2')}</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
