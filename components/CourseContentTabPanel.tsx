"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CourseContentTabList({
    pages,
    title,
    children
}: Readonly<{
    pages: Array<{ title: string, href: string, icon: React.ReactNode }>,
    title: string,
    children: React.ReactNode
}>) {
    const pathname = usePathname()
    const activeTabStyles = "menu-active bg-primary text-primary-content"

    return (
        <div className="flex flex-col items-stretch">
            <ul role="tablist" className="menu menu-horizontal">
                {pages.map(page => (
                    <li
                        key={page.href}
                        role="tab"
                        className={`${pathname === page.href ? activeTabStyles : ""}`}
                    >
                        <Link href={page.href} className="flex flex-col gap-1">
                            <p className="text-lg">{page.icon}</p>
                            <p>{page.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <div role="tabpanel" className="p-4 bg-base-100 border border-base-300 grow">
                <h2 className="text-xl font-semibold">{title}</h2>
                {children}
            </div>
        </div>
    )
}
