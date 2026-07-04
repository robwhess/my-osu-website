import { notFound } from "next/navigation"

import { createClient } from "@/lib/supabase/server"
import { termNames } from "@/lib/supabase/strings"

import EventCard from "@/components/EventCard"

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
                    <h3 className="mt-4 mb-1 font-medium text-gray-500">Lectures</h3>
                    <div className="flex flex-col md:flex-row gap-2">
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
