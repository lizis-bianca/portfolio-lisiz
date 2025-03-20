import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/stairTransition";
import { ThemeProvider } from "@/components/themeProvider";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: [ "latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lizis Bianca"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale()
  
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider
                    disableTransitionOnChange
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                >
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
