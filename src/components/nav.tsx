'use client'
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    }
]

export default function Nav() {
    const pathname = usePathname()
    const t = useTranslations('nav')

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                            {t(link.name)}
                        </Link>
            })}
        </nav>
    )

}