import { notFound } from "next/navigation"
import { FaFlask, FaInfo } from "react-icons/fa6"
import { GoLaw } from "react-icons/go"
import { MdOutlineEdit, MdOutlineLiveHelp } from "react-icons/md"
import { FaRegCalendarAlt } from "react-icons/fa"

import { createClient } from "@/lib/supabase/server"
import { termNames } from "@/lib/supabase/strings"

import CourseContentNavDesktop from "@/components/CourseContentNavDesktop"
import CourseContentNavMobile from "@/components/CourseContentNavMobile"

export async function generateStaticParams() {
    const supabase = createClient()
    const { data, error } = await supabase
        .from("course")
        .select("id, courseTerm:course_term(id)")

    if (error) {
        console.error(error)
        throw error
    }

    return (data ?? []).flatMap(course =>
        (course.courseTerm ?? []).map((courseTerm: { id: string }) => ({
            course: course.id,
            term: courseTerm.id.split("-")[1]
        }))
    )
}

export default async function CourseTermLayout({
    params,
    children
}: Readonly<{
    params: Promise<{ course: string, term: string }>,
    children: React.ReactNode
}>) {
    const { course, term } = await params
    const courseTermId = `${course}-${term}`
    const supabase = createClient()
    const { data, error } = await supabase
        .from("course_term")
        .select("*,course(number)")
        .match({ id: courseTermId })
        .maybeSingle()

    if (error) {
        console.error(error)
        throw error
    }

    if (!data) {
        notFound()
    }

    const pageList = [
        {
            title: "Basics",
            href: `/courses/${course}/${term}`,
            icon: <FaInfo />
        },
        {
            title: "Syllabus",
            href: `/courses/${course}/${term}/syllabus`,
            icon: <GoLaw />
        },
        {
            title: "TAs",
            href: `/courses/${course}/${term}/tas`,
            icon: <MdOutlineLiveHelp />
        },
        {
            title: "Topics",
            href: `/courses/${course}/${term}/topics`,
            icon: <FaRegCalendarAlt />
        },
        {
            title: "Assignments",
            href: `/courses/${course}/${term}/assignments`,
            icon: <MdOutlineEdit />
        },
        {
            title: "Recitations",
            href: `/courses/${course}/${term}/recitations`,
            icon: <FaFlask />
        }
    ]

    const title = `${data.course.number} – ${termNames[data.term as keyof typeof termNames]} ${data.year}`

    return (
        <div className="flex flex-col items-stretch">
            <div className="md:hidden">
                <CourseContentNavMobile pages={pageList} />
            </div>
            <div className="max-md:hidden mt-4">
                <CourseContentNavDesktop pages={pageList} />
            </div>
            <div className="p-4 bg-base-100 border border-t-0 md:border-t border-base-300 grow">
                <h2 className="text-xl font-semibold">{title}</h2>
                {children}
            </div>
        </div>
    )
}
