/**
 * Import course topics from old course website.  Usage:
 *
 * node importOldCourseTopics.ts <course> <term>
 *
 * e.g. node importOldCourseTopics.ts cs493 sp26
 */

import path from "node:path"
import dotenv from "dotenv"
import { createClient } from "@supabase/supabase-js"

import { type Database, type Json } from "../generated/supabase/types.ts"

dotenv.config({ path: ".env.local" })

interface resource {
    title: string
    link?: string
    description?: string
}

interface topic {
    title: string
    weeks: number[]
    resources: resource[]
    readings?: resource[]
}

const COURSE_DATA_DIR = "/Users/hessro/my-osu-website/src/data/courses"
const term = process.argv[3]
const course = process.argv[2]

const topicsFile = path.join(COURSE_DATA_DIR, term, course, "topics.js")

const { default: topics }: { default: topic[] } = await import(topicsFile)

const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
)

topics.forEach(async topic => {
    const materials: Json[] = topic.resources?.map(resource => ({
        url: resource.link,
        title: resource.title,
        description: resource.description
    }))
    const readings: Json[] = topic.readings?.map(reading => ({
        url: reading.link,
        title: reading.title,
        description: reading.description
    })) || []
    const { error } = await supabase
        .from("topic")
        .upsert({
            title: topic.title,
            weeks: topic.weeks,
            materials: materials,
            readings: readings,
            course_term_id: `${course}-${term}`
        })
        .select()
    if (error) {
        console.error(`== Error inserting ${topic.title}:`, error)
    } else  {
        console.log("== Successfully imported", topic.title)
    }
})
