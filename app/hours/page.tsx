"use client"

import { useQuery } from "@supabase-cache-helpers/postgrest-swr"
import { MdErrorOutline } from "react-icons/md"

import EventCard, { EventCardSkeleton } from "@/components/EventCard"
import { createClient } from "@/lib/supabase/browser"

const ROBS_PERSON_ID = 1

export default function HoursPage() {
    const supabase = createClient()
    const { data, isLoading } = useQuery(
        supabase
            .from("hours")
            .select("id,day,start,end,location,videoConferenceLink:videoconference_link,extraInfo:extra_info")
            .match({ person_id: ROBS_PERSON_ID, type: "office" })
    )

    return (
        <main className="flex flex-col items-center mx-2 my-12">
            <h1 className="mb-4 text-2xl font-semibold">Rob&apos;s Current Office Hours</h1>
            <div className="flex flex-col justify-center w-full max-w-xl gap-2">
                {isLoading && <EventCardSkeleton />}
                {data?.length ? (
                    data.map(hours => <EventCard key={hours.id} {...hours} />)
                ) : data && (
                    <div role="alert" className="alert alert-warning my-4">
                        <span className="text-2xl"><MdErrorOutline /></span>
                        <span>There are currently no listed office hours.</span>
                    </div>
                )}
            </div>
        </main>
    )
}
