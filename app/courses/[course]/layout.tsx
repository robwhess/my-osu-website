import { createClient } from "@/lib/supabase/server"
import CourseTermSelectForm from "@/components/CourseTermSelectForm"

export const dynamicParams = false

export async function generateStaticParams() {
    const supabase = createClient()
    const { data, error } = await supabase
        .from("course")
        .select("id")
        .order("number", { ascending: true })

    if (error) {
        console.error(error)
        throw error
    }

    return data.map(c => ({ course: c.id }))
}

export default async function CourseLayout({
    params,
    children
}: Readonly<{
    params: Promise<{ course: string }>,
    children: React.ReactNode
}>) {
    const { course } = await params
    const supabase = createClient()
    const { data, error } = await supabase
        .from("course")
        .select("*, courseTerm:course_term(*)")
        .eq("id", course)
        .order("year", { referencedTable: "course_term", ascending: false })
        .order("term", { referencedTable: "course_term", ascending: true })
        .maybeSingle()

    if (error) {
        console.error(error)
        throw error
    }

    return (
        <div className="p-2 md:p-4 flex flex-col items-stretch gap-2">
            <div className="flex flex-col md:flex-row md:justify-between items-stretch md:items-center gap-4">
                <div className="p-2 md:flex-2">
                    <h1 className="text-2xl font-semibold">{data?.number} &ndash; {data?.title}</h1>
                    <h2 className="text-sm">{data?.description}</h2>
                </div>
                {
                    /*
                     * If at least one course term exists for this course, then
                     * render a menu the user can use to select the course term
                     * they want to view.
                     */
                    data && data.courseTerm.length > 0 && (
                        <div className="md:flex-1">
                            <CourseTermSelectForm courseTerms={data.courseTerm} />
                        </div>
                    )
                }
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
