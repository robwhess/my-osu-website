import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"
import rehypeSlug from "rehype-slug"

export default function MarkdownRenderer({
    markdown,
    toc,
    small
}: {
    markdown: string,
    toc?: boolean,
    small?: boolean
}) {

    return (
        <div className={`
            prose
            ${small ? "prose-sm" : ""}
            prose-p:leading-normal prose-li:leading-normal prose-li:marker:text-base-content
        `}>
            <Markdown
                remarkPlugins={toc ? [ remarkGfm, remarkToc ] : [ remarkGfm ]}
                rehypePlugins={toc ? [ rehypeSlug ] : []}
                components={{
                    /*
                     * Open links in a new tab if they start with https:// or
                     * http://.
                     */
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    a({ children, className, href, node, ...rest }) {
                        return /^https?:\/\//.test(href || "") ? (
                            <a
                                {...rest}
                                className={className}
                                href={href}
                                target="_blank" rel="noopener noreferrer"
                            >
                                {children}
                            </a>
                        ) : (
                            <a
                                {...rest}
                                className={className}
                                href={href}
                            >
                                {children}
                            </a>
                        )
                    }
                }}
            >
                {markdown}
            </Markdown>
        </div>
    )
}
