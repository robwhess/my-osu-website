import { Enums, Tables } from "@/lib/generated-types"

export type Term = Enums<"term">
export type SectionType = Enums<"section_type">

export type Course = Tables<"course">
export type CourseTerm = Tables<"course_term">
export type Assignment = Tables<"assignment">
export type Topic = Tables<"topic">

export type CoursesByTerm = Record<Term, Course[]>

export interface Link {
    url: string
    title: string,
    description?: string
}
