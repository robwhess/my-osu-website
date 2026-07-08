import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"

export default function MarkdownRenderer({
    markdown
}: {
    markdown: string
}) {
    return (
        <div className="prose prose-lead:leading-normal prose-li:marker:text-base-content">
            <Markdown remarkPlugins={[ remarkGfm, remarkToc ]}>
                {markdown}
            </Markdown>
        </div>
    )
}
