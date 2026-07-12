"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HiMenuAlt1 } from "react-icons/hi"
import { MdChevronRight } from "react-icons/md"

export default function CourseContentNavMobile({
    pages
}: Readonly<{
    pages: Array<{ title: string, href: string, icon: React.ReactNode }>
}>) {
    const [ menuIsOpen, setMenuIsOpen ] = useState(false)
    const pathname = usePathname()
    const selectedPage = pages.find(page => pathname === page.href)

    return (
        <div className="min-h-full relative">
            <div className="flex items-center gap-2 text-sm bg-base-100 border border-b-0 border-base-300">
                <button
                    className="btn btn-ghost btn-square"
                    onClick={() => setMenuIsOpen(prev => !prev)}
                    aria-label="Open/close the course content selection menu"
                >
                    <HiMenuAlt1 />
                </button>
                <p>Page</p>
                <p><MdChevronRight /></p>
                {selectedPage ? (
                    <p>{selectedPage.title}</p>
                ) : (
                    <p className="text-gray-400">None selected</p>
                )}
            </div>
            <nav className={`${menuIsOpen ? "" : "hidden"} absolute px-2 pb-4 w-full z-10 bg-base-100 border border-base-300 shadow-xs`}>
                <ul>
                    {pages.map(page => (
                        <li
                            key={page.href}
                            className={`ml-2 px-3 py-1 border-l text-sm relative ${page.href === pathname ? "border-l-2 border-primary" : "border-base-300 left-px"}`}
                        >
                            <Link href={page.href} onNavigate={() => setMenuIsOpen(false)}>
                                {page.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
