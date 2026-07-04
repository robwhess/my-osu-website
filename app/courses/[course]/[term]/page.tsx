"use client"

import { use } from "react"
import { useQuery } from "@supabase-cache-helpers/postgrest-swr"

import { createClient } from "@/lib/supabase/browser"
import { termNames } from "@/lib/supabase/strings"

import EventCard, { EventCardSkeleton } from "@/components/EventCard"

export default function CourseTermPage({
    params
}: Readonly<{
    params: Promise<{ course: string, term: string }>
}>) {
    const { course, term } = use(params)
    const courseTermId = `${course}-${term}`
    const supabase = createClient()
    const { data, isLoading } = useQuery(
        supabase
            .from("course_term")
            .select(`
                *,
                course(number),
                lecture(*,videoConferenceLink:videoconference_link,extraInfo:extra_info,locationLink:location_link)
            `)
            .match({ id: courseTermId })
            .maybeSingle()
    )

    return (
        <div className="flex flex-col">
            {isLoading && <div className="skeleton h-6 w-64"></div>}
            {data && (
                <h2 className="text-lg font-semibold">
                    {data.course.number} &ndash; {termNames[data.term as keyof typeof termNames]} {data.year}
                </h2>
            )}

            <h3 className="mt-4 mb-1 font-medium text-gray-500">Lectures</h3>
            <div className="flex flex-col md:flex-row gap-2">
                {isLoading && <EventCardSkeleton small border />}
                {data?.lecture.length && (
                    data.lecture.map(lecture => (
                        <EventCard
                            key={lecture.id}
                            small border
                            {...lecture}
                            description={`Section ${lecture.section} - CRN ${lecture.crn}`}
                        />
                )))}
            </div>
        </div>

    )
}
