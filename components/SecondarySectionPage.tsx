"use client"

import { useQuery } from "@supabase-cache-helpers/postgrest-swr"
import { MdErrorOutline } from "react-icons/md"

import { createClient } from "@/lib/supabase/browser"
import { SectionType } from "@/lib/types"

import EventCard, { EventCardSkeleton } from "./EventCard"
import TopicsList from "./TopicsList"

export default function SecondarySectionPage({
    courseTermId,
    sectionType
}: {
    courseTermId: string
    sectionType: SectionType
}) {
    const supabase = createClient()
    const { data, isLoading, error } = useQuery(
        supabase
            .from("section")
            .select(`
                *,videoConferenceLink:videoconference_link,extraInfo:extra_info,locationLink:location_link,
                leader:person(id,name),
                topic(*)
            `)
            .eq("course_term_id", courseTermId)
            .eq("type", sectionType)
            .order("section", { ascending: true })
    )

    const topics = data?.flatMap(section => section.topic)
        .sort((a, b) => (a.weeks[0] ?? 0) - (b.weeks[0] ?? 0)) || []

    return (
        <div className="flex flex-col">
            <h3 className="text-lg font-medium">
                {sectionType === "recitation" ? "Recitations" : "Labs"}
            </h3>
            {error && (
                <div role="alert" className="alert my-8">
                    <span className="text-2xl text-error"><MdErrorOutline /></span>
                    <span>Sorry!  An error occurred.  Please try again later.</span>
                </div>
            )}
            {!error && !isLoading && !data?.length && (
                <div role="alert" className="alert alert-warning mt-8">
                    <span className="text-2xl"><MdErrorOutline /></span>
                    <span>{sectionType === "recitation" ? "Recitation" : "Lab"} information not available.</span>
                </div>
            )}
            <div className="flex flex-col">
                <ul className="flex flex-wrap gap-4 my-6">
                    {isLoading && (
                        <li className="flex gap-4 py-4 px-6 border border-base-300 rounded-sm">
                            <div className="flex flex-col gap-1">
                                <div className="skeleton h-2 w-16"></div>
                                <div className="skeleton h-2 w-12"></div>
                            </div>
                            <div>
                                <EventCardSkeleton shadow={false} />
                            </div>
                        </li>
                    )}
                    {data && data.map(section => (
                        <li
                            key={section.id}
                            className="flex gap-4 py-4 px-6 border border-base-300 rounded-sm"
                        >
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-sm">Section {section.section}</p>
                                <p className="text-xs text-gray-400">CRN {section.crn}</p>
                            </div>
                            <div>
                                <EventCard shadow={false} {...section} />
                                <h5 className="mt-6 text-sm font-semibold">Section leaders</h5>
                                {section.leader.length > 0 ? (
                                    <ul className="list-outside list-disc pl-6">
                                        {section.leader.map(leader => (
                                            <li className="list-item text-sm" key={leader.id}>{leader.name}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="ml-2 text-sm text-gray-400">TBD</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
                {data && data.length > 0 && (
                    <div>
                        <h4 className="text-lg font-semibold">
                            Weekly {sectionType === "recitation" ? "Recitation" : "Lab"} Schedule
                        </h4>
                        {topics.length > 0 ? (
                            <TopicsList topics={topics} />
                        ) : (
                            <div role="alert" className="alert my-4">
                                <span className="text-2xl"><MdErrorOutline /></span>
                                <span>Weekly schedule not available.</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
