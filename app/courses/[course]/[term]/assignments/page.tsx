"use client"

import { use } from "react"
import { useQuery } from "@supabase-cache-helpers/postgrest-swr"
import { MdErrorOutline, MdOutlineEditOff } from "react-icons/md"
import slugify from "slugify"
import Link from "next/link"

import { createClient } from "@/lib/supabase/browser"

import MarkdownRenderer from "@/components/MarkdownRenderer"
import AssignmentCard from "@/components/AssignmentCard"

export default function AssignmentsPage({
    params
}: Readonly<{
    params: Promise<{ course: string, term: string }>
}>) {
    const { course, term } = use(params)
    const courseTermId = `${course}-${term}`
    const supabase = createClient()
    const { data, isLoading, error } = useQuery(
        supabase
            .from("assignment_group")
            .select("*,assignment(*)")
            .eq("course_term_id", courseTermId)
            .order("created_at", { ascending: true })
            .order("created_at", { referencedTable: "assignment", ascending: true })
    )

    const slugs = data?.map(group => ({
        title: group.title,
        slug: slugify(group.title, { lower: true })
    })) || []

    return (
        <div className="flex flex-col">
            <h3 className="text-lg font-medium">Assignments</h3>
            {error && (
                <div role="alert" className="alert my-8">
                    <span className="text-2xl text-error"><MdErrorOutline /></span>
                    <span>Sorry!  An error occurred.  Please try again later.</span>
                </div>
            )}
            {isLoading && (
                <div className="m-4">
                    <div className="skeleton h-6 w-64 mt-6"></div>
                    <div className="skeleton h-2 w-84 my-2"></div>
                    <div className="skeleton h-2 w-72 my-2"></div>
                    <div className="skeleton h-2 w-80 my-2"></div>
                </div>
            )}
            {!error && !isLoading && !data?.length && (
                <div role="alert" className="alert alert-warning my-8">
                    <span className="text-2xl"><MdErrorOutline /></span>
                    <span>No assignments available.</span>
                </div>
            )}
            {slugs.length > 1 && (
                <nav className="pt-6">
                    <h5 className="font-semibold">Jump to...</h5>
                    <ul className="list-disc list-outside text-sm pl-6">
                        {slugs.map(slug => (
                            <li key={slug.slug} className="list-item">
                                <Link className="link" href={`#${slug.slug}`}>{slug.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
            {data?.map((group, idx) => (
                <div
                    key={group.id}
                    className="md:px-4 py-12 first-of-type:pt-6 not-last-of-type:border-b border-base-300"
                >
                    <div className="flex-2">
                        <h4
                            id={slugs[idx].slug}
                            className="text-lg font-medium uppercase text-gray-700"
                        >
                            {group.title}
                        </h4>
                        {group.description && (
                            <MarkdownRenderer small markdown={group.description} />
                        )}
                        {group.assignment.length > 0 ? (
                            <ul className="flex flex-col items-stretch lg:flex-row flex-wrap gap-2 mt-4">
                                {group.assignment.map(assignment => (
                                    <li key={assignment.id} className="basis-7/16">
                                        <AssignmentCard {...assignment} />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div role="alert" className="alert my-8">
                                <span className="text-2xl"><MdOutlineEditOff /></span>
                                <span>No assignments available in this category.</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
