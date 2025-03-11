import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/stairTransition";
import { ThemeProvider } from "@/components/themeProvider";


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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
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
      </body>
    </html>
  );
}
