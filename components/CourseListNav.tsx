"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { HiMenuAlt1 } from "react-icons/hi"
import { MdChevronRight } from "react-icons/md"

import { groupCoursesByTerm } from "@/lib/utils"
import { termNames } from "@/lib/supabase/strings"

import { Course, Term } from "@/lib/types"

export default function CourseListNav({
    courses
}: Readonly<{
    courses: Course[] | null
}>) {
    const [ menuIsOpen, setMenuIsOpen ] = useState(false)
    const { course } = useParams<{ course: string }>()
    const selectedCourse = course && courses?.find(c => c.id === course)

    const coursesByTerm = groupCoursesByTerm(courses ?? [])
    const courseMenuEntries = Object.entries(termNames).map(([ term, termName ]) => (
        <li key={term}>
            <h3 className="my-2 uppercase text-sm font-semibold text-gray-600">{termName}</h3>
            {coursesByTerm[term as Term].length > 0 ? (
                <ul>
                    {coursesByTerm[term as Term].map(c => (
                        <li
                            key={c.id}
                            className={`ml-2 px-3 py-1 border-l relative font-semibold ${c.id === course ? "border-l-2 border-primary" : "border-base-300 left-px"}`}
                        >
                            <Link
                                href={`/courses/${c.id}`}
                                onNavigate={() => setMenuIsOpen(false)}
                            >
                                {c.number}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-xs text-gray-600 ml-2">No current courses</p>
            )}
        </li>
    ))

    return (
        <div className="min-h-full md:border-r md:border-r-base-300 relative">
            <div className="md:hidden p-2 border-b border-b-base-300 flex items-center gap-2">
                <button
                    className="btn btn-ghost btn-square text-xl"
                    onClick={() => setMenuIsOpen(prev => !prev)}
                    aria-label="Open/close the course selection menu"
                >
                    <HiMenuAlt1 />
                </button>
                <p>Course</p>
                <p className="text-xl"><MdChevronRight /></p>
                {selectedCourse ? (
                    <p>{selectedCourse.number}</p>
                ) : (
                    <p className="text-gray-400">None selected</p>
                )}
            </div>
            <nav className={`${menuIsOpen ? "" : "max-md:hidden"} md:min-h-full p-6 max-md:absolute max-md:z-10 max-md:w-full max-md:bg-base-200 max-md:shadow-md`}>
                <ul>
                    {courseMenuEntries}
                </ul>
            </nav>
        </div>
    )
}
