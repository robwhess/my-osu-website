import Link from "next/link"

export default function NotFound() {
    return (
        <main className="mx-auto flex flex-col items-center gap-4">
            <h2 className="mt-24 text-3xl text-center">The term you selected is invalid.</h2>
            <p><Link className="link text-sm" href="/courses">Return to the courses page</Link></p>
        </main>
    )
}
