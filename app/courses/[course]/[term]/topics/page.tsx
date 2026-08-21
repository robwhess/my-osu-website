"use client"

import { use } from "react"
import { useQuery } from "@supabase-cache-helpers/postgrest-swr"
import { MdErrorOutline } from "react-icons/md"

import { createClient } from "@/lib/supabase/browser"

import TopicsList from "@/components/TopicsList"

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
            .is("section", null)
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
            {!error && !isLoading && !data?.length && (
                <div role="alert" className="alert alert-warning my-8">
                    <span className="text-2xl"><MdErrorOutline /></span>
                    <span>Schedule of topics not available.</span>
                </div>
            )}
            {data && <TopicsList topics={data} /> }
        </div>
    )
}
