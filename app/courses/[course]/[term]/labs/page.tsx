import SecondarySectionPage from "@/components/SecondarySectionPage"

export default async function LabsPage({
    params
}: Readonly<{
    params: Promise<{ course: string, term: string }>
}>) {
    const { course, term } = await params
    const courseTermId = `${course}-${term}`

    return <SecondarySectionPage sectionType="lab" courseTermId={courseTermId} />
}
