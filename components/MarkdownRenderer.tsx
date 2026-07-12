import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"
import rehypeSlug from "rehype-slug"

export default function MarkdownRenderer({
    markdown
}: {
    markdown: string
}) {
    return (
        <div className="prose prose-lead:leading-normal prose-li:marker:text-base-content">
            <Markdown
                remarkPlugins={[ remarkGfm, remarkToc ]}
                rehypePlugins={[ rehypeSlug ]}
            >
                {markdown}
            </Markdown>
        </div>
    )
}
