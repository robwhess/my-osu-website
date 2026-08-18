import SecondarySectionPage from "@/components/SecondarySectionPage"

export default async function RecitationsPage({
    params
}: Readonly<{
    params: Promise<{ course: string, term: string }>
}>) {
    const { course, term } = await params
    const courseTermId = `${course}-${term}`

    return <SecondarySectionPage sectionType="recitation" courseTermId={courseTermId} />
}
