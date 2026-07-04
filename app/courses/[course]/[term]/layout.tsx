import { notFound } from "next/navigation"
import { FaFlask, FaGraduationCap, FaInfo, FaRegFileCode } from "react-icons/fa6"
import { GoLaw } from "react-icons/go"
import { MdOutlineLiveHelp } from "react-icons/md"
import { FaRegCalendarAlt } from "react-icons/fa"

import { createClient } from "@/lib/supabase/server"

import CourseContentTabPanel from "@/components/CourseContentTabPanel"
import CourseContentMenuPanel from "@/components/CourseContentMenuPanel"

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
        .select("*,lecture(*)")
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
            icon: <FaRegFileCode />
        },
        {
            title: "Final Project",
            href: `/courses/${course}/${term}/project`,
            icon: <FaGraduationCap />
        },
        {
            title: "Recitations",
            href: `/courses/${course}/${term}/recitations`,
            icon: <FaFlask />
        }
    ]

    return (
        <>
            <div className="md:hidden">
                <CourseContentMenuPanel pages={pageList}>
                    {children}
                </CourseContentMenuPanel>
            </div>
            <div className="max-md:hidden mt-4">
                <CourseContentTabPanel pages={pageList}>
                    {children}
                </CourseContentTabPanel>
            </div>
        </>
    )
}
