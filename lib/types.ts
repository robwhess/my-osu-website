import { Enums, Tables } from "@/generated/supabase/types"

export type Term = Enums<"term">

export type Course = Tables<"course">
export type CourseTerm = Tables<"course_term">

export type CoursesByTerm = Record<Term, Course[]>

export interface CourseTermLink {
    url: string
    title: string,
    description?: string
}
