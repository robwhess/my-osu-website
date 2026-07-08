"use client"

import { use } from "react"
import { useQuery } from "@supabase-cache-helpers/postgrest-swr"
import { useFileUrl } from "@supabase-cache-helpers/storage-swr"
import useSWR from "swr"

import { createClient } from "@/lib/supabase/browser"
import { MdErrorOutline } from "react-icons/md"
import MarkdownRenderer from "@/components/MarkdownRenderer"

export default function CourseTermPage({
    params
}: Readonly<{
    params: Promise<{ course: string, term: string }>
}>) {
    const { course, term } = use(params)
    const courseTermId = `${course}-${term}`
    const supabase = createClient()
    const { data: queryData, isLoading: isLoadingQuery } = useQuery(
        supabase
            .from("course_term")
            .select("id,syllabus")
            .match({ id: courseTermId })
            .maybeSingle()
    )

    const { data: syllabusUrl } = useFileUrl(
        supabase.storage.from("syllabus"),
        queryData?.syllabus ?? null,
        "public"
    )

    const { data: syllabusData, error, isLoading: isLoadingSyllabus } = useSWR(
        syllabusUrl,
        url => fetch(url).then(res => res.text())
    )

    const isLoading = isLoadingQuery || isLoadingSyllabus

    return (
        <div className="flex flex-col">
            <h3 className="text-lg font-medium">Syllabus</h3>
            {isLoading && (
                <div className="flex flex-col gap-1">
                    <div className="skeleton h-4 w-84"></div>
                    <div className="skeleton h-4 w-72"></div>
                    <div className="skeleton h-4 w-60"></div>
                </div>
            )}
            {error && (
                <div role="alert" className="alert">
                    <span className="text-2xl text-error"><MdErrorOutline /></span>
                    <span>Sorry!  An error occurred.  Please try again later.</span>
                </div>
            )}
            {syllabusData && (
                <div className="m-2 mt-4 md:m-4 pt-8 border-t border-base-300">
                    <MarkdownRenderer markdown={syllabusData} />
                </div>
            )}
        </div>
    )
}
