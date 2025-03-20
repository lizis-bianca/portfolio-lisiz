'use client'
import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"
import Social from "@/components/social"
import Photo from "@/components/photo"
// import { useTranslation } from "react-i18next"

export default function Home() {
    // const { t } = useTranslation(); 
    return (
    <section className="h-full">
        <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                <div className="text-center xl:text-left order-2 xl:order-none">
                    <span className="text-xl">Software Developer</span>
                    <h1 className="h1 mb-6">
                        Hello Im <br /><span className="text-accent">Lizis Bianca</span>
                    </h1>
                    <p className="max-w-[500px] mb-9 text-primary/80 dark:text-white/80">
                    I excel at crafting elegant
                    </p>
                    <div className="flex flex-col xl:flex-row items-center gap-8">
                        <Button variant="outline" size="lg" className="uppercase flex items-center justify-center gap-2">
                            <span>Download CV</span>
                            <FiDownload className="text-xl"/>
                        </Button>
                        <div className="mb-8 xl:mb-0">
                            <Social containerStyle="flex gap-6" iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transiion-all duration-500" />
                        </div>
                    </div>
                </div>
                <div className="order-1 xl:order-none mb-8 xl:mb-0">
                    <Photo />
                </div>
            </div>
        </div>
    </section>
    )
}