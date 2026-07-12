import { createClient } from "@/lib/supabase/server"

import CourseListNav from "@/components/CourseListNav"

export default async function CoursesLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const supabase = createClient()
    const { data, error } = await supabase
        .from("course")
        .select()
        .order("number", { ascending: true })

    if (error) {
        console.error(error)
        throw error
    }

    return (
        <div className="min-h-dvh flex flex-col md:flex-row items-stretch">
            <div className="shrink-0">
                <CourseListNav courses={data} />
            </div>
            <div className="grow">
                {children}
            </div>
        </div>
    )
}
