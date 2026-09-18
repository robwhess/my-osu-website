/*
 * Component for rendering a list of course topics.
 */

import Link from "next/link"
import slugify from "slugify"
import { FaLink } from "react-icons/fa6"

import { Link as LinkType, Topic } from "@/lib/types"

import LinkWithDescription from "./LinkWithDescription"

function LinksList({
    title,
    links
} : {
    title: string,
    links: LinkType[]
}) {
    return (
        <>
            <h5 className="font-medium text-gray-700">{title}</h5>
            <ul className="list-disc list-outside pl-6">
                {links.map(link => (
                    <li className="list-item" key={link.url + link.title}>
                        <LinkWithDescription {...link} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default function TopicsList({
    topics
} : {
    topics: Topic[]
}) {
    const slugs: { [key: number]: string } = {}
    topics.forEach(topic => {
        slugs[topic.id] = slugify(topic.title, { lower: true })
    })
    return (
        <div>
            {topics.map(topic => (
                <div key={topic.id} id={slugs[topic.id]} className="flex">
                    <div className="py-8 text-xl text-gray-500">
                        <Link
                            href={`#${slugs[topic.id]}`}
                            aria-label={`Permanent link to topic "${topic.title}"`}
                        >
                            <FaLink />
                        </Link>
                    </div>
                    <details
                        className="collapse collapse-arrow not-first-of-type:border-t border-base-300"
                        open={topic.is_current}
                    >
                        <summary className="collapse-title flex flex-col-reverse">
                            <h4 className="text-lg font-medium uppercase text-gray-700">{topic.title}</h4>
                            <div className="flex gap-2 items-center">
                                <h5 className="text-sm font-medium text-gray-400">
                                    {topic.weeks.length > 1 ? (
                                        `Weeks ${Math.min(...topic.weeks)} - ${Math.max(...topic.weeks)}`
                                    ) : (
                                        `Week ${topic.weeks[0]}`
                                    )}
                                </h5>
                                {topic.is_current && (
                                    <div className="badge badge-xs badge-primary font-semibold">Current</div>
                                )}
                            </div>
                        </summary>
                        <div className="collapse-content ml-2 flex flex-col gap-4">
                            {topic.materials.length > 0 && (
                                <div>
                                    <LinksList
                                        title="Course Materials"
                                        links={topic.materials as unknown as LinkType[]}
                                    />
                                </div>
                            )}
                            {topic.readings.length > 0 && (
                                <div>
                                    <LinksList
                                        title="Readings"
                                        links={topic.readings as unknown as LinkType[]}
                                    />
                                </div>
                            )}
                        </div>
                    </details>
                </div>
            ))}
        </div>
    )
}
