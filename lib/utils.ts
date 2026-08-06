import { Course, CoursesByTerm } from "./types"

/**
 * This function groups an array of courses by term.
 */
export function groupCoursesByTerm(courses: Course[]): CoursesByTerm {
    const coursesByTerm: CoursesByTerm = {
        winter: [],
        spring: [],
        summer: [],
        fall: []
    }

    for (const course of courses ?? []) {
        for (const term of course.terms ?? []) {
            coursesByTerm[term].push(course)
        }
    }

    return coursesByTerm
}
