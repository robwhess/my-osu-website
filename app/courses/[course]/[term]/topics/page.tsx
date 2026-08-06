"use client"

import { use } from "react"
import { useQuery } from "@supabase-cache-helpers/postgrest-swr"
import { MdErrorOutline } from "react-icons/md"

import { createClient } from "@/lib/supabase/browser"

import LinkWithDescription from "@/components/LinkWithDescription"

import { Link } from "@/lib/types"

export default function TopicsPage({
    params
}: Readonly<{
    params: Promise<{ course: string, term: string }>
}>) {
    const { course, term } = use(params)
    const courseTermId = `${course}-${term}`
    const supabase = createClient()
    const { data, isLoading, error } = useQuery(
        supabase
            .from("topic")
            .select("*")
            .eq("course_term_id", courseTermId)
            .order("weeks", { ascending: true })
    )

    return (
        <div className="flex flex-col">
            <h3 className="text-lg font-medium">Schedule of Topics</h3>
            {error && (
                <div role="alert" className="alert my-8">
                    <span className="text-2xl text-error"><MdErrorOutline /></span>
                    <span>Sorry!  An error occurred.  Please try again later.</span>
                </div>
            )}
            {isLoading && (
                <div className="m-4">
                    <div className="skeleton h-2 w-24 my-2"></div>
                    <div className="skeleton h-6 w-72 my-2"></div>
                </div>
            )}
            {data?.map(topic => (
                <details
                    key={topic.id}
                    className="collapse collapse-arrow not-first-of-type:border-t border-base-300"
                    open={topic.is_current}
                >
                    <summary className="collapse-title flex flex-col-reverse">
                        <h4 className="text-lg font-medium uppercase text-gray-700">{topic.title}</h4>
                        <h5 className="text-sm font-medium text-gray-400">
                            {topic.weeks.length > 1 ? (
                                `Weeks ${Math.min(...topic.weeks)} - ${Math.max(...topic.weeks)}`
                            ) : (
                                `Week ${topic.weeks[0]}`
                            )}
                        </h5>
                    </summary>
                    <div className="collapse-content ml-2">
                        {topic.materials?.length && (
                            <>
                                <h5 className="font-medium text-gray-700">Lecture Materials</h5>
                                <ul className="list-disc list-outside pl-6">
                                {
                                    /*
                                        * The weird cast here is needed because the `materials`
                                        * column is a JSONB column.
                                        */
                                    (topic.materials as unknown as Link[]).map(link => (
                                        <li className="list-item" key={link.url + link.title}>
                                            <LinkWithDescription {...link} />
                                        </li>
                                    ))
                                }
                            </ul>
                            </>
                        )}
                        {topic.readings?.length && (
                            <>
                                <h5 className="mt-4 font-medium text-gray-700">Readings</h5>
                                <ul className="list-disc list-outside pl-6">
                                {
                                    /*
                                        * The weird cast here is needed because the `readings`
                                        * column is a JSONB column.
                                        */
                                    (topic.readings as unknown as Link[]).map(link => (
                                        <li className="list-item" key={link.url + link.title}>
                                            <LinkWithDescription {...link} />
                                        </li>
                                    ))
                                }
                            </ul>
                            </>
                        )}
                    </div>
                </details>
            ))}
        </div>
    )
}
