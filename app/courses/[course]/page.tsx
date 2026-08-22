import { notFound, redirect } from "next/navigation"
import { MdErrorOutline } from "react-icons/md"

import { createClient } from "@/lib/supabase/server"

export default async function CoursePage({
    params
}: Readonly<{
    params: Promise<{ course: string }>
}>) {
    const { course } = await params
    const supabase = createClient()
    const { data, error } = await supabase
        .from("course")
        .select("*, courseTerm:course_term(*)")
        .eq("id", course)
        .order("year", { referencedTable: "course_term", ascending: false })
        .order("term", { referencedTable: "course_term", ascending: true })
        .maybeSingle()

    if (error) {
        console.error(error)
        throw error
    }

    if (!data) {
        notFound()
    }

    const lastCourseTerm = data?.courseTerm[0]

    /*
     * If a course term exists for this course, then immediately redirect to
     * the page to view the most recent course term.
     */
    if (lastCourseTerm) {
        const [ course, termCode ] = lastCourseTerm.id.split("-")
        redirect(`/courses/${course}/${termCode}`)
    }

    return (
        <div role="alert" className="alert alert-warning my-4">
            <span className="text-2xl"><MdErrorOutline /></span>
            <span>There is no additional information available about this course.</span>
        </div>
    )
}
