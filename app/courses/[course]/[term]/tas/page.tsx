"use client"

import { use } from "react"
import { useQuery } from "@supabase-cache-helpers/postgrest-swr"

import { createClient } from "@/lib/supabase/browser"
import EventCard from "@/components/EventCard"

export default function TAsPage({
    params
}: Readonly<{
    params: Promise<{ course: string, term: string }>
}>) {
    const { course, term } = use(params)
    const courseTermId = `${course}-${term}`
    const supabase = createClient()
    const { data, isLoading } = useQuery(
        supabase
            .from("person")
            .select("*,hours!inner(*,videoConferenceLink:videoconference_link,extraInfo:extra_info)")
            .eq("hours.course_term_id", courseTermId)
    )

    return (
        <div className="flex flex-col">
            <h3 className="text-lg font-medium">TAs</h3>
            <ul>
                {isLoading && (
                    <li className="md:px-4 pt-6">
                        <div className="skeleton h-8 w-40 my-2"></div>
                        <div className="skeleton h-4 w-48 my-2"></div>
                    </li>
                )}
                {data?.map(person => (
                    <li key={person.id} className="flex flex-col md:flex-row gap-4 md:px-4 py-12 first:pt-6 not-first:border-t border-base-300">
                        <div className="flex-2">
                            <h4 className="text-lg font-medium uppercase text-gray-700">{person.name}</h4>
                            <p className="text-sm"><a className="link" href={`mailto:${person.email}`}>{person.email}</a></p>
                        </div>
                        {[[ "office", "grading" ].map(type => (
                            <div key={type} className="flex-3">
                                <h5 className="mb-1 md:pl-1 font-medium capitalize text-gray-700">{type} hours</h5>
                                <div className="flex flex-wrap gap-2">
                                    {person.hours.filter(hours => hours.type === type).map(hours => (
                                        <div key={hours.id}>
                                            <EventCard tight small {...hours} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))]}
                    </li>
                ))}
            </ul>
        </div>
    )
}
