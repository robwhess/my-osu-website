"use client"

import { use } from "react"
import { useQuery } from "@supabase-cache-helpers/postgrest-swr"
import { GoArrowRight } from "react-icons/go"
import { MdErrorOutline } from "react-icons/md"

import { createClient } from "@/lib/supabase/browser"

import EventCard, { EventCardSkeleton } from "@/components/EventCard"
import LinkWithDescription from "@/components/LinkWithDescription"

import { Link } from "@/lib/types"

export default function CourseTermPage({
    params
}: Readonly<{
    params: Promise<{ course: string, term: string }>
}>) {
    const { course, term } = use(params)
    const courseTermId = `${course}-${term}`
    const supabase = createClient()
    const { data, isLoading, error } = useQuery(
        supabase
            .from("course_term")
            .select(`
                *,
                instructor:person(id,name,email),
                section(*,videoConferenceLink:videoconference_link,extraInfo:extra_info,locationLink:location_link),
                textbook(*)
            `)
            .eq("id", courseTermId)
            .eq("section.type", "lecture")
            .order("section", { referencedTable: "section", ascending: true })
            .maybeSingle()
    )

    return (
        <div className="flex flex-col mb-4">
            <h3 className="text-lg font-medium">Basic Info</h3>
            {error ? (
                <div role="alert" className="alert my-8">
                    <span className="text-2xl text-error"><MdErrorOutline /></span>
                    <span>Sorry!  An error occurred.  Please try again later.</span>
                </div>
            ) : (
                <>
                    <h4 className="mt-4 mb-1 text-lg font-medium uppercase text-gray-700">Instructor</h4>
                    <div className="mx-2">
                        {isLoading && <div className="skeleton h-4 w-56"></div>}
                        {data?.instructor ? (
                            <p className="font-semibold">
                                {data.instructor.name} (<a className="link" href={`mailto:${data.instructor.email}`}>{data.instructor.email}</a>)
                            </p>
                        ) : (
                            data && <p className="ml-1 text-sm text-gray-400">No instructor information available</p>
                        )}
                    </div>

                    <h4 className="mt-4 mb-1 text-lg font-medium uppercase text-gray-700">Lectures</h4>
                    <div className="mx-1 flex flex-col md:flex-row gap-2">
                        {isLoading && <EventCardSkeleton tight border />}
                        {data?.section?.length ? (
                            data?.section?.map(lecture => (
                                <EventCard
                                    key={lecture.id}
                                    tight border
                                    {...lecture}
                                    heading={`Section ${lecture.section} - CRN ${lecture.crn}`}
                                />
                        ))) : (
                            data && <p className="ml-1 text-sm text-gray-400">No lecture information available</p>
                        )}
                    </div>

                    <h4 className="mt-4 text-lg font-medium uppercase text-gray-700">Textbooks</h4>
                    <div className="mx-2">
                        {isLoading && <div className="skeleton h-4 w-48"></div>}
                        {data?.textbook?.length ? (
                            <ul>
                                {data.textbook.map(textbook => (
                                    <li key={textbook.id} className="mb-1">
                                        <p>
                                            <span className="font-semibold">
                                                {textbook.link ? (
                                                    <a
                                                        href={textbook.link}
                                                        className="link"
                                                        target="_blank" rel="noopener noreferrer"
                                                    >
                                                        {textbook.title}
                                                    </a>
                                                ) : textbook.title}
                                            </span>
                                            {textbook.author && (
                                                <span className="italic text-gray-700"> by {textbook.author}</span>
                                            )}
                                        </p>
                                        {textbook.description && (
                                            <p className="ml-2 pl-4 -indent-4 text-sm"><GoArrowRight className="inline-block" /> {textbook.description}</p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            data && <p className="ml-1 text-sm text-gray-400">No textbook information available</p>
                        )}
                    </div>

                    <h4 className="mt-4 text-lg font-medium uppercase text-gray-700">Links</h4>
                    {isLoading && <div className="skeleton h-4 w-72"></div>}
                    {data?.links?.length ? (
                        <ul className="list-disc list-outside pl-6">
                            {
                                /*
                                * The weird cast here is needed because the `links`
                                * column is a JSONB column.
                                */
                                (data.links as unknown as Link[]).map(link => (
                                    <li className="list-item" key={link.url}>
                                        <LinkWithDescription {...link} />
                                    </li>
                                ))
                            }
                        </ul>
                    ) : (
                        data && <p className="ml-1 text-sm text-gray-400">No course links available</p>
                    )}
                </>
            )}
        </div>
    )
}
