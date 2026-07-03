import { notFound } from "next/navigation"

import { createClient } from "@/lib/supabase/server"
import { termNames } from "@/lib/supabase/strings"

import EventCard from "@/components/EventCard"

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

export default async function CourseTermPage({
    params
}: Readonly<{
    params: Promise<{ course: string, term: string }>
}>) {
    const { course, term } = await params
    const courseTermId = `${course}-${term}`
    const supabase = createClient()
    const { data, error } = await supabase
        .from("course_term")
        .select(`
            *,
            course(number),
            lecture(*,videoConferenceLink:videoconference_link,extraInfo:extra_info,locationLink:location_link)
        `)
        .match({ id: courseTermId })
        .maybeSingle()

    if (error) {
        console.error(error)
        throw error
    }

    if (!data) {
        notFound()
    }

    return (
        <div className="flex flex-col">
            <h2 className="text-lg font-semibold">
                {data.course.number} &ndash; {termNames[data.term as keyof typeof termNames]} {data.year}
            </h2>
            {data.lecture.length > 0 && (
                <>
                    <h3 className="mt-4 font-medium text-gray-500">Lectures</h3>
                    <div className="flex">
                        {data.lecture.map(lecture => (
                            <EventCard
                                key={lecture.id}
                                small border
                                {...lecture}
                                description={`Section ${lecture.section} - CRN ${lecture.crn}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>

    )
}
