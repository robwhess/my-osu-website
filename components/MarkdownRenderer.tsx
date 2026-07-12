import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"
import rehypeSlug from "rehype-slug"

export default function MarkdownRenderer({
    markdown,
    toc
}: {
    markdown: string,
    toc?: boolean
}) {

    return (
        <div className="prose prose-lead:leading-normal prose-li:marker:text-base-content">
            <Markdown
                remarkPlugins={toc ? [ remarkGfm, remarkToc ] : [ remarkGfm ]}
                rehypePlugins={toc ? [ rehypeSlug ] : []}
            >
                {markdown}
            </Markdown>
        </div>
    )
}
