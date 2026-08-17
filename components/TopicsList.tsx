/*
 * Component for rendering a list of course topics.
 */

import { Link, Topic } from "@/lib/types"

import LinkWithDescription from "./LinkWithDescription"

export default function TopicsList({
    topics
} : {
    topics: Topic[]
}) {
    return (
        <div>
            {topics.map(topic => (
                <details
                    key={topic.id}
                    className="collapse collapse-arrow not-first-of-type:border-t border-base-300"
                    open={topic.is_current}
                >
                    <summary className="collapse-title flex flex-col-reverse">
                        <h4 className="text-lg font-medium uppercase text-gray-700">{topic.title}</h4>
                        <h5 className="text-sm font-medium text-gray-400">
                            {topic.weeks.length > 1 ? (
                                `Weeks ${Math.min(...topic.weeks)} - ${Math.max(...topic.weeks)}`
                            ) : (
                                `Week ${topic.weeks[0]}`
                            )}
                        </h5>
                    </summary>
                    <div className="collapse-content ml-2">
                        {topic.materials?.length && (
                            <>
                                <h5 className="font-medium text-gray-700">Lecture Materials</h5>
                                <ul className="list-disc list-outside pl-6">
                                    {
                                        /*
                                         * The weird cast here is needed because the `materials`
                                         * column is a JSONB column.
                                         */
                                        (topic.materials as unknown as Link[]).map(link => (
                                            <li className="list-item" key={link.url + link.title}>
                                                <LinkWithDescription {...link} />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </>
                        )}
                        {topic.readings?.length && (
                            <>
                                <h5 className="mt-4 font-medium text-gray-700">Readings</h5>
                                <ul className="list-disc list-outside pl-6">
                                    {
                                        /*
                                         * The weird cast here is needed because the `readings`
                                         * column is a JSONB column.
                                         */
                                        (topic.readings as unknown as Link[]).map(link => (
                                            <li className="list-item" key={link.url + link.title}>
                                                <LinkWithDescription {...link} />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </>
                        )}
                    </div>
                </details>
            ))}
        </div>
    )
}
