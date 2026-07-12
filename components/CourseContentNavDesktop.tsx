"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CourseContentNavDesktop({
    pages
}: Readonly<{
    pages: Array<{ title: string, href: string, icon: React.ReactNode }>
}>) {
    const pathname = usePathname()
    const activeItemStyles = "menu-active bg-primary text-primary-content"

    return (
        <nav>
            <ul className="menu menu-horizontal">
                {pages.map(page => (
                    <li
                        key={page.href}
                        className={`${pathname === page.href ? activeItemStyles : ""}`}
                    >
                        <Link href={page.href} className="flex flex-col gap-1">
                            <p className="text-lg">{page.icon}</p>
                            <p>{page.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
