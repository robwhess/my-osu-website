import Image from "next/image"

import { createClient } from "@/lib/supabase/server"

import robImg from "@/static/rob.jpg"
import MarkdownRenderer from "@/components/MarkdownRenderer"

export default async function HomePage() {
    const supabase = createClient()
    const { data } = supabase.storage.from("copy").getPublicUrl("about-me.md")
    const res = await fetch(data.publicUrl)
    let markdown
    if (res.ok) {
        markdown = await res.text()
    } else {
        throw await res.json()
    }

    return (
        <main className="flex justify-center my-8 lg:my-12">
            <div className="card card-lg lg:card-side lg:max-w-6xl max-w-2xl mx-2 bg-base-100 shadow-xs">
                <figure className="flex-1">
                    <Image src={robImg} alt="Photo of Rob Hess" loading="eager" />
                </figure>
                <div className="card-body flex-1">
                    <MarkdownRenderer markdown={markdown} />
                </div>
            </div>
        </main>
    )
}
