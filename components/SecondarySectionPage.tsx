"use client"

import { useQuery } from "@supabase-cache-helpers/postgrest-swr"
import { MdErrorOutline } from "react-icons/md"

import { createClient } from "@/lib/supabase/browser"
import { SectionType } from "@/lib/types"

import EventCard, { EventCardSkeleton } from "./EventCard"

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
                leader:person(id,name)
            `)
            .eq("course_term_id", courseTermId)
            .eq("type", sectionType)
            .order("section", { ascending: true })
    )

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
                <div role="alert" className="alert alert-warning my-8">
                    <span className="text-2xl"><MdErrorOutline /></span>
                    <span>{sectionType === "recitation" ? "Recitation" : "Lab"} information not available.</span>
                </div>
            )}
            <ul>
                {isLoading && (
                    <li className="flex gap-6 md:mx-6 py-6 not-last-of-type:border-b not-last-of-type:border-base-300">
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
                        className="flex gap-4 md:mx-4 py-6 not-last-of-type:border-b not-last-of-type:border-base-300"
                    >
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold">Section {section.section}</p>
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
        </div>
    )
}
